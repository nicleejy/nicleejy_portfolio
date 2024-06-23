import { Experience, NavContent, OtherProject, Project, Skill } from "./types";
import { FaFigma, FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiCss3,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGraphql,
  SiHasura,
  SiHeroku,
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiChakraui,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobelightroom,
  SiTensorflow,
  SiJunit5,
  SiGradle,
  SiRedux,
  SiDocker,
  SiMui,
  SiWebpack,
  SiSass,
} from "react-icons/si";

// import singaScript from "./public/singascript.json";
// import whereGotTimetable from "./public/wheregottimetable.json";
// import evolve from "./public/evolve.json";

export const navContents: NavContent[] = [
  { name: "./about", offset: 0, id: "about" },
  { name: "./experience", offset: -20, id: "experience" },
  { name: "./projects", offset: -50, id: "projects" },
  { name: "./contact", offset: 0, id: "contact" },
];

export const projects: Project[] = [
  {
    name: "SingaScript by SGStudioCode",
    subheader: "Custom Singlish Esolang and Gamified IDE",
    description:
      "SingaScript is a custom Singlish Esolang interpreter and development environment designed to make programming more fun and relatable to Singaporeans and those interested in Singaporean culture and language.",
    githubLink: "https://github.com/Guo-KeCheng/singaScript/",
    projectLink: "http://singa-script.vercel.app",
    technologies: ["next", "express", "typescript", "tailwind", "heroku"],
    // animation: singaScript,
    imagePath: "/singascript.png",
    award: {
      name: "Most Beautiful Hack",
      event: "@ Hack&Roll 2023",
      link: "https://devpost.com/software/singascript",
    },
  },
  {
    name: "Evolve",
    subheader: "Full-stack wellness mobile application",
    description:
      "Evolve was created to help users track their daily routines, predict their wellbeing and identify bad habits through regression analysis. Built using Flutter SDK with Firebase and Flask. A Depth-First-Search algorithm was implemented using Python and Scikit-learn to identify associations and make reliable predictions.",
    projectLink: "https://linktr.ee/discretetech",
    technologies: ["flutter", "firebase", "python", "flask", "figma"],
    // animation: evolve,
    imagePath: "/evolve.png",
    award: {
      name: "Judges Choice",
      event: "@ NUS Orbital Programme CP2106",
      link: "https://www.credential.net/df75c507-ac24-4190-a364-c2d35baa158e",
    },
  },
  {
    name: "Where Got Time(table)?",
    subheader: "Timetable Optimiser with Genetic Algorithm",
    description:
      "A web application that creates the most optimized timetables for NUS students using a genetic algorithm. Constraints such as class availability, and student preferences like free days, lunch breaks, and earliest class times are considered to generate the most efficient and personalized schedules.",
    githubLink: "https://github.com/nicleejy/Where-Got-TimeTable",
    projectLink: "https://where-got-time-table.herokuapp.com/",
    technologies: ["python", "html", "heroku", "flask"],
    // animation: whereGotTimetable,
    imagePath: "/wheregottimetable.png",
  },
];

export const otherProjects: OtherProject[] = [
  {
    name: "Recyclops",
    description:
      "A mobile application utilising image recognition to identify objects and provide real-time recommendations on whether items are recyclable or not.",
    githubLink: "https://github.com/nicleejy/life-hack22-nocoders",
    projectLink: "https://devpost.com/software/recyclops-1k7vpq",
    technologies: ["flutter", "python", "tensor", "figma"],
    imagePath: "/recyclops.jpeg",
  },
  {
    name: "NUS Reminders Bot",
    description:
      "An telegram bot for NUS students to save their timetables and receive custom alerts before classes begin. Utilises the NUSMods API, APScheduler for job scheduling and MongoDB.",
    githubLink: "https://github.com/nicleejy/NUS-Reminders-Bot",
    projectLink: "https://telegram.me/nus_timetable_assist_bot",
    technologies: ["python", "mongo", "heroku"],
    imagePath: "/nusremindersbot.jpg",
  },
  {
    name: "UwU Taskmaster - CS2103T",
    description:
      "A user-friendly UwU chatbot that tracks to-dos, deadlines and events. It can also help find free time slots in a busy schedule. Built using JavaFX and Java.",
    githubLink: "https://github.com/nicleejy/ip",
    projectLink: "https://nicleejy.github.io/ip/",
    technologies: ["java", "junit", "gradle"],
    imagePath: "/uwu.png",
  },
  {
    name: "NodeFlair Site Replica",
    description:
      "A responsive replica of the NodeFlair website, a Career Transparency platform based in Singapore. Developed using React and styled with Tailwind CSS.",
    githubLink: "https://github.com/nicleejy/NodeFlairSiteReplica",
    projectLink: "https://nodeflair-task-one.vercel.app/",
    technologies: ["react", "tailwind", "typescript"],
    imagePath: "/nodeflair.png",
  },
  {
    name: "Flight Tracker",
    description:
      "Tool written in Node.js for tracking and monitoring airline flight prices, as part of a larger ongoing passion project.",
    githubLink: "https://github.com/nicleejy/FlightTracker",
    technologies: ["node"],
    imagePath: "/flighttracker.png",
  },
  {
    name: "Don't Forget Ah!",
    description:
      "Bot which schedules appointments from text using natural language. Employs Python NLTK and NLP techniques such as tokenization, Part-Of-Speech tagging for precise text analysis.",
    githubLink: "https://github.com/nicleejy/DontForgetAh-Bot",
    projectLink: "https://telegram.me/DontForgetAhBot",
    technologies: ["python"],
    imagePath: "/dontforgetah.png",
  },
];

export const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    duration: "September 2023 - November 2023",
    company: "Ernst & Young",
    imageSource: "/ey.png",
    contributions: [
      "Developed user-facing features for an e-service portal using React.js, TypeScript, and SCSS within a microfrontend architecture and write unit tests with React Testing Library and Jest",
      "Built reusable components and libraries, optimised for maximum performance and scalability across various browsers",
      "Collaborated with cross-functional teams to define, design, and ensure technical feasibility of UI/UX designs",
    ],
    skillsList: ["react", "typescript", "sass", "webpack"],
    website: "https://www.ey.com/en_sg",
  },
  {
    title: "Product Management Intern",
    duration: "September 2023 - November 2023",
    company: "Shopee",
    imageSource: "/shopee.png",
    contributions: [
      "Led development of AI-based product solution as part of Listing QC team leveraging computer vision models to identify and remove violating products on Shopee platform",
      "Collaborated with Regulatory Operations, UI/UX designers, software engineers, and data science teams to implement strategies for enhancing platform cleanliness",
      "Created and presented PRDs to numerous cross-functional teams stakeholders, specifying roadmap, technical specifications and performance metrics",
    ],
    skillsList: [],
    website: "https://shopee.sg/",
    testimonialPath: "shopee_testimonial.pdf",
  },
  {
    title: "Software Engineer Intern",
    duration: "May 2023 - August 2023",
    company: "Hyundai Motor Group",
    imageSource: "/hmgics.png",
    contributions: [
      "Architected a full-stack computer vision data visualisation tool for Hyundai's AI Research centre with Next.js, Express.js and MongoDB, utilising Docker for deployment on Kubernetes-based infrastructure",
      "Adopted microservices architecture following clean architecture principles for integration across various CV/ML applications",
      "Reduced API response data latency by 80% through server-side segmentation-mask decoding with LRU cache",
    ],
    skillsList: ["next", "express", "typescript", "mongo", "docker", "mui"],
    website: "https://www.hyundai.com/sg/home",
    testimonialPath: "hyundai_testimonial.pdf",
  },
  {
    title: "Software Engineer Intern",
    company: "Quest, Hire a Hero",
    duration: "May 2022 - August 2022",
    imageSource: "/quest.png",
    contributions: [
      "Developed mobile interfaces with Flutter SDK and Dart, implemented new features such as Profile and Earning Analytics",
      "Map complex data relationships and migrate app database from Cloud Firestore to PostgreSQL with Hasura and GraphQL, reducing query response time by up to 60%",
      "Implemented robust BLoC stream-based state management system across components for code maintainability",
    ],
    skillsList: ["flutter", "firebase", "hasura", "graphql", "postgresql"],
    website: "https://quest-inc.co",
  },
  {
    title: "Freelance Videographer",
    duration: "January 2016 - Present",
    company: "Advocado Films",
    imageSource: "/advocado.png",
    contributions: [
      "Co-founded a Singapore-based media production team specialised in providing affordable advertising to startups and SMEs",
      "Led a team of creative professionals and managed multiple client projects, ranging from concept development to final delivery",
      "Demonstrated strong project management, communication, and leadership skills in a fast-paced, deadline-driven environment",
    ],
    skillsList: ["pr", "ae", "lr"],
    website: "https://www.youtube.com/advocadofilms",
  },
];

export const skills: { [key: string]: Skill } = {
  python: { name: "Python", Icon: FaPython },
  javascript: { name: "JavaScript", Icon: SiJavascript },
  typescript: { name: "TypeScript", Icon: SiTypescript },
  java: { name: "Java", Icon: FaJava },
  dart: { name: "Dart", Icon: SiDart },
  html: { name: "HTML", Icon: SiHtml5 },
  css: { name: "CSS", Icon: SiCss3 },
  sass: { name: "Sass", Icon: SiSass },
  react: { name: "React", Icon: SiReact },
  next: { name: "Next.js", Icon: SiNextdotjs },
  node: { name: "Node.js", Icon: FaNodeJs },
  express: { name: "Express.js", Icon: SiExpress },
  firebase: { name: "Firebase", Icon: SiFirebase },
  hasura: { name: "Hasura", Icon: SiHasura },
  postgresql: { name: "PostgreSQL", Icon: SiPostgresql },
  flutter: { name: "Flutter", Icon: SiFlutter },
  mongo: { name: "MongoDB", Icon: SiMongodb },
  heroku: { name: "Heroku", Icon: SiHeroku },
  tailwind: { name: "Tailwind CSS", Icon: SiTailwindcss },
  graphql: { name: "GraphQL", Icon: SiGraphql },
  figma: { name: "Figma", Icon: FaFigma },
  chakra: { name: "Chakra UI", Icon: SiChakraui },
  pr: { name: "Premiere Pro", Icon: SiAdobepremierepro },
  ae: { name: "After Effects", Icon: SiAdobeaftereffects },
  lr: { name: "Lightroom", Icon: SiAdobelightroom },
  flask: { name: "Flask", Icon: SiFlask },
  tensor: { name: "TensorFlow", Icon: SiTensorflow },
  junit: { name: "JUnit5", Icon: SiJunit5 },
  gradle: { name: "Gradle", Icon: SiGradle },
  redux: { name: "Redux", Icon: SiRedux },
  docker: { name: "Docker", Icon: SiDocker },
  mui: { name: "Material UI", Icon: SiMui },
  webpack: { name: "Webpack", Icon: SiWebpack },
};
