import { ProjectItem, SkillCategory, CertificationItem, ExperienceItem } from '../types';

export const portfolioConfig = {
  name: "Sinta Dwi Aryani",
  nickName: "Sinta",
  devBrand: "Sinta Dev.",
  role: "Sistem Informasi Enthusiast",
  roleEn: "Information Systems Enthusiast",
  headlinePrefixId: "Halo! Saya",
  headlinePrefixEn: "Hello! I am",
  taglineId: "Menjembatani kesenjangan antara teknologi dan proses bisnis. Saya merancang solusi digital yang efisien, intuitif, dan berdampak nyata.",
  taglineEn: "Bridging the gap between technology and business processes. I design efficient, intuitive, and impactful digital solutions.",
  aboutDetailedId: "Saya merupakan mahasiswa Universitas Komputama Majenang, Fakultas Sains dan Teknologi, Program Studi Sistem Informasi yang berfokus pada pengembangan sistem web modern dan analisis proses bisnis.",
  aboutDetailedEn: "I am an Information Systems student at Universitas Komputama Majenang, Faculty of Science and Technology, focusing on modern web system development and business process analysis.",
  email: "sintaryn27@gmail.com",
  emailDisplay: "sintaryn27@gmail.com",
  github: "https://github.com/sintaryn",
  linkedin: "https://linkedin.com/in/sintadwiaryani",
  whatsapp: "+62 812-3456-7890",
  gpa: "3.88 / 4.00",
  university: "Universitas Komputama Majenang",
  faculty: "Fakultas Sains dan Teknologi",
  studyProgram: "S1 Sistem Informasi",
  images: {
    pasFoto: "/public/assets/aistudio/pas_foto_latar_biru_40a84452.jpeg",
    screenshotReference: "/public/assets/aistudio/image_37dcb949.png",
    dashboardAnalytics: "/src/assets/images/si_dashboard_analytics_1792908623127.jpg",
    ecommercePlatform: "/src/assets/images/si_ecommerce_platform_1792908624111.jpg",
    mobileInventory: "/src/assets/images/si_mobile_inventory_1792908623848.jpg",
    astronomyML: "/src/assets/images/astronomy_machine_learning_1792906423711.jpg",
  }
};

export const projectsList: ProjectItem[] = [
  {
    id: "academix-sis",
    title: "Academix Enterprise — Sistem Informasi Akademik & Analytics",
    category: "si",
    categoryLabel: "Sistem Informasi",
    description: "Sistem informasi manajemen terpadu untuk monitoring metrik akademik, demografi mahasiswa, dan pelaporan keuangan institusi.",
    fullCaseStudy: "Masalah: Pengelolaan data mahasiswa dan kinerja perkuliahan tersebar di berbagai spreadsheet terpisah, menyebabkan keterlambatan laporan analitik hingga 2 minggu. Solusi: Membangun dashboard berbasis web terpusat dengan visualisasi interaktif, manajemen peran (RBAC), dan ekspor data otomatis yang memangkas waktu pelaporan sebesar 85%.",
    imageUrl: portfolioConfig.images.dashboardAnalytics,
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Chart.js", "BPMN 2.0"],
    metrics: [
      { label: "Pengguna Aktif", value: "24,850+" },
      { label: "Efisiensi Laporan", value: "+85%" },
      { label: "Akurasi Data", value: "99.9%" }
    ],
    liveUrl: "https://academix-preview.demo",
    githubUrl: "https://github.com/sintaryn/academix-sis"
  },
  {
    id: "pixelmarket-ecommerce",
    title: "PixelMarket — Platform E-Commerce Produk Kreatif Digital",
    category: "web",
    categoryLabel: "Web Development",
    description: "Aplikasi e-commerce responsif untuk transaksi aset desain digital, kit UI, dan template grafis dengan checkout instan.",
    fullCaseStudy: "Mengembangkan platform jual-beli digital yang berfokus pada kecepatan muat halaman, alur checkout yang mulus tanpa gesekan, serta pengelolaan keranjang belanja dinamis berbasis state management modern.",
    imageUrl: portfolioConfig.images.ecommercePlatform,
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Stripe API", "Node.js", "Zustand"],
    metrics: [
      { label: "Waktu Muat", value: "0.6 detik" },
      { label: "Konversi Checkout", value: "4.8%" },
      { label: "Lighthouse Score", value: "98/100" }
    ],
    liveUrl: "https://pixelmarket.demo",
    githubUrl: "https://github.com/sintaryn/pixelmarket-ecommerce"
  },
  {
    id: "logisticsflow-mobile",
    title: "LogisticsFlow — Mobile App Manajemen Gudang & Inventaris",
    category: "mobile",
    categoryLabel: "Mobile & UI/UX",
    description: "Aplikasi mobile untuk pencatatan barang masuk-keluar, pemindaian barcode resi, dan pelacakan status pengiriman real-time.",
    fullCaseStudy: "Merancang UI/UX yang ramah pekerja lapangan (touch-target besar, palet kontras tinggi) serta mengintegrasikan pemindaian kode QR cepat untuk mempercepat proses stock opname gudang.",
    imageUrl: portfolioConfig.images.mobileInventory,
    technologies: ["React Native", "Figma", "Tailwind CSS", "REST API", "Express"],
    metrics: [
      { label: "Waktu Audit Stok", value: "-60%" },
      { label: "Tingkat Error", value: "< 0.1%" },
      { label: "Kepuasan User", value: "4.9 / 5" }
    ],
    liveUrl: "https://logisticsflow.demo",
    githubUrl: "https://github.com/sintaryn/logisticsflow-app"
  },
  {
    id: "astro-data-explorer",
    title: "AstroML — Visualisasi Data Interaktif & Machine Learning",
    category: "web",
    categoryLabel: "Data Science & Web",
    description: "Eksplorasi visualisasi data spektrum interaktif dengan simulasi pergeseran Doppler dan clustering manifold multi-dimensi.",
    fullCaseStudy: "Menerapkan visualisasi SVG dinamis dan algoritma klasterisasi tanpa pengawasan untuk mengelompokkan jutaan data astronomi ke dalam ruang laten 3D yang interaktif.",
    imageUrl: portfolioConfig.images.astronomyML,
    technologies: ["TypeScript", "SVG Canvas", "Tailwind CSS", "Python / Astropy", "Scikit-Learn"],
    metrics: [
      { label: "Data Terproses", value: "1.2M+" },
      { label: "Dimensi Latent", value: "32-D" },
      { label: "Presisi Model", value: "99.4%" }
    ],
    liveUrl: "https://astroml-preview.demo",
    githubUrl: "https://github.com/sintaryn/astroml-explorer"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "web-dev",
    title: "Pengembangan Web & Aplikasi",
    iconName: "Code2",
    skills: [
      { name: "React.js / Next.js", level: 90, note: "SPA, SSR, Hooks, State Management" },
      { name: "TypeScript / JavaScript (ES6+)", level: 88, note: "Clean code, type safety, async/await" },
      { name: "Tailwind CSS & Responsive UI", level: 92, note: "Utility-first, dark mode, animasi micro" },
      { name: "RESTful API & Node.js", level: 82, note: "Express, integrasi backend, autentikasi" },
      { name: "Git & Version Control", level: 85, note: "Branching, PRs, GitHub workflow" }
    ]
  },
  {
    id: "system-analysis",
    title: "Analisis Sistem & Bisnis (SI)",
    iconName: "BarChart3",
    skills: [
      { name: "BPMN 2.0 & Pemodelan Proses", level: 90, note: "Business Process Modeling & Notations" },
      { name: "UML Diagramming", level: 88, note: "Use Case, Activity, Sequence, Class Diagram" },
      { name: "Basis Data & SQL (PostgreSQL/MySQL)", level: 85, note: "ERD Design, Normalisasi (1NF-3NF), Queries" },
      { name: "Analisis Kebutuhan Sistem (SRS)", level: 86, note: "User Stories, Wawancara, Dokumentasi" },
      { name: "Agile & Scrum Framework", level: 84, note: "Sprint Planning, Backlog refinement, Jira" }
    ]
  },
  {
    id: "uiux-design",
    title: "UI/UX & Desain Produk",
    iconName: "Palette",
    skills: [
      { name: "Figma & Wireframing", level: 88, note: "Interactive prototypes, auto-layout, components" },
      { name: "Design System & Tokens", level: 85, note: "Typography hierarchy, color systems, grid" },
      { name: "User Research & Usability Testing", level: 82, note: "SUS Testing, Heuristic Evaluation" },
      { name: "Information Architecture (IA)", level: 86, note: "User flows, sitemaps, card sorting" }
    ]
  }
];

export const certificationsList: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    date: "2024",
    credentialId: "GDA-98214-CERT",
    skills: ["SQL", "Tableau", "Data Cleaning", "R Programming", "Spreadsheets"]
  },
  {
    id: "cert-2",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    date: "2024",
    credentialId: "META-FE-45091",
    skills: ["React", "JavaScript", "HTML5/CSS3", "UI/UX", "Version Control"]
  },
  {
    id: "cert-3",
    title: "Certified Business Analysis & BPMN Specialist",
    issuer: "International Institute of Business Analysis (IIBA Chapter)",
    date: "2023",
    credentialId: "IIBA-BPMN-7712",
    skills: ["BPMN 2.0", "Business Requirements", "Enterprise Architecture"]
  }
];

export const experienceList: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Staff / Asisten Laboratorium Komputasi & SI",
    organization: "Fakultas Sains dan Teknologi, Universitas Komputama Majenang",
    period: "2023 — Sekarang",
    description: "Membimbing praktikum mahasiswa dalam mata kuliah Analisis & Perancangan Sistem Informasi, Pemrograman Web, dan Manajemen Basis Data.",
    highlights: [
      "Membimbing lebih dari 120 mahasiswa dalam perancangan dokumen SRS dan UML.",
      "Mengembangkan modul praktikum interaktif pembuatan API menggunakan Node.js dan PostgreSQL."
    ]
  },
  {
    id: "exp-2",
    role: "Front-End Developer & UI/UX Intern",
    organization: "Digital Inovasi Solusindo",
    period: "2023",
    description: "Berkolaborasi dengan tim lintas fungsi untuk merancang dan mengimplementasikan antarmuka aplikasi dashboard analitik internal perusahaan.",
    highlights: [
      "Mengonversi 25+ desain Figma ke kode komponen React yang dapat digunakan kembali.",
      "Meningkatkan skor performa halaman utama dari 68 ke 94 pada pengujian Google Lighthouse."
    ]
  }
];
