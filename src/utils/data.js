import { FaGithub, FaInstagramSquare } from "react-icons/fa";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { SiBootstrap, SiCss3, SiExpress, SiFigma, SiGit, SiHtml5, SiJavascript, SiMongodb, SiMui, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiReact, SiSass, SiTailwindcss, SiVercel, SiVisualstudiocode, SiVsco, SiVuedotjs, SiWindows10 } from "react-icons/si";

export const menus = [
    {
        title: "Home",
        link: "/",
        color: "rose-500"
    },
    {
        title: "Expertise",
        link: "/expertise",
        color: "orange-500"
    },
    {
        title: "Experience",
        link: "/experience"
    },
    {
        title: "Project",
        link: "/project",
        color: "cyan-500"
    },
    {
        title:"Contact",
        link: "/portfolio",
        color: "green-500"

    }
]


export const lang = [
    {
        name: "HTML",
        icon: SiHtml5,
        color : "#e34c26"
    },
    {
        name: "CSS",
        icon: SiCss3,
        color : "#264de4"   
    },
    {
        name: "Javascript",
        icon: SiJavascript,
        color : "#f0db4f"   
    },
    {
        name: "PHP",
        icon: SiPhp,
        color : "#AEB2D5"   
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
      place: "PT ASI Pudjiastuti Aviation (Susi Air)",
      tenure: "Oct 2023 - Apr 2024",
      role: "Fullstack Developer",
      detail:
        "- Do bug fixing on company web application projects.\n- Make sure and maintanance to company web application projects to be save.\n- then code a new or renew features on company web application projects",
    },
    {
      place: "CodeMasters Id Bootcamp",
      tenure: "Sep 2023 - Dec 2023",
      role: "Fullstack Developer",
      detail:
        "Studying full stack developer material using the MERN stack and mobile development material using React Native.",
    },
    {
      place: "PT Medika Digital Nusantara",
      tenure: "Jul 2023 - Sep 2023",
      role: "Customer Services Freelance",
      detail:
        "Handle technical complaints from clients and provide solutions that can handle problems that occur.",
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

  export const project = [
    {
        name: "Portfolio website with React Js",
        url: "https://bastian-here-v3.vercel.app/",
        repo: "https://github.com/garfieldvans/port-v03"
    },
    {
        name: "Movie Rating website with Next Js & Tailwind CSS",
        url: "https://rateme-list.vercel.app/",
        repo: "https://github.com/garfieldvans/imdb-alike-rateme"
    },
    {
        name: "Admin Dashboard with React Js & Chakra UI",
        url: "https://codemasters-admin-dashboard.vercel.app/signin",
        repo: "https://github.com/garfieldvans/Admin-Dashboard"
    },
    {
        name: "Login page with Next-Auth, Next Js & Tailwind CSS",
        url: "https://next-auth-project-steel.vercel.app/login",
        repo: "https://github.com/garfieldvans/next-auth2"
    },
    {
        name: "Susi Air company website with Nuxt Js",
        url: "https://susiair.com/",
        repo: ""
    },
    {
        name: "Edumatrix website clone with React Js",
        url: "https://edu-apps.vercel.app/",
        repo: "https://github.com/garfieldvans/eduapp"
    },
  ]