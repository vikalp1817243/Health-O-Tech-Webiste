<div align="center">

  <img src="public/logo.png" alt="Health-O-Tech Logo" width="160" />

  # Health-O-Tech (HOT)
  ### Where Healthcare Meets Technology

  [![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.7-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

  <p align="center">
    Official website for <b>Health-O-Tech (HOT)</b> — the student health informatics and biomedical technology club at VIT Bhopal University.
  </p>

  <p align="center">
    <a href="#-about-health-o-tech">About</a> •
    <a href="#-core-domains">Domains</a> •
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-project-structure">Structure</a> •
    <a href="#-contributing">Contributing</a> •
    <a href="#-license">License</a>
  </p>

</div>

---

## 🧬 About Health-O-Tech

**Health-O-Tech (HOT)** is a student-led organization at VIT Bhopal University focused on exploring the convergence of computer science, engineering, and health informatics. The club brings together students across various engineering disciplines to learn, build projects, conduct academic research, and organize campus health events like the annual *Run Riot* marathon.

---

## 🔬 Core Domains

The club's activities and student projects span six primary verticals:

| Domain | Focus Area | Technologies & Tools |
| :--- | :--- | :--- |
| **🧠 AI & Diagnostics** | Machine learning exploration for medical imaging, dataset analysis, and clinical diagnostic assistance. | Python, PyTorch, TensorFlow, OpenCV |
| **🩺 IoT & Bio-Sensors** | Wearable biosensor prototyping, pulse and ECG signal capture, microcontroller telemetry. | ESP32, Arduino, Biomedical Sensors, BLE |
| **🧬 Genomics & Bio-Informatics** | Computational biology pipelines, sequence alignment algorithms, genetic data analysis. | Python, Biopython, Bioinformatics Toolkits |
| **📊 Health Informatics** | Digital health records, clinical database systems, patient data workflows. | SQL, REST APIs, Web Technologies |
| **🤖 Assistive Devices & Bionics** | Prototyping basic assistive mechanisms, sensor-assisted mobility aids, and ergonomic designs. | Microcontrollers, Servo Motors, 3D Modeling |
| **🥽 Medical Simulation & Visualization** | Anatomy visualization, educational simulations, and 3D visual aids for health education. | WebGL, Web Standards, 3D Assets |

---

## ✨ Key Features of the Platform

- **⚡ Biopunk Cyber Aesthetic**: Custom dark theme featuring bioluminescent cyan (`#00C8FF`) and emerald (`#00E676`) accents with frosted glassmorphic card surfaces.
- **🧬 Interactive Particle Canvas**: Custom HTML5 Canvas particle field on the hero section that smoothly reacts to cursor interaction.
- **🏃 Featured Events Gallery**: Media showcase and photo gallery highlighting campus initiatives including the annual *Run Riot '26* marathon.
- **🃏 Sticky Stacking FAQ Cards**: Interactive stacked card deck in the FAQ section powered by CSS sticky positioning and Framer Motion entrance animations.
- **👥 Multi-Tenure Team Architecture (`/team`)**:
  - **Desktop Flowchart**: Dynamic Eraser-style organizational hierarchy diagram connecting the Executive Directorate, Department Leads, and Core Members.
  - **Mobile Cards View**: Clean card layout grouped by department with quick-filter pills for seamless mobile browsing.
  - **Member Modal**: Detailed modal popup with member profiles, roles, quotes, and social links.
  - **Real-Time Search**: Instant filtering across members, roles, departments, batches, and academic branches.
- **📊 Google Sheets / Drive Live Sync**: Fetches team rosters dynamically across tenures via a Google Apps Script Web App, with local fallback data if offline.
- **📬 Health & Wellness Inquiry Desk**: Interactive contact form for student inquiries regarding club activities, wellness initiatives, and events.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) + CSS Custom Properties
- **Motion & Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Data Integration**: Google Apps Script Web App (syncing multi-tenure Google Sheets from Drive)
- **Typography**: [Orbitron](https://fonts.google.com/specimen/Orbitron) & [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (**18.x** or higher recommended)
- `npm` (comes with Node.js) or `pnpm` / `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/vikalp1817243/Health-O-Tech-Webiste.git
cd Health-O-Tech-Webiste
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables (Optional)

Copy the example environment configuration:

```bash
cp .env.example .env
```

To sync live team data from your Google Drive folder, add your Google Apps Script Web App URL to `.env`:

```env
VITE_GOOGLE_SHEETS_API_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

> **Note**: If `VITE_GOOGLE_SHEETS_API_URL` is omitted, the application automatically uses comprehensive local fallback data in `src/lib/teamData.js`.

### 4. Start the Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 5. Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
Health-O-Tech-Webiste/
├── .agents/                    # Agent skills & development conventions
│   └── skills/
│       └── health-o-tech-dev/  # Guidelines and design tokens
├── gas/                        # Google Apps Script API source
│   └── TeamFolderAPI.gs        # Multi-sheet Google Drive sync script
├── public/                     # Static assets (logos, video, event photos)
│   ├── banner.jpg
│   ├── dna.mp4
│   ├── logo.png
│   └── events/
│       └── run-riot-26/        # Marathon event photo assets
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── home/               # Home sections (Hero, About, Domains, Events, Milestones, FAQ, Join)
│   │   ├── team/               # Team page components (EraserHierarchyChart, MemberCard, MemberModal)
│   │   ├── ui/                 # Shared UI elements (Icons.jsx)
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   └── ScrollToTop.jsx     # Floating back-to-top button
│   ├── lib/
│   │   ├── teamData.js         # Team data fetching, caching, and fallback data
│   │   └── utils.js            # Shared utility functions
│   ├── pages/                  # Page route components
│   │   ├── Home.jsx            # Main landing page
│   │   ├── Team.jsx            # Team hierarchy & roster page
│   │   └── NotFound.jsx        # 404 error page
│   ├── App.jsx                 # Route configurations and layout wrapper
│   ├── index.css               # Design tokens, theme colors, circuit background
│   └── main.jsx                # Application entry point
├── .env.example                # Sample environment file
├── .gitignore                  # Git ignore rules
├── eslint.config.js            # ESLint flat configuration
├── index.html                  # HTML entry point with web fonts
├── LICENSE                     # MIT License
├── package.json                # Project dependencies and npm scripts
└── vite.config.js              # Vite configuration with Tailwind CSS v4
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes:
   ```bash
   git commit -m "feat: describe your change"
   ```
4. **Push** to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open** a Pull Request against the `main` branch

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">
  <sub>Built by <b>Health-O-Tech (HOT)</b> • Vellore Institute of Technology, Bhopal</sub>
</div>
