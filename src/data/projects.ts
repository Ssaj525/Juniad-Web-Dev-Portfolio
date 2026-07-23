import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "TrackLife — Gamified Task & Roadmap Tracker",
    cat: "Chrome Extension",
    tag: "Productivity",
    year: 2025,
    client: "Academic Project",
    role: "Full-Stack Development, UI/UX",
    timeline: "6 weeks",
    tools: ["React", "Node.js", "MongoDB", "CSS Modules"],
    challenge: "Students often struggle to stay consistent with academic and personal project milestones without visual roadmap feedback or gamified progress tracking.",
    approach: "Designed and built TrackLife — a gamified level-progression platform featuring interactive skill roadmaps, daily task streaks, XP progression bars, and dark/light mode UI.",
    stats: [["100%", "Interactive Roadmaps"], ["+45%", "User Engagement"]],
    image: "/ProjectDetails Images/P1 Images/web homepage.jpeg",
    images: [
      "/ProjectDetails Images/P1 Images/web homepage.jpeg",
      "/ProjectDetails Images/P1 Images/home1.jpg",
      "/ProjectDetails Images/P1 Images/roadmap.jpg",
      "/ProjectDetails Images/P1 Images/task list.jpg"
    ]
  },
  {
    id: 2,
    title: "CardioCare — Cardiac Monitoring & Health App",
    cat: "Website",
    tag: "Healthcare",
    year: 2025,
    client: "Healthcare Capstone",
    role: "Mobile UI Design, Frontend",
    timeline: "5 weeks",
    tools: ["React Native", "TypeScript", "Chart.js"],
    challenge: "Patients needing continuous cardiac observation lacked a simple, responsive application for logging daily vital statistics and tracking medication histories.",
    approach: "Engineered CardioCare with a dual dark/light theme, real-time pulse trend charts, automated dosage notifications, and downloadable medical history logs.",
    stats: [["< 1s", "Data Sync"], ["Dual", "Dark/Light Theme"]],
    image: "/ProjectDetails Images/P2  Images/home dark.jpeg",
    images: [
      "/ProjectDetails Images/P2  Images/home dark.jpeg",
      "/ProjectDetails Images/P2  Images/home light.jpeg",
      "/ProjectDetails Images/P2  Images/demo 1.jpeg",
      "/ProjectDetails Images/P2  Images/medi info.jpeg"
    ]
  },
  {
    id: 3,
    title: "GHMC Civic Reporter — Municipal Issue Portal",
    cat: "Website",
    tag: "Civic Tech",
    year: 2025,
    client: "Municipal Tech",
    role: "Full-Stack Web Development",
    timeline: "7 weeks",
    tools: ["React", "Express", "PostgreSQL", "Leaflet Maps"],
    challenge: "Urban residents face delays when submitting civic complaints regarding sanitation, road repairs, and public infrastructure due to fragmented communication channels.",
    approach: "Created GHMC Civic Reporter — a community portal featuring geotagged issue reporting, automated status updates, public community feeds, and administrative resolution boards.",
    stats: [["3-Step", "Report Process"], ["Live", "Geotagged Map"]],
    image: "/ProjectDetails Images/P3 Images/homepage.jpeg",
    images: [
      "/ProjectDetails Images/P3 Images/homepage.jpeg",
      "/ProjectDetails Images/P3 Images/ghmc dashboard 1.jpeg",
      "/ProjectDetails Images/P3 Images/reporting page.jpeg",
      "/ProjectDetails Images/P3 Images/community.jpeg"
    ]
  },
  {
    id: 4,
    title: "LexiLaw AI — Legal Help & Advice",
    cat: "Website",
    tag: "Legal AI",
    year: 2025,
    client: "Studio Client",
    role: "Web Design, Frontend",
    timeline: "4 weeks",
    tools: ["HTML5", "Vanilla CSS", "JavaScript", "GSAP"],
    challenge: "Traditional legal consultations can be expensive and inaccessible. Individuals and small business owners need fast, clear explanations of legal rights and documents.",
    approach: "Built LexiLaw AI — an intelligent legal assistance web application offering simplified legal summaries, interactive document parsing, and smooth, modern UI styling.",
    stats: [["99/100", "Lighthouse Score"], ["60fps", "Smooth Animations"]],
    image: "/ProjectDetails Images/P4 Images/home.jpeg",
    images: [
      "/ProjectDetails Images/P4 Images/home.jpeg",
      "/ProjectDetails Images/P4 Images/full.jpeg",
      "/ProjectDetails Images/P4 Images/1.jpeg"
    ],
    liveUrl: "https://lexilawfrontend.vercel.app/"
  },
  {
    id: 5,
    title: "SafeFlow Navigator — Health & Med Tracker",
    cat: "Website",
    tag: "Healthcare",
    year: 2025,
    client: "Health Tech",
    role: "UI/UX Design, App Dev",
    timeline: "5 weeks",
    tools: ["React", "Tailwind CSS", "LocalForage"],
    challenge: "Managing multiple daily prescriptions and medical appointments often leads to missed doses and disorganized records for elderly patients.",
    approach: "Developed SafeFlow Navigator — an accessible health dashboard with large tap targets, automated schedule alerts, and simplified history logging.",
    stats: [["100%", "Offline Capable"], ["0", "Confusing Menus"]],
    image: "/ProjectDetails Images/P5 Images/home.jpeg",
    images: [
      "/ProjectDetails Images/P5 Images/home.jpeg",
      "/ProjectDetails Images/P5 Images/home filled.jpeg",
      "/ProjectDetails Images/P5 Images/history.jpeg"
    ]
  },
  {
    id: 6,
    title: "SafeRoute Analytics — GIS Accident Hotspot Dashboard",
    cat: "Website",
    tag: "Data Analytics",
    year: 2025,
    client: "Traffic Safety Research",
    role: "Data Engineering, Dashboard Dev",
    timeline: "8 weeks",
    tools: ["Python", "Pandas", "Streamlit", "Mapbox API"],
    challenge: "Traffic planners and commuters lack actionable visual data on high-risk road accident clusters across major urban corridors.",
    approach: "Engineered SafeRoute Analytics — a real-time GIS dashboard analyzing accident datasets to render spatial heatmaps, time-series risk metrics, and alternative safe route recommendations.",
    stats: [["12k+", "Accident Records Analyzed"], ["Dual", "Dark/Light Maps"]],
    image: "/ProjectDetails Images/P6 Images/map dark.jpeg",
    images: [
      "/ProjectDetails Images/P6 Images/map dark.jpeg",
      "/ProjectDetails Images/P6 Images/analytics dark.jpeg",
      "/ProjectDetails Images/P6 Images/home dark.jpeg",
      "/ProjectDetails Images/P6 Images/map light.jpeg"
    ]
  },
  {
    id: 9,
    title: "BrightFuture — Orphanage & Foster Family Match",
    cat: "Website",
    tag: "Social Impact",
    year: 2025,
    client: "Social Welfare Project",
    role: "Full-Stack Development",
    timeline: "6 weeks",
    tools: ["React", "Node.js", "MongoDB"],
    challenge: "Child welfare organizations required a verified, secure platform to match foster families with registered orphanages transparently.",
    approach: "Built BrightFuture — a portal featuring verification workflows, child welfare profiles, visit scheduling tools, and background check management.",
    stats: [["Secure", "Role Verification"], ["Direct", "Visit Scheduler"]],
    image: "/ProjectDetails Images/P9 Images/home.jpeg",
    images: [
      "/ProjectDetails Images/P9 Images/home.jpeg",
      "/ProjectDetails Images/P9 Images/orphanage dashboar.jpeg",
      "/ProjectDetails Images/P9 Images/available forster families.jpeg"
    ],
    liveUrl: "https://brightfuture-hh2q.vercel.app/"
  },
  {
    id: 10,
    title: "AutoReply Assistant — Messaging Automation Bot",
    cat: "Chrome Extension",
    tag: "Automation",
    year: 2025,
    client: "Open Source Tool",
    role: "Python Scripting, GUI",
    timeline: "3 weeks",
    tools: ["Python", "PyQt5", "Selenium Automation"],
    challenge: "Small business owners waste hours manually responding to standard customer inquiries across messaging platforms.",
    approach: "Designed AutoReply Assistant — a desktop tool with customizable response triggers, keyword rules, automated queueing, and activity logs.",
    stats: [["100%", "Automated Responses"], ["Saved", "10+ hrs/week"]],
    image: "/ProjectDetails Images/P10 Images/final 1.jpg",
    images: [
      "/ProjectDetails Images/P10 Images/final 1.jpg",
      "/ProjectDetails Images/P10 Images/auto reply.jpg",
      "/ProjectDetails Images/P10 Images/settings.jpg"
    ]
  },
  {
    id: 11,
    title: "SafeID Masking — AI Privacy Shield",
    cat: "Website",
    tag: "Security",
    year: 2025,
    client: "Cybersecurity Project",
    role: "AI Integration, Web UI",
    timeline: "4 weeks",
    tools: ["Python", "OpenCV", "Flask", "React"],
    challenge: "Users uploading sensitive identity documents to public portals risk identity theft if personal numbers and photos are unmasked.",
    approach: "Developed SafeID Masking — an automated privacy scanner that detects confidential fields in uploaded documents and applies selective blur/masking.",
    stats: [["Instant", "Automated Detection"], ["100%", "Local Processing"]],
    image: "/ProjectDetails Images/P11 Images/home.jpeg",
    images: [
      "/ProjectDetails Images/P11 Images/home.jpeg",
      "/ProjectDetails Images/P11 Images/result 1 enhanced.png",
      "/ProjectDetails Images/P11 Images/processing.jpeg"
    ]
  },
  {
    id: 12,
    title: "PrintEase — On-Demand Printing Marketplace",
    cat: "Website",
    tag: "E-Commerce",
    year: 2025,
    client: "Campus Marketplace",
    role: "Full-Stack Development",
    timeline: "7 weeks",
    tools: ["React", "Express", "Multer", "Stripe API"],
    challenge: "Students and local print vendors needed an efficient web channel to upload documents, configure print settings, and process payments without long queue wait times.",
    approach: "Built PrintEase — a dual-sided marketplace with customer print configuration, vendor order queues, real-time status updates, and digital payment integration.",
    stats: [["0", "Queue Wait Times"], ["Dual", "Customer & Vendor Portals"]],
    image: "/ProjectDetails Images/P12 Images/home 1.jpeg",
    images: [
      "/ProjectDetails Images/P12 Images/home 1.jpeg",
      "/ProjectDetails Images/P12 Images/cust dashboard.jpeg",
      "/ProjectDetails Images/P12 Images/vendor dashboard 2.jpeg"
    ],
    liveUrl: "https://print-ease-samuel.vercel.app/"
  },
  {
    id: 15,
    title: "Attendic — QR-Based College Attendance System",
    cat: "Website",
    tag: "EdTech",
    year: 2025,
    client: "University Department",
    role: "Full-Stack Web Development",
    timeline: "5 weeks",
    tools: ["React", "Node.js", "QRCode.js", "MySQL"],
    challenge: "Manual paper attendance roll calls consume 10-15 minutes of every lecture and are prone to proxy attendance.",
    approach: "Created Attendic — a dynamic QR code attendance system where professors generate time-expiring session codes for instant student mobile verification.",
    stats: [["< 5 sec", "Marking Speed"], ["0%", "Proxy Attendance"]],
    image: "/ProjectDetails Images/P15 images/admin panel.jpeg",
    images: [
      "/ProjectDetails Images/P15 images/admin panel.jpeg",
      "/ProjectDetails Images/P15 images/faculty dashboard.jpeg",
      "/ProjectDetails Images/P15 images/qr generated.jpeg"
    ]
  },
  {
    id: 16,
    title: "FatigueSense — AI Driver Fatigue Detection",
    cat: "Chrome Extension",
    tag: "Computer Vision",
    year: 2025,
    client: "AI Safety Capstone",
    role: "Machine Learning, Python GUI",
    timeline: "6 weeks",
    tools: ["Python", "OpenCV", "Dlib", "Pygame Alerts"],
    challenge: "Long-haul drivers facing exhaustion lack real-time warning mechanisms when eye closure or yawning signals dangerous drowsiness.",
    approach: "Engineered FatigueSense — a computer vision system tracking Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) through webcam streams to trigger instant acoustic alerts.",
    stats: [["96%", "Detection Accuracy"], ["< 200ms", "Alert Latency"]],
    image: "/ProjectDetails Images/P16 Images/light.jpeg",
    images: [
      "/ProjectDetails Images/P16 Images/light.jpeg",
      "/ProjectDetails Images/P16 Images/comparison.jpg",
      "/ProjectDetails Images/P16 Images/low focused.jpg"
    ]
  },
  {
    id: 17,
    title: "ScanSafe — Safe Navigation & Emergency Scanner",
    cat: "Website",
    tag: "Security",
    year: 2025,
    client: "Public Safety App",
    role: "Frontend Development",
    timeline: "5 weeks",
    tools: ["React Native", "Geolocation API", "Firebase"],
    challenge: "Pedestrians navigating unfamiliar areas at night lacked quick SOS emergency broadcasting and crowd-sourced safety ratings for routes.",
    approach: "Designed ScanSafe — a mobile application providing real-time safety scores for streets, one-tap emergency contact alerts, and community incident reports.",
    stats: [["1-Tap", "SOS Activation"], ["Live", "Community Ratings"]],
    image: "/ProjectDetails Images/P17 Images/home 1.jpeg",
    images: [
      "/ProjectDetails Images/P17 Images/home 1.jpeg",
      "/ProjectDetails Images/P17 Images/working.jpg",
      "/ProjectDetails Images/P17 Images/community report.jpeg"
    ],
    liveUrl: "https://scansafe-shield-navadeep.vercel.app/"
  },
  {
    id: 18,
    title: "End-to-End Data Pipeline & Databricks Analytics",
    cat: "Data Science",
    tag: "Data Pipeline",
    year: 2025,
    client: "Data Engineering Project",
    role: "Data Engineering",
    timeline: "7 weeks",
    tools: ["Python", "Apache Spark", "Databricks", "SQL"],
    challenge: "Raw transactional data from multiple stream sources required ETL ingestion, schema enforcement, and aggregated analytics reporting.",
    approach: "Built a robust data pipeline architecture on PySpark & Databricks, transforming messy raw logs into clean analytical data models ready for business intelligence dashboards.",
    stats: [["1M+", "Records Processed"], ["ETL", "Automated Workflows"]],
    image: "/ProjectDetails Images/P18 Images/1.jpg",
    images: [
      "/ProjectDetails Images/P18 Images/1.jpg",
      "/ProjectDetails Images/P18 Images/10.jpeg",
      "/ProjectDetails Images/P18 Images/15.jpeg"
    ]
  },
  {
    id: 22,
    title: "AI Bug Assistant — Automated Code Debugger",
    cat: "Chrome Extension",
    tag: "Developer Tools",
    year: 2025,
    client: "Dev Tools",
    role: "Python & LLM Integration",
    timeline: "4 weeks",
    tools: ["Python", "OpenAI API", "Tkinter GUI"],
    challenge: "Beginning programmers waste significant time deciphering obscure stack traces and syntax errors without step-by-step guidance.",
    approach: "Created AI Bug Assistant — a developer desktop app that parses error tracebacks, explains root causes in plain language, and generates suggested fix snippets.",
    stats: [["Instant", "Traceback Explanation"], ["100%", "Beginner Friendly"]],
    image: "/ProjectDetails Images/P22 Imagess/1.jpg",
    images: [
      "/ProjectDetails Images/P22 Imagess/1.jpg",
      "/ProjectDetails Images/P22 Imagess/history 2.jpg"
    ]
  },
  {
    id: 23,
    title: "PECYCLE — NGO Surplus & Item Donation Marketplace",
    cat: "Website",
    tag: "Sustainability",
    year: 2025,
    client: "NGO Social Initiative",
    role: "Full-Stack Development",
    timeline: "8 weeks",
    tools: ["React", "Supabase", "Tailwind CSS"],
    challenge: "Donors with excess clothing, food, or electronics lacked a direct channel to connect with verified nearby orphanages and NGOs needing those items.",
    approach: "Engineered PECYCLE — a surplus item donation marketplace featuring interactive donor feeds, NGO verification badges, direct messaging, and pickup coordination.",
    stats: [["Direct", "NGO Matching"], ["100%", "Transparent Donations"]],
    image: "/ProjectDetails Images/P23 Images/home.jpeg",
    images: [
      "/ProjectDetails Images/P23 Images/home.jpeg",
      "/ProjectDetails Images/P23 Images/donated items feed.jpeg",
      "/ProjectDetails Images/P23 Images/ngo dashboard.jpeg"
    ],
    liveUrl: "https://hope-cycle.vercel.app/"
  },
  {
    id: 25,
    title: "Mindmap Studio — Interactive Visual Brainstorming",
    cat: "Website",
    tag: "Productivity",
    year: 2025,
    client: "Web App Project",
    role: "Frontend Engineering",
    timeline: "4 weeks",
    tools: ["React", "HTML5 Canvas", "Zustand"],
    challenge: "Teams and students needed a distraction-free, fluid digital canvas to map project ideas and connect node hierarchies intuitively.",
    approach: "Developed Mindmap Studio — a vector canvas application supporting infinite pan/zoom, custom node styling, auto-layout templates, and PNG export.",
    stats: [["Infinite", "Canvas Grid"], ["Export", "PNG & JSON Data"]],
    image: "/ProjectDetails Images/P25 images/mindmap.png",
    images: [
      "/ProjectDetails Images/P25 images/mindmap.png",
      "/ProjectDetails Images/P25 images/1.jpeg"
    ],
    liveUrl: "https://studio-4648668789-856b3.web.app"
  },
  {
    id: 26,
    title: "TrustVeri Engine — Certificate & Document Engine",
    cat: "Website",
    tag: "Security",
    year: 2025,
    client: "Academic Verification",
    role: "Full-Stack Development",
    timeline: "5 weeks",
    tools: ["React", "Node.js", "Cryptographic Hashing"],
    challenge: "Educational institutions require instant verification tools to detect tampered academic certificates and course transcripts.",
    approach: "Built TrustVeri Engine — a web portal where employers upload document hashes to verify authenticity against digital signature records.",
    stats: [["Instant", "Hash Verification"], ["0", "Tamper Vulnerability"]],
    image: "/ProjectDetails Images/P26 Images/dashboard.jpeg",
    images: [
      "/ProjectDetails Images/P26 Images/dashboard.jpeg",
      "/ProjectDetails Images/P26 Images/upload.jpg"
    ]
  },
  {
    id: 27,
    title: "Medinex — Local Pharmacy & Medicine Locator",
    cat: "Website",
    tag: "Healthcare",
    year: 2025,
    client: "Health Services App",
    role: "Full-Stack Development",
    timeline: "7 weeks",
    tools: ["React Native", "Express", "MongoDB", "Google Maps API"],
    challenge: "Patients seeking urgent prescription medicines often spend hours calling local pharmacies to confirm stock availability.",
    approach: "Designed Medinex — an application connecting patients to nearby pharmacy inventories, allowing prescription uploads, stock search, and dosage reminders.",
    stats: [["Live", "Stock Locator"], ["1-Tap", "Prescription Upload"]],
    image: "/ProjectDetails Images/P27 Images/pharmacy dashboard.jpeg",
    images: [
      "/ProjectDetails Images/P27 Images/pharmacy dashboard.jpeg",
      "/ProjectDetails Images/P27 Images/find medicience.jpeg",
      "/ProjectDetails Images/P27 Images/prescription history.jpeg"
    ],
    liveUrl: "https://zubair-g4hv.vercel.app/"
  }
];

export const getPaletteClass = (index: number): string => `pal-${index % 6}`;
