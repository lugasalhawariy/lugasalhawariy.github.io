export const projects = [
  {
    id: "offline-pos",

    title: "Offline POS ERP",

    tagline:
      "Offline-first Point of Sale & Business Management Platform",

    category: "Mobile Application",

    year: "2025",

    status: "Production",

    thumbnail: "/images/project-pos/home.jpeg",

    overview:
      "Offline-first Point of Sale system designed for retail stores with inventory, purchasing, sales, finance and cloud synchronization.",

    problem:
      "Many small businesses experience unstable internet connections which interrupt daily operations.",

    solution:
      "Built an offline-first architecture using local database synchronization and background cloud syncing.",

    myRole: [
      "System Architect",
      "Mobile Developer",
      "Backend Developer",
      "Database Designer",
      "UI Designer"
    ],

    technologies: [
      "React Native",
      "Realm",
      "Node.js",
      "Kotlin",
      "PostgreSQL",
      "Docker"
    ],

    features: [
      "Product Management",
      "Sales Tracking",
      "Purchase Module",
      "Stock Management",
      "Stock Opname",
      "Balance of Cash",
      "Recipe Product",
      "Financial Reports",
      "Backup & Restore",
      "Thermal Printing",
      "And More"
    ],

    gallery: [
      "/images/project-pos/home.jpeg",
      "/images/project-pos/manage.jpeg",
      "/images/project-pos/laporan.jpeg",
      "/images/project-pos/grafik.jpeg",
      "/images/project-pos/modal.jpeg"
    ],

    metrics: [
      {
        label: "Architecture",
        value: "Offline First"
      },
      {
        label: "Platform",
        value: "Android"
      },
      {
        label: "Database",
        value: "Realm"
      }
    ],

    highlights: [
      "Works without internet connection",
      "Cloud synchronization support",
      "Inventory management",
      "Financial reporting",
      "Multi-device ready"
    ],

    timeline: [
      {
        title: "Research & Planning",
        description:
          "Analyzed business workflows and store operations."
      },
      {
        title: "Architecture Design",
        description:
          "Designed offline-first architecture using Realm."
      },
      {
        title: "Development",
        description:
          "Built mobile app, backend API and synchronization."
      },
      {
        title: "Testing & Release",
        description:
          "Validated business scenarios and deployed."
      }
    ],

    achievements: [
      "Reduced dependency on internet connection",
      "Improved stock accuracy",
      "Centralized business operations",
      "Faster sales transactions"
    ]
  },
    {
    id: "school-management",

    title: "School Management System",

    tagline:
        "Hybrid School Management Platform for TK/RA with Online & Offline Access",

    category: "Desktop & Web Application",

    year: "2025",

    status: "Production",

    thumbnail: "/images/project-ra-edu/sistem.png",

    overview:
        "Comprehensive school management system designed for TK/RA institutions. The platform combines an Electron desktop server with a web-based application, allowing schools to operate online through a domain or offline through a local IP address without disrupting daily operations.",

    problem:
        "Many schools still rely on manual administration, paper-based registration, and scattered communication channels. Internet instability can also disrupt access to school management systems.",

    solution:
        "Developed a hybrid architecture where an Electron desktop application acts as the local server while users access the system through a browser. Schools can continue operating using local network access when internet connectivity is unavailable.",

    myRole: [
        "System Architect",
        "Full Stack Developer",
        "Database Designer",
        "UI/UX Designer",
        "DevOps Engineer"
    ],

    technologies: [
        "Electron",
        "Vue.js",
        "Node.js",
        "Express JS",
        "MySQL",
        "Whatsapp Integration"
    ],

    features: [
        "Online Student Registration",
        "Student Management",
        "Teacher Management",
        "Class Management",
        "Academic Year Management",
        "Role Based Access Control",
        "Financial Transactions",
        "Payment Categories",
        "WhatsApp Integration",
        "Attendance Tracking",
        "Parent Communication",
        "Dashboard Analytics",
        "Offline Local Access",
        "Online Domain Access",
        "Document Management",
        "School Profile Management"
    ],

    gallery: [
        "/images/project-ra-edu/sistem-aktif.png",
        "/images/project-ra-edu/web-profile.png",
        "/images/project-ra-edu/web-profile-2.png",
        "/images/project-ra-edu/login.png",
        "/images/project-ra-edu/otoritas.png",
        "/images/project-ra-edu/dashboard.png",
        "/images/project-ra-edu/siswa.png",
        "/images/project-ra-edu/detail-siswa.png",
        "/images/project-ra-edu/kategori-transaksi.png",
    ],

    metrics: [
        {
        label: "Architecture",
        value: "Hybrid Online/Offline"
        },
        {
        label: "Platform",
        value: "Desktop + Web"
        },
        {
        label: "Database",
        value: "MySQL"
        }
    ],

    highlights: [
        "Electron desktop acts as local server",
        "Accessible through domain or local IP",
        "Integrated WhatsApp communication",
        "Online student registration",
        "Role-based permission system",
        "Financial management and reporting"
    ],

    timeline: [
        {
        title: "Requirement Analysis",
        description:
            "Studied administrative and academic workflows in TK/RA institutions."
        },
        {
        title: "System Architecture Design",
        description:
            "Designed hybrid offline-online architecture using Electron and web technologies."
        },
        {
        title: "Core Development",
        description:
            "Built student management, finance, registration, and access control modules."
        },
        {
        title: "WhatsApp Integration",
        description:
            "Integrated automated communication and notifications for parents."
        },
        {
        title: "Testing & Deployment",
        description:
            "Validated school operational workflows and deployed to production."
        }
    ],

    achievements: [
        "Reduced manual administrative workload",
        "Centralized student and financial data",
        "Improved communication with parents",
        "Supported school operations without internet",
        "Accelerated registration and payment processes"
    ]
    }
];
