
import { Crown, Shield, Award, Sparkles, User } from 'lucide-react';

export const LEVEL_CONFIG = {
  0: {
    label: "Level 0 • Executive Head",
    borderColor: "border-amber-500/50 hover:border-amber-400",
    badgeBg: "bg-amber-500/15 text-amber-300 border-amber-500/40",
    glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]",
    modalGlow: "shadow-[0_0_50px_rgba(245,158,11,0.25)]",
    border: "border-amber-500/50",
    icon: Crown,
    cardBg: "from-amber-950/30 via-neutral-900/90 to-neutral-950/90",
  },
  1: {
    label: "Level 1 • Executive Director",
    borderColor: "border-cyan-500/50 hover:border-cyan-400",
    badgeBg: "bg-cyan-500/15 text-cyan-300 border-cyan-500/40",
    glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]",
    modalGlow: "shadow-[0_0_50px_rgba(6,182,212,0.25)]",
    border: "border-cyan-500/50",
    icon: Shield,
    cardBg: "from-cyan-950/30 via-neutral-900/90 to-neutral-950/90",
  },
  2: {
    label: "Level 2 • General Administration",
    borderColor: "border-purple-500/50 hover:border-purple-400",
    badgeBg: "bg-purple-500/15 text-purple-300 border-purple-500/40",
    glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]",
    modalGlow: "shadow-[0_0_50px_rgba(168,85,247,0.25)]",
    border: "border-purple-500/50",
    icon: Award,
    cardBg: "from-purple-950/30 via-neutral-900/90 to-neutral-950/90",
  },
  4: {
    label: "Level 4 • Department Leadership",
    borderColor: "border-emerald-500/40 hover:border-emerald-400",
    badgeBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
    glow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    modalGlow: "shadow-[0_0_50px_rgba(16,185,129,0.2)]",
    border: "border-emerald-500/50",
    icon: Sparkles,
    cardBg: "from-emerald-950/20 via-neutral-900/90 to-neutral-950/90",
  },
  5: {
    label: "Level 5 • Core Member",
    borderColor: "border-white/10 hover:border-white/30",
    badgeBg: "bg-white/10 text-gray-200 border-white/20",
    glow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.08)]",
    modalGlow: "shadow-[0_0_40px_rgba(255,255,255,0.1)]",
    border: "border-white/20",
    icon: User,
    cardBg: "from-neutral-900/80 to-neutral-950/80",
  },
};

export const TEAMS_LIST = [
  "Technical Team",
  "Anchoring Team",
  "Social Media Team",
  "Event Management Team",
  "Content Team",
  "Design Team",
  "PR and Outreach Team",
];

export const INITIAL_TEAM_MEMBERS = [
  // ==========================================
  // Level 0: President
  // ==========================================
  {
    id: "pres-1",
    name: "Aarav Sharma",
    role: "President",
    level: 0,
    team_name: "Executive Directorate",
    photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    email: "president@healthotech.org",
    linkedin_url: "https://linkedin.com",
    github_url: "https://github.com",
    tagline: "Steering club vision, strategic partnerships & innovation initiatives",
  },

  // ==========================================
  // Level 1: Vice-President
  // ==========================================
  {
    id: "vp-1",
    name: "Priya Nair",
    role: "Vice-President",
    level: 1,
    team_name: "Executive Directorate",
    photo_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    email: "vp@healthotech.org",
    linkedin_url: "https://linkedin.com",
    github_url: "https://github.com",
    tagline: "Overseeing cross-team synergy, execution quality & growth operations",
  },

  // ==========================================
  // Level 2: General Secretary
  // ==========================================
  {
    id: "gensec-1",
    name: "Rohan Varma",
    role: "General Secretary",
    level: 2,
    team_name: "Executive Directorate",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    email: "gensec@healthotech.org",
    linkedin_url: "https://linkedin.com",
    github_url: "https://github.com",
    tagline: "Governance, coordination, regulatory compliance & official relations",
  },

  // ==========================================
  // TEAM 1: Technical (Lead, Vice Lead, Mem 01-05)
  // ==========================================
  {
    id: "tech-lead",
    name: "Kabir Mehta",
    role: "Team Lead",
    level: 4,
    team_name: "Technical Team",
    photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    tagline: "Full-stack web & IoT healthcare monitoring systems",
    email: "kabir@healthotech.org",
  },
  {
    id: "tech-vlead",
    name: "Ananya Iyer",
    role: "Vice Lead",
    level: 4,
    team_name: "Technical Team",
    photo_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    tagline: "Embedded microcontrollers & sensor integrations",
    email: "ananya@healthotech.org",
  },
  {
    id: "tech-m1",
    name: "Devansh Patel",
    role: "Mem 01",
    level: 5,
    team_name: "Technical Team",
    photo_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    tagline: "Frontend developer & React engineer",
  },
  {
    id: "tech-m2",
    name: "Sanya Gupta",
    role: "Mem 02",
    level: 5,
    team_name: "Technical Team",
    photo_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    tagline: "Backend developer & database architect",
  },
  {
    id: "tech-m3",
    name: "Nikhil Joshi",
    role: "Mem 03",
    level: 5,
    team_name: "Technical Team",
    photo_url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400",
    tagline: "Mobile app developer (Flutter / React Native)",
  },
  {
    id: "tech-m4",
    name: "Rhea Deshmukh",
    role: "Mem 04",
    level: 5,
    team_name: "Technical Team",
    photo_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    tagline: "Cloud infrastructure & CI/CD pipeline manager",
  },
  {
    id: "tech-m5",
    name: "Arman Sheikh",
    role: "Mem 05",
    level: 5,
    team_name: "Technical Team",
    photo_url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    tagline: "Firmware developer & hardware tester",
  },

  // ==========================================
  // TEAM 2: Research (Lead, Vice Lead, Mem 01-05)
  // ==========================================
  {
    id: "res-lead",
    name: "Dr. Vikram Joshi",
    role: "Team Lead",
    level: 4,
    team_name: "Anchoring Team",
    photo_url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    tagline: "Biomedical signals & clinical algorithm design",
    email: "vikram@healthotech.org",
  },
  {
    id: "res-vlead",
    name: "Meera Kulkarni",
    role: "Vice Lead",
    level: 4,
    team_name: "Anchoring Team",
    photo_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    tagline: "Computational genomics & medical dataset curation",
    email: "meera@healthotech.org",
  },
  {
    id: "res-m1",
    name: "Aditya Rao",
    role: "Mem 01",
    level: 5,
    team_name: "Anchoring Team",
    photo_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    tagline: "Bio-signal preprocessing & ECG anomaly detection",
  },
  {
    id: "res-m2",
    name: "Tara Sen",
    role: "Mem 02",
    level: 5,
    team_name: "Anchoring Team",
    photo_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    tagline: "Literature review & peer-reviewed paper writer",
  },
  {
    id: "res-m3",
    name: "Varun Nair",
    role: "Mem 03",
    level: 5,
    team_name: "Anchoring Team",
    photo_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    tagline: "Statistical analysis & data modeling",
  },
  {
    id: "res-m4",
    name: "Ishita Roy",
    role: "Mem 04",
    level: 5,
    team_name: "Anchoring Team",
    photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    tagline: "Computer vision for medical radiography",
  },
  {
    id: "res-m5",
    name: "Chirag Bhatt",
    role: "Mem 05",
    level: 5,
    team_name: "Anchoring Team",
    photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    tagline: "Wearable sensor metrics researcher",
  },

  // ==========================================
  // TEAM 3: Events (Lead, Vice Lead, Mem 01-05)
  // ==========================================
  {
    id: "eve-lead",
    name: "Karan Malhotra",
    role: "Team Lead",
    level: 4,
    team_name: "Event Management Team",
    photo_url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400",
    tagline: "National healthtech hackathons & expo coordinator",
    email: "karan@healthotech.org",
  },
  {
    id: "eve-vlead",
    name: "Neha Reddy",
    role: "Vice Lead",
    level: 4,
    team_name: "Event Management Team",
    photo_url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400",
    tagline: "Venue operations, logistics & guest management",
    email: "neha@healthotech.org",
  },
  {
    id: "eve-m1",
    name: "Ishaan Ghosh",
    role: "Mem 01",
    level: 5,
    team_name: "Event Management Team",
    photo_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    tagline: "Stage & presentation manager",
  },
  {
    id: "eve-m2",
    name: "Anika Bose",
    role: "Mem 02",
    level: 5,
    team_name: "Event Management Team",
    photo_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    tagline: "Attendee registration & helpline lead",
  },
  {
    id: "eve-m3",
    name: "Rajat Saxena",
    role: "Mem 03",
    level: 5,
    team_name: "Event Management Team",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    tagline: "Logistics, audio-visual & equipment flow",
  },
  {
    id: "eve-m4",
    name: "Sneha Pillai",
    role: "Mem 04",
    level: 5,
    team_name: "Event Management Team",
    photo_url: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400",
    tagline: "Workshop host & speaker liaison",
  },
  {
    id: "eve-m5",
    name: "Deepak Soni",
    role: "Mem 05",
    level: 5,
    team_name: "Event Management Team",
    photo_url: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400",
    tagline: "Crowd management & volunteer coordination",
  },

  // ==========================================
  // TEAM 4: Design (Lead, Vice Lead, Mem 01-05)
  // ==========================================
  {
    id: "des-lead",
    name: "Dia Singhania",
    role: "Team Lead",
    level: 4,
    team_name: "Design Team",
    photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    tagline: "Brand direction, Figma systems & UI/UX design",
    email: "dia@healthotech.org",
  },
  {
    id: "des-vlead",
    name: "Arjun Verma",
    role: "Vice Lead",
    level: 4,
    team_name: "Design Team",
    photo_url: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400",
    tagline: "Motion graphics, 3D medical assets & animations",
    email: "arjun@healthotech.org",
  },
  {
    id: "des-m1",
    name: "Riya Kapoor",
    role: "Mem 01",
    level: 5,
    team_name: "Design Team",
    photo_url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400",
    tagline: "Digital illustrator & poster designer",
  },
  {
    id: "des-m2",
    name: "Kunal Jain",
    role: "Mem 02",
    level: 5,
    team_name: "Design Team",
    photo_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    tagline: "Figma prototyping & user research",
  },
  {
    id: "des-m3",
    name: "Kavya Menon",
    role: "Mem 03",
    level: 5,
    team_name: "Design Team",
    photo_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    tagline: "Social media visual designer",
  },
  {
    id: "des-m4",
    name: "Harsh Vardhan",
    role: "Mem 04",
    level: 5,
    team_name: "Design Team",
    photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    tagline: "Video editor & reel creator",
  },
  {
    id: "des-m5",
    name: "Tanvi Shah",
    role: "Mem 05",
    level: 5,
    team_name: "Design Team",
    photo_url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400",
    tagline: "Typography & merchandise branding",
  },

  // ==========================================
  // TEAM 5: PR & Outreach (Lead, Vice Lead, Mem 01-05)
  // ==========================================
  {
    id: "pr-lead",
    name: "Simran Kaur",
    role: "Team Lead",
    level: 4,
    team_name: "PR and Outreach Team",
    photo_url: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=400",
    tagline: "Media partnerships & press release manager",
    email: "simran@healthotech.org",
  },
  {
    id: "pr-vlead",
    name: "Gaurav Bhatt",
    role: "Vice Lead",
    level: 4,
    team_name: "PR and Outreach Team",
    photo_url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400",
    tagline: "College ambassadorship program director",
    email: "gaurav@healthotech.org",
  },
  {
    id: "pr-m1",
    name: "Tanya Sen",
    role: "Mem 01",
    level: 5,
    team_name: "PR and Outreach Team",
    photo_url: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400",
    tagline: "Instagram & LinkedIn community manager",
  },
  {
    id: "pr-m2",
    name: "Aman Tyagi",
    role: "Mem 02",
    level: 5,
    team_name: "PR and Outreach Team",
    photo_url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400",
    tagline: "Inter-collegiate communication representative",
  },
  {
    id: "pr-m3",
    name: "Bhavna Joshi",
    role: "Mem 03",
    level: 5,
    team_name: "PR and Outreach Team",
    photo_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    tagline: "Influencer relations & podcast coordinator",
  },
  {
    id: "pr-m4",
    name: "Manav Dave",
    role: "Mem 04",
    level: 5,
    team_name: "PR and Outreach Team",
    photo_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    tagline: "Newsletter outreach specialist",
  },
  {
    id: "pr-m5",
    name: "Sakshi Mishra",
    role: "Mem 05",
    level: 5,
    team_name: "PR and Outreach Team",
    photo_url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400",
    tagline: "Campus feedback & audience analytics",
  },

  // ==========================================
  // TEAM 6: Sponsorship (Lead, Vice Lead, Mem 01-05)
  // ==========================================
  {
    id: "spon-lead",
    name: "Siddharth Jain",
    role: "Team Lead",
    level: 4,
    team_name: "Social Media Team",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    tagline: "Corporate medtech alliances & research grants",
    email: "siddharth@healthotech.org",
  },
  {
    id: "spon-vlead",
    name: "Nandini Pillai",
    role: "Vice Lead",
    level: 4,
    team_name: "Social Media Team",
    photo_url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
    tagline: "Pitch deck formulation & corporate relations",
    email: "nandini@healthotech.org",
  },
  {
    id: "spon-m1",
    name: "Farhan Ali",
    role: "Mem 01",
    level: 5,
    team_name: "Social Media Team",
    photo_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    tagline: "Lead generation & corporate prospecting",
  },
  {
    id: "spon-m2",
    name: "Pooja Hegde",
    role: "Mem 02",
    level: 5,
    team_name: "Social Media Team",
    photo_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    tagline: "Deliverables tracking & sponsor relations",
  },
  {
    id: "spon-m3",
    name: "Karthik Raj",
    role: "Mem 03",
    level: 5,
    team_name: "Social Media Team",
    photo_url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400",
    tagline: "Contract drafting & financial coordinator",
  },
  {
    id: "spon-m4",
    name: "Divya Nambiar",
    role: "Mem 04",
    level: 5,
    team_name: "Social Media Team",
    photo_url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400",
    tagline: "Alumni network outreach & sponsorships",
  },
  {
    id: "spon-m5",
    name: "Pranav Dixit",
    role: "Mem 05",
    level: 5,
    team_name: "Social Media Team",
    photo_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    tagline: "Budget auditor & sponsor onboarding",
  },

  // ==========================================
  // TEAM 7: Content (Lead, Vice Lead, Mem 01-05)
  // ==========================================
  {
    id: "con-lead",
    name: "Pooja Das",
    role: "Team Lead",
    level: 4,
    team_name: "Content Team",
    photo_url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400",
    tagline: "Editorial director, annual journals & whitepapers",
    email: "pooja@healthotech.org",
  },
  {
    id: "con-vlead",
    name: "Raghav Chawla",
    role: "Vice Lead",
    level: 4,
    team_name: "Content Team",
    photo_url: "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&q=80&w=400",
    tagline: "Technical blogs, research briefs & speechwriter",
    email: "raghav@healthotech.org",
  },
  {
    id: "con-m1",
    name: "Zoya Khan",
    role: "Mem 01",
    level: 5,
    team_name: "Content Team",
    photo_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    tagline: "Scientific blog author & proofreader",
  },
  {
    id: "con-m2",
    name: "Neil Sen",
    role: "Mem 02",
    level: 5,
    team_name: "Content Team",
    photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    tagline: "Podcast scriptwriter & show notes creator",
  },
  {
    id: "con-m3",
    name: "Lavanya Seth",
    role: "Mem 03",
    level: 5,
    team_name: "Content Team",
    photo_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    tagline: "Event summary author & newsletter editor",
  },
  {
    id: "con-m4",
    name: "Omkar Kulkarni",
    role: "Mem 04",
    level: 5,
    team_name: "Content Team",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    tagline: "Social media copywriter & caption strategist",
  },
  {
    id: "con-m5",
    name: "Shreya Nair",
    role: "Mem 05",
    level: 5,
    team_name: "Content Team",
    photo_url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    tagline: "Documentation archivist & meeting minutes lead",
  },
];

/**
 * Resolves raw Google Drive sharing or view links into direct, high-speed CDN image URLs.
 */
export function convertGoogleDriveUrl(url) {
  if (!url) return '';
  const str = String(url).trim();
  const match = str.match(/(?:id=|\/d\/|file\/d\/)([a-zA-Z0-9_-]{20,})/i);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  return str;
}

/**
 * Cleans and validates team members:
 * - Drops vacant posts for core members (level 5)
 * - Enforces the strict maximum cap of 15 members per team (excluding executive directorates and team leads)
 */
export function sanitizeMembers(members) {
  if (!Array.isArray(members)) return [];

  const coreMemberCountByTeam = {};

  return members.filter((m) => {
    if (!m) return false;

    // Filter out vacant core members (for core members do not show vacant post)
    if (m.level === 5 && m.is_vacant) {
      return false;
    }

    // Cap core members at max 15 per team
    if (m.level === 5 && m.team_name) {
      const currentCount = coreMemberCountByTeam[m.team_name] || 0;
      if (currentCount >= 15) {
        return false;
      }
      coreMemberCountByTeam[m.team_name] = currentCount + 1;
    }

    return true;
  });
}

export async function fetchTeamMembers() {
  return INITIAL_TEAM_MEMBERS;
}

/**
 * Fetches team members for a given tenure or the latest batch.
 * Priority: Google Sheets (Drive Folder API) -> Local Fallback Data
 */
export async function fetchTeamData(tenure = '') {
  const apiUrl = import.meta.env.VITE_GOOGLE_SHEETS_API_URL;

  if (apiUrl) {
    try {
      const queryParam = tenure ? `?tenure=${encodeURIComponent(tenure)}` : '';
      const response = await fetch(`${apiUrl}${queryParam}`);

      if (response.ok) {
        const result = await response.json();
        if (result && result.members && result.members.length > 0) {
          const rawMembers = result.members.map((m) => ({
            ...m,
            photo_url: convertGoogleDriveUrl(m.photo_url),
            level: typeof m.level === 'number' ? m.level : 5,
          }));

          const sanitizedMembers = sanitizeMembers(rawMembers);

          return {
            tenures: result.tenures || (result.currentTenure ? [result.currentTenure] : []),
            currentTenure: result.currentTenure || tenure || (result.tenures && result.tenures[0]) || 'Current Batch',
            members: sanitizedMembers,
            source: 'sheets',
          };
        }
      } else {
        console.warn('Google Sheets API returned non-OK status:', response.status);
      }
    } catch (err) {
      console.warn('Failed to fetch from Google Sheets API, falling back:', err);
    }
  }

  // Fallback: Supabase or local initial members
  const fallbackMembers = await fetchTeamMembers();
  return {
    tenures: ['Current Batch (2025-26)'],
    currentTenure: 'Current Batch (2025-26)',
    members: sanitizeMembers(
      fallbackMembers.map((m) => ({
        ...m,
        photo_url: convertGoogleDriveUrl(m.photo_url),
      }))
    ),
    source: 'fallback',
  };
}

