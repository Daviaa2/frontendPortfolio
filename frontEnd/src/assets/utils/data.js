import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin } from "react-icons/fi";

import PROJECT_IMG_1 from "../images/leanCanvas.jpg";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Creating appealing responsive websites",
    skills: [
      { name: "HTML", level: 90, color: "bg-orange-500" },
      { name: "CSS", level: 85, color: "bg-blue-500" },
      { name: "JavaScript", level: 80, color: "bg-yellow-500" },
      { name: "React", level: 75, color: "bg-cyan-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side applications",
    skills: [
      { name: "Node.js", level: 70, color: "bg-green-500" },
      { name: "Python", level: 75, color: "bg-blue-600" },
      { name: "Express", level: 65, color: "bg-gray-600" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Managing and designing databases",
    skills: [
      { name: "MongoDB", level: 70, color: "bg-green-600" },
      { name: "MySQL", level: 65, color: "bg-blue-700" },
      { name: "PostgreSQL", level: 60, color: "bg-indigo-600" },
    ],
  },
  {
    title: "Business Analysis",
    icon: Briefcase,
    description: "Analyzing business requirements and processes",
    skills: [
      { name: "Requirements Gathering", level: 85, color: "bg-purple-500" },
      { name: "Process Modeling", level: 80, color: "bg-pink-500" },
      { name: "Data Analysis", level: 75, color: "bg-red-500" },
    ],
  },
];

export const TECH_STACK = [
  "Javascript",
  "HTML5",
  "CSS3",
  "Vite",
  "Jest",
  "Cypress",
  "Figma",
];

export const STATS = [{ number: "X", label: "Projects Completed" }];

export const PROJECTS = [
  {
    id: 1,
    title: "Portfolio stite",
    description: "front end site to showcase my ability to use React",
    image: PROJECT_IMG_1,
    tags: ["REACT", "Tailwind", "Framer motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/Daviaa2/frontendPortfolio.git",
    featured: true,
    catergory: "Front End",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Certificate Of Information Technology",
    company: "Otago Polytechnic",
    description:
      "In this course we covered the basics of web developement, software developemnt, networks and databases",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: ".2025",
    title: "Certificate in Applied Digital Technology Product Solutions",
    company: "Mission Ready",
    description:
      "Qualified  as a Business Analyst and Salesforce Consultant also did a 10 week work experiance with Lean Canvas",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: ".2025",
    title: "Diploma in Digital Technology Development and Design",
    company: "Mission Ready",
    description: "Full stack development and UX design",
    icon: Briefcase,
    color: "bg-blue-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experince",
    description: "Crafting Uis that are ergonomic for the user",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "finding elegant solutions to tricky problems",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new tech",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Github",
    icon: FiGithub,
    url: "https://github.com/Daviaa2",
    color: "hover:text-gray-400",
    bgColor: "hover:text-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/a-davie",
    color: "hover:text-blue-400",
    bgColor: "hover:text-blue-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:Andav529@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:text-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "ChristChurch",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Andav529@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "027 882 9959",
  },
];
