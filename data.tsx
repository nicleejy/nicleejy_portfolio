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
} from "react-icons/si";

import singaScript from "./public/singascript.json";
import whereGotTimetable from "./public/wheregottimetable.json";
import evolve from "./public/evolve.json";

export const navContents: NavContent[] = [
  { name: "./about", offset: 0, id: "about" },
  { name: "./experience", offset: -20, id: "experience" },
  { name: "./projects", offset: 0, id: "projects" },
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
    animation: singaScript,
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
    animation: evolve,
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
    animation: whereGotTimetable,
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
    title: "Product Management Intern",
    duration: "September 2023 - November 2023",
    company: "Shopee",
    imageSource: "/shopee.png",
    contributions: [
      "Led development of an AI-based product solution leveraging computer vision models to identify and remove violating items on the Shopee platform as part of the Listing QC team",
      "Collaborated with cross-functional teams, including Regional Ops, UI/UX Designers, Software Engineers, and Data Scientists to enhance consumer satisfaction and platform cleanliness",
      "Presented PRD during multiple reviews, articulating launch roadmap, technical specs and performance metrics to stakeholders",
    ],
    skillsList: [],
    website: "https://shopee.sg/",
  },
  {
    title: "Software Engineer Intern",
    duration: "May 2023 - August 2023",
    company: "Hyundai Motor Group (HMGICS)",
    imageSource: "/hmgics.png",
    contributions: [
      "Developed a MERN stack-based computer vision data visualisation tool for Hyundai's AI Research centre, covering wireframing, UI design, and full-stack implementation with Redux and Typescript, utilising Docker for containerization and streamlined deployment on Kubernetes-based infrastructure",
      "Designed a microservices architecture following Clean Architecture principles for easy integration across CV/ML applications",
      "Achieved sub-100ms API response time, reducing data latency by 80% through server-side seg-mask decoding with LRU cache",
      "Conducted research on WINClip applications, including zero-shot anomaly detection in manufacturing of the Ioniq 5 Electric Vehicle",
    ],
    skillsList: [
      "next",
      "react",
      "express",
      "typescript",
      "mongo",
      "docker",
      "mui",
    ],
    website: "https://www.hyundai.com/sg/home",
  },
  {
    title: "Software Engineer Intern",
    company: "Quest, Hire a Hero",
    duration: "May 2022 - August 2022",
    imageSource: "/quest.png",
    contributions: [
      "Developed mobile interfaces using Flutter SDK with Dart, integrating features such as user profile and hero earning analytics",
      "Migrated app database from Cloud Firestore to PostgreSQL with Hasura and GraphQL by mapping complex data relationships, resulting in 60% reduction in query response time",
      "Implemented robust stream-based state management system utilising Business Logic Component (BLoC) to ensure code maintainability and scalability",
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
};
