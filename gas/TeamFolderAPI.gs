/**
 * =========================================================================
 * Health-O-Tech (HOT) - Multi-Sheet Team Sync API (Google Apps Script)
 * =========================================================================
 *
 * HOW THIS WORKS:
 * 1. Place all your tenure Google Sheets (e.g. "Batch 2026-27", "Batch 2025-26")
 *    inside a single Google Drive folder.
 * 2. Paste this script into Google Apps Script (script.google.com).
 * 3. Replace TEAM_FOLDER_ID below with your Google Drive Folder ID.
 * 4. Click Deploy -> New Deployment -> Type: Web App:
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL and add it to your website's .env:
 *    VITE_GOOGLE_SHEETS_API_URL=https://script.google.com/macros/s/.../exec
 *
 * Whenever you add a new Google Sheet into that folder for a new tenure,
 * the website automatically discovers it and makes it available in the dropdown!
 */

// REPLACE THIS WITH YOUR GOOGLE DRIVE FOLDER ID:
// (The string after /folders/ in your Google Drive folder URL)
const TEAM_FOLDER_ID = "1CKEDTeh4lYniJfpgYObcmt98Itd52L46";

/**
 * Handle incoming GET requests from the website.
 * Supported query params:
 *   - ?tenure=Batch 2026-27  (loads specific tenure/sheet)
 *   - (no params)             (defaults to latest tenure, returns all available tenures)
 */
function doGet(e) {
  try {
    const requestedTenure = e && e.parameter && e.parameter.tenure ? e.parameter.tenure.trim() : null;
    const data = getTeamData(requestedTenure);
    
    return ContentService
      .createTextOutput(JSON.stringify(data))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    const errorResponse = {
      success: false,
      error: err.toString(),
      tenures: [],
      members: []
    };
    return ContentService
      .createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Retrieve team data from Google Drive folder or standalone spreadsheet.
 */
function getTeamData(requestedTenure) {
  const folder = DriveApp.getFolderById(TEAM_FOLDER_ID);
  const filesIter = folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  
  const sheetFiles = [];
  while (filesIter.hasNext()) {
    const file = filesIter.next();
    sheetFiles.push({
      id: file.getId(),
      name: file.getName(),
      lastUpdated: file.getLastUpdated().getTime()
    });
  }

  if (sheetFiles.length === 0) {
    return {
      success: false,
      error: "No Google Sheets found inside the specified Drive folder.",
      tenures: [],
      members: []
    };
  }

  // Sort tenures naturally descending (newest batch first)
  sheetFiles.sort(function(a, b) {
    return b.name.localeCompare(a.name, undefined, { numeric: true, sensitivity: 'base' });
  });

  const tenureNames = sheetFiles.map(function(f) { return f.name; });

  // Select target sheet: requested tenure or default to first (newest)
  let targetFile = sheetFiles[0];
  if (requestedTenure) {
    const matched = sheetFiles.find(function(f) {
      return f.name.toLowerCase() === requestedTenure.toLowerCase() || f.id === requestedTenure;
    });
    if (matched) {
      targetFile = matched;
    }
  }

  // Open the spreadsheet
  const ss = SpreadsheetApp.openById(targetFile.id);
  const sheet = ss.getSheets()[0]; // Read first tab of the spreadsheet
  const rows = sheet.getDataRange().getValues();

  if (!rows || rows.length < 2) {
    return {
      success: true,
      currentTenure: targetFile.name,
      tenures: tenureNames,
      members: []
    };
  }

  // Row 1 = Headers
  const rawHeaders = rows[0].map(function(h) { return String(h).trim(); });
  const headerMap = mapHeaders(rawHeaders);

  const members = [];
  const coreMemberCountByTeam = {};

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const rawName = getCell(row, headerMap.name);
    const role = getCell(row, headerMap.role) || "Core Member";
    const rawTeam = getCell(row, headerMap.team) || "General";
    const team_name = normalizeTeamName(rawTeam, role);
    const level = inferHierarchyLevel(role, team_name);

    const isVacant = isVacantIndicator(rawName);

    // Core members: do NOT show vacant posts, skip row
    if (level === 5 && isVacant) {
      continue;
    }

    // Completely empty row
    if (isVacant && !role && !rawTeam) {
      continue;
    }

    // Cap core members at max 15 per team
    if (level === 5) {
      const currentCount = coreMemberCountByTeam[team_name] || 0;
      if (currentCount >= 15) {
        continue;
      }
      coreMemberCountByTeam[team_name] = currentCount + 1;
    }

    const rawPhoto = getCell(row, headerMap.photo);
    const photo_url = isVacant ? "" : convertDriveUrl(rawPhoto);

    members.push({
      id: "mem-" + targetFile.id.slice(0, 5) + "-" + i,
      name: isVacant ? (level === 0 || level === 4 ? "Position Vacant" : "Not Assigned") : rawName,
      is_vacant: isVacant,
      role: role,
      level: level,
      team_name: team_name,
      email: isVacant ? "" : getCell(row, headerMap.email),
      registration_number: isVacant ? "" : getCell(row, headerMap.registration_number),
      batch: isVacant ? "" : getCell(row, headerMap.batch),
      branch: isVacant ? "" : getCell(row, headerMap.branch),
      tagline: isVacant ? "" : getCell(row, headerMap.tagline),
      linkedin_url: isVacant ? "" : getCell(row, headerMap.linkedin),
      github_url: isVacant ? "" : getCell(row, headerMap.github),
      photo_url: photo_url
    });
  }

  return {
    success: true,
    currentTenure: targetFile.name,
    tenures: tenureNames,
    members: members
  };
}

/**
 * Checks whether a name or cell value indicates a vacant position.
 */
function isVacantIndicator(text) {
  if (!text) return true;
  const s = String(text).trim().toLowerCase();
  return (
    s === "" ||
    s === "vacant" ||
    s === "position vacant" ||
    s === "not assigned" ||
    s === "tbd" ||
    s === "n/a" ||
    s === "na" ||
    s === "none" ||
    s === "unassigned" ||
    s === "details not available"
  );
}

/**
 * Safely get a cell value by header column index.
 */
function getCell(row, colIndex) {
  if (colIndex === undefined || colIndex === -1 || colIndex >= row.length) {
    return "";
  }
  const val = row[colIndex];
  return val === null || val === undefined ? "" : String(val).trim();
}

/**
 * Flexible header matching (case-insensitive & handles synonyms).
 */
function mapHeaders(headers) {
  const norm = headers.map(function(h) { return h.toLowerCase().replace(/[^a-z0-9]/g, ""); });

  function findIdx(synonyms) {
    for (let i = 0; i < synonyms.length; i++) {
      const syn = synonyms[i].toLowerCase().replace(/[^a-z0-9]/g, "");
      const idx = norm.indexOf(syn);
      if (idx !== -1) return idx;
    }
    // Partial substring fallback
    for (let j = 0; j < norm.length; j++) {
      for (let k = 0; k < synonyms.length; k++) {
        const synClean = synonyms[k].toLowerCase().replace(/[^a-z0-9]/g, "");
        if (norm[j].indexOf(synClean) !== -1) return j;
      }
    }
    return -1;
  }

  return {
    name: findIdx(["name", "fullname", "membername"]),
    role: findIdx(["role", "designation", "position"]),
    team: findIdx(["team", "teamname", "department", "division"]),
    email: findIdx(["email", "mail", "emailaddress"]),
    registration_number: findIdx(["registrationnumber", "regno", "registrationno", "registerno"]),
    batch: findIdx(["batch", "year", "academicyear"]),
    branch: findIdx(["branch", "departmentbranch", "degree"]),
    photo: findIdx(["photo", "photourl", "image", "drivelink", "rawmedia"]),
    tagline: findIdx(["quote", "personalquote", "phonecode", "tagline", "bio", "punchline", "about"]),
    linkedin: findIdx(["linkedin", "linkedinurl", "linkedinlink"]),
    github: findIdx(["github", "githuburl", "githublink"])
  };
}

/**
 * Converts a Google Drive sharing link into a high-speed direct web image URL.
 */
function convertDriveUrl(url) {
  if (!url) return "";
  const str = String(url).trim();

  // Match Google Drive file ID
  const match = str.match(/(?:id=|\/d\/|file\/d\/)([a-zA-Z0-9_-]{20,})/i);
  if (match && match[1]) {
    const fileId = match[1];
    // High-performance Google User Content CDN endpoint
    return "https://lh3.googleusercontent.com/d/" + fileId;
  }
  return str;
}

/**
 * Normalizes team names to match the 7 confirmed core departments or Executive Directorate.
 * 1. Technical Team
 * 2. Anchoring Team
 * 3. Social Media Team
 * 4. Event Management Team
 * 5. Content Team
 * 6. Design Team
 * 7. PR and Outreach Team
 */
function normalizeTeamName(rawTeam, role) {
  const roleLower = (role || "").toLowerCase();
  if (roleLower.includes("president") || roleLower.includes("general secretary") || roleLower.includes("gensec")) {
    return "Executive Directorate";
  }

  const t = (rawTeam || "").toLowerCase();
  if (t.includes("tech")) return "Technical Team";
  if (t.includes("anchor")) return "Anchoring Team";
  if (t.includes("social") || t.includes("media")) return "Social Media Team";
  if (t.includes("event") || t.includes("management")) return "Event Management Team";
  if (t.includes("content")) return "Content Team";
  if (t.includes("design")) return "Design Team";
  if (t.includes("pr") || t.includes("outreach")) return "PR and Outreach Team";
  if (t.includes("exec")) return "Executive Directorate";
  return rawTeam || "Technical Team";
}

/**
 * Infer flowchart hierarchy level:
 * 0 = President
 * 1 = Vice-President
 * 2 = General Secretary
 * 4 = Lead / Vice Lead
 * 5 = Core Member
 */
function inferHierarchyLevel(role, teamName) {
  const r = (role || "").toLowerCase();
  if (r === "president" || (r.includes("president") && !r.includes("vice"))) return 0;
  if (r.includes("vice president") || r.includes("vice-president") || r.includes("vp")) return 1;
  if (r.includes("general secretary") || r.includes("gen sec") || r.includes("gensec")) return 2;
  if (r.includes("lead") || r.includes("head") || r.includes("director")) return 4;
  return 5;
}
