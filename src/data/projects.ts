// src/data/projects.ts

import { IProject } from "./types";

const projects: IProject[] = [
 

  // ✅ Added your projects
  {
    id: "old-portfolio-website",
    title: "Old Portfolio Website",
    description:
      "My first personal portfolio built using HTML, CSS, and JavaScript...",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Neon(PostgreSQL)"],
    liveDemoLink: "https://amritanshu-zeta.vercel.app/",
    image: "oldport.jpg",
  },
  {
    id: "fashioncube-ecommerce",
    title: "FashionCube Ecommerce",
    description:
      "A full-stack fashion ecommerce site with user auth, product filtering...",
    techStack: ["React", "Spring Boot", "JWT", "MySQL"],
    githubLink: "https://github.com/amritanshu121/cloth-website",
    image: "ec.jpg",
  },
  {
    id: "fashion-cube",
    title: "Fashion Cube",
    description:
      "A fashion e-commerce site with product browsing, cart, and order features...",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Sessions"],
    liveDemoLink: "https://fashion-cube.vercel.app/",
    image: "fashion cube.jpg",
  },
  {
    id: "lms-scan-web-app",
    title: "LMS Scan Web App",
    description:
      "Library web app (Final Year Project) for QR-based book borrow/return...",
    techStack: ["HTML", "CSS", "Javascript", "Node.js", "NeonDB (PostgreSQL)"],
    liveDemoLink: "https://scans-gold.vercel.app/",
    image: "lms.jpg",
  },
  {
    id: "movie-finder-app",
    title: "Movie Finder App",
    description:
      "Responsive React app to search and explore movies using OMDB API...",
    techStack: ["React", "Vite", "React Router"],
    liveDemoLink: "https://movie-finder-lime.vercel.app/",
    image: "movie.jpg",
  },
  {
    id: "ecommerce-website-frontend",
    title: "Ecommerce-Website",
    description:
      "Designed a responsive e-commerce frontend with product listings...",
    techStack: ["HTML", "CSS", "Javascript", "Node.js"],
    liveDemoLink: "https://fulljhakaas.vercel.app/",
    image: "jhakaas.jpg",
  },
  {
    id: "ycmou-notes",
    title: "YCMOU Notes Website",
    description:
      "Responsive website for BCA students to access YCMOU notes...",
    techStack: ["HTML", "CSS", "Google Drive API"],
    liveDemoLink: "https://ycmounotes.vercel.app/",
    image: "ycmou.jpg",
  },
  {
    id: "weather-web-app",
    title: "Weather Web App",
    description:
      "Responsive weather app using OpenWeatherMap API to show real-time data...",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "OpenWeatherMap API",
      "LocalStorage",
    ],
    liveDemoLink: "https://weather-web-lac.vercel.app/",
    image: "weather.jpg",
  },
  {
    id: "chemical-inventory",
    title: "Buy & Sell (Chemical Inventory System)",
    description:
      "Full-stack app to manage chemical purchases and sales with tracking...",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Neon (PostgreSQL)"],
    liveDemoLink: "https://vickey-eight.vercel.app/",
    image: "buy.jpg",
  },
  {
    id: "dance-studio",
    title: "Dance Studio Website",
    description:
      "Responsive dance studio website with event booking, course enrollment...",
    techStack: ["HTML", "CSS", "JavaScript", "Neon (PostgreSQL)", "Vercel"],
    liveDemoLink: "https://danceweb-inky.vercel.app/",
    image: "dance.jpg",
  },
];

export default projects;
