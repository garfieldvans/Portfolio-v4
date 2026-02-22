import { FaGithub, FaInstagramSquare } from "react-icons/fa";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { SiBootstrap, SiCss3, SiExpress, SiFigma, SiGit, SiHtml5, SiJavascript, SiMongodb, SiMui, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiReact, SiSass, SiTailwindcss, SiVercel, SiVisualstudiocode, SiVsco, SiVuedotjs, SiWindows10 } from "react-icons/si";

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
        name: "Express Js",
        icon: SiExpress,
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
        name: 'PostgreSql',
        icon: SiPostgresql,
        color: "#0064a5"
    },
]

export const workExp = [
    {
        place: "TOP4 Marketing x The Blue Space",
        tenure: "Jul 2024 - Feb 2026",
        role: "Fullstack Developer",
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
        role: "Fullstack Developer",
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

export const contact = [
    {
        name: "GitHub",
        icon: FaGithub,
        link: "https://github.com/garfieldvans",
    },
    {
        name: "Email",
        icon: IoIosMail,
        link: "mailto: bastianhaloho12@gmail.com",
    },
    {
        name: "Whatsapp",
        icon: IoLogoWhatsapp,
        link: "https://wa.me/+6288228655310",
    },
    {
        name: "IG",
        icon: FaInstagramSquare,
        link: "#",
    },
];

export const projects = [
    {
        name: "The Blue Space, Online Renovation Retailer",
        desc: "A scalable renovation retail e-commerce solution built on Shopify, enhanced with JavaScript, and optimized with a fully responsive design to deliver a smooth and engaging user experience on all devices.",
        url: "https://www.thebluespace.com.au/",
        img: "./tbs.png"
    },
    {
        name: "Personal portfolio website",
        desc: 'A responsive personal portfolio website developed using React.js, designed with a modern UI/UX approach to create a clean, intuitive, and engaging user experience.',
        url: "https://bastian-here-v3.vercel.app/",
        img: "./portv3.png"
    },
    {
        name: "Susi Air company website",
        desc: "An airline ticket booking platform developed using Vue.js, Vuex, and Nuxt.js, featuring state management integration and optimized performance for a seamless booking experience.",
        url: "https://susiair.com/",
        img: "./susiair.png"
    },
    {
        name: "Modern Admin Dashboard",
        desc:"A modern admin dashboard developed using React.js and Chakra UI, designed with a clean and intuitive interface to provide efficient data management and seamless user experience.",
        url: "",
        img: "./susidash.png"
    },
    {
        name: "Movie Ratings & Articles website",
        desc: "A movie and drama library and review platform developed using Next.js and Tailwind CSS, featuring a responsive interface and clean, modern design for an enhanced user experience.",
        url: "https://rateme-list.vercel.app/",
        img: "./rateme.png"
    }
]