import { FaGithub } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { SiApachekafka, SiBootstrap, SiCss3, SiExpress, SiFastify, SiFigma, SiGit, SiHtml5, SiJavascript, SiJest, SiMongodb, SiMui, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiReact, SiRedis, SiSass, SiShopify, SiTailwindcss, SiVisualstudiocode, SiVuedotjs, SiWindows10 } from "react-icons/si";

export const menus = [
    {
        id: 'hero',
        title: "Home",
        color: "rose-500"
    },
    {
        id: 'profile',
        title: "Profile",
        color: "orange-500"
    },
    {
        id: 'experience',
        title: "Experience",
    },
    {
        id: 'project',
        title: "Projects",
        color: "cyan-500"
    }
]


export const lang = [
    {
        name: "HTML",
        icon: SiHtml5,
        color: "#e34c26"
    },
    {
        name: "CSS",
        icon: SiCss3,
        color: "#264de4"
    },
    {
        name: "Javascript",
        icon: SiJavascript,
        color: "#f0db4f"
    },
    {
        name: "PHP",
        icon: SiPhp,
        color: "#AEB2D5"
    },
    {
        name: "Go",
        icon: FaGolang,
        color: "#00ADD8"
    }
]

export const framework = [
    {
        name: "React Js",
        icon: SiReact,
        color: "#00ffff"
    },
    {
        name: "Next Js",
        icon: SiNextdotjs,
        color: "#fff"
    },
    {
        name: "React Native",
        icon: SiReact,
        color: "#61dafb"
    },
    {
        name: "Express Js",
        icon: SiExpress,
        color: "#fff"
    },
    {
        name: "Nest Js",
        icon: SiNestjs,
        color: "#e0234e"
    },
    {
        name: "Fastify",
        icon: SiFastify,
        color: "#fff"
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06b6d4"
    },
    {
        name: "Vue Js",
        icon: SiVuedotjs,
        color: "#42b883"
    },
    {
        name: "SCSS/SASS",
        icon: SiSass,
        color: "#cc6699"
    },
    {
        name: "Material UI",
        icon: SiMui,
        color: "#007aff"
    },
    {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "#660099"
    },
]

export const tools = [
    {
        name: 'Windows',
        icon: SiWindows10,
        color: "#00adef"
    },
    {
        name: 'VS Code',
        icon: SiVisualstudiocode,
        color: "#0078d7"
    },
    {
        name: 'Git',
        icon: SiGit,
        color: "#f34f29"
    },
    {
        name: 'Node Js',
        icon: SiNodedotjs,
        color: "#68a063"
    },
    {
        name: 'Postman',
        icon: SiPostman,
        color: "#f46f25"
    },
    {
        name: 'Figma',
        icon: SiFigma,
        color: "#fff"
    },
    {
        name: 'MySql',
        icon: SiMysql,
        color: "#F29111"
    },
    {
        name: 'MongoDB',
        icon: SiMongodb,
        color: "#589636"
    },
    {
        name: 'Shopify',
        icon: SiShopify,
        color: "#95bf47"
    },
    {
        name: 'Jest',
        icon: SiJest,
        color: "#99425b"
    },
    {
        name: 'PostgreSql',
        icon: SiPostgresql,
        color: "#0064a5"
    },
    {
        name: 'Kafka',
        icon: SiApachekafka,
        color: "#f0f0f0"
    },
    {
        name: 'Redis',
        icon: SiRedis,
        color: "#a41e11"
    }
]

export const workExp = [
    {
        place: "PT Adira Dinamika Multi Finance Tbk",
        tenure: "May 2024 - Present",
        role: "Fullstack Developer",
        stack: ["React Js", "Vite", "Fastify", "REST API", "Postgres", "Jest", "Node Js", "React Native", "Tailwind CSS", "Git"],
        detail: [
            "Develop and maintain applications according to requirements, designs, and coding standards.",
            "Write clean, readable, maintainable, secure, and testable code.",
            "Perform code reviews and fix defects identified through testing and production monitoring.",
            "Develop APIs, services, database integrations, or user interfaces according to product needs.",
            "Write unit tests and support integration and regression testing.",
            "Debug, troubleshoot, and perform root cause analysis for application issues."
        ],
    },
    {
        place: "PT Top Four Asia Indonesia x The Blue Space Australia",
        tenure: "Jul 2024 - Feb 2026",
        role: "Fullstack Developer",
        stack: ["Javascript", "Node Js", "Shopify", "Bootstrap CSS", "Express Js", "Jest", "Vue Js", "Git"],
        detail: [
            "Led UI and layout restructuring using modern responsive design standards, resulting in a more intuitive and usercentric browsing experience.",
            "Implemented SEO-optimized website structure and semantic markup to increase search engine discoverability and improve search insights.",
            "Developed and refined modular Shopify product components to create a scalable, maintainable, and conversionfocused product page structure.",
            "Collaborated with designers and stakeholders to translate business and user requirements into high-quality web solutions.",
            "Maintained clean, reusable, and well-structured code to support long-term scalability and easier feature development."
        ],
    },
    {
        place: "PT ASI Pudjiastuti Aviation (Susi Air)",
        tenure: "Oct 2023 - May 2024",
        role: "Fullstack Javascript Developer",
        stack: ["Vue Js", "Nuxt Js", "Nest Js", "Tailwind CSS", "SCSS", "MongoDB", "Git"],
        detail:
            [
                "Diagnosed and resolved frontend and backend issues to maintain website stability and improve overall system reliability.",
                "Conducted routine maintenance and performance checks to minimize bugs, enhance security, and prevent data integrity issues.",
                "Developed, improved, and maintained web features in alignment with product needs and technical best practices.",
                "Managed API integration and database maintenance to support seamless data exchange and scalable application architecture."
            ]
    },
    {
        place: "PT Medika Digital Nusantara",
        tenure: "Jul 2023 - Sep 2023",
        role: "Customer Services Freelance",
        detail:
            [
                "Responding to client queries in a timely and accurate way, via phone, email or chat.",
                "Identifying client needs and helping customers use specific features.",
                "Communicate with the development team to improve and update the features that clients want.",
                "Update our internal databases with information about technical issues and useful discussions with clients.",
                "Follow up with clients to ensure their technical issues are resolved.",
            ]
    },

];

export const education = [
    {
        place: "CodeMasters Bootcamp Program",
        tenure: "Sep 2023 - Dec 2023",
        role: "Fullstack Development",
        detail: "Studied frontend mobile development with React Native, backend development with Node Js and Express Js, and deepened website development using React Js. Built a React Native mobile application as a team final project.",
    },
    {
        place: "Universitas Teknologi Yogyakarta",
        tenure: "Sep 2017 - Oct 2022",
        role: "Information System",
        detail: "Learned system workflows and how to develop information systems with a clear structure that can be implemented in business, including website development using HTML, Javascript, CSS, PHP, and MySQL.",
    },
];

export const contact = [
    {
        name: "GitHub",
        icon: FaGithub,
        link: "https://github.com/garfieldvans",
    },
    {
        name: "Email",
        icon: IoIosMail,
        link: "mailto:bastianhalo19@gmail.com",
    },
    {
        name: "Whatsapp",
        icon: IoLogoWhatsapp,
        link: "https://wa.me/+6288228655310",
    },
];

export const projects = [
    {
        name: "Personal portfolio website v4",
        desc: "An editorial portfolio built with React.js, Vite, and Tailwind CSS, featuring a dark lime theme, scroll-reveal animations, responsive navigation, and SEO-ready metadata.",
        url: "https://portfolio-v4-blush.vercel.app/",
        img: "./portv4.webp",
        tags: ["React Js", "Vite", "Tailwind CSS"],
        role: "Personal project",
    },
    {
        name: "The Blue Space, Online Renovation Retailer",
        desc: "A scalable renovation retail e-commerce solution built on Shopify, enhanced with JavaScript, and optimized with a fully responsive design to deliver a smooth and engaging user experience on all devices.",
        url: "https://www.thebluespace.com.au/",
        img: "./tbs.webp",
        tags: ["Shopify", "Javascript", "Responsive"],
        role: "Fullstack Developer",
    },
    {
        name: "Personal portfolio website",
        desc: 'A responsive personal portfolio website developed using React.js, designed with a modern UI/UX approach to create a clean, intuitive, and engaging user experience.',
        url: "https://portfolio-v4-blush.vercel.app/",
        img: "./portv3.webp",
        tags: ["React Js", "Vite", "UI/UX"],
        role: "Personal project",
    },
    {
        name: "Susi Air company website",
        desc: "An airline ticket booking platform developed using Vue.js, Vuex, and Nuxt.js, featuring state management integration and optimized performance for a seamless booking experience.",
        url: "https://susiair.com/",
        img: "./susiair.webp",
        tags: ["Vue Js", "Nuxt Js", "Vuex"],
        role: "Fullstack Javascript Developer",
    },
    {
        name: "Modern Admin Dashboard",
        desc:"A modern admin dashboard developed using React.js and Chakra UI, designed with a clean and intuitive interface to provide efficient data management and seamless user experience.",
        url: "",
        img: "./susidash.webp",
        tags: ["React Js", "Chakra UI"],
        role: "Frontend Developer",
        badge: "Internal",
    },
    {
        name: "Movie Ratings & Articles website",
        desc: "A movie and drama library and review platform developed using Next.js and Tailwind CSS, featuring a responsive interface and clean, modern design for an enhanced user experience.",
        url: "https://rateme-list.vercel.app/",
        img: "./rateme.webp",
        tags: ["Next Js", "Tailwind CSS"],
        role: "Personal project",
    },
    {
        name: "CodeMasters Admin Dashboard",
        desc: "An admin dashboard for managing courses, students, and payments, featuring clear sidebar navigation, summary metrics, and a focused data-first layout.",
        url: "",
        img: "./codemasters-dashboard.webp",
        tags: ["Dashboard", "UI/UX", "Responsive"],
        role: "Bootcamp project",
        badge: "Case study",
    },
    {
        name: "FlexStream, Anime Streaming Catalog",
        desc: "A dark-themed anime streaming catalog with genre browsing, search, and a responsive poster grid designed for easy discovery.",
        url: "",
        img: "./flextream.webp",
        tags: ["Frontend", "UI/UX", "Responsive"],
        role: "Personal project",
        badge: "Case study",
    },
    {
        name: "Danadira, Digital Financing App",
        desc: "A digital financing app for Adira Finance's invited customers, covering the end-to-end journey from KTP verification and loan simulation to disbursement. Implementation details remain private.",
        img: "./danadira.webp",
        tags: ["Finance", "Mobile App"],
        role: "Fullstack Developer",
        badge: "Internal",
    }
]
