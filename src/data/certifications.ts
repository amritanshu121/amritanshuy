// src/data/certifications.ts

import { ICertification } from "./types";

const certifications: ICertification[] = [
  // Education
  {
    id: "bca-atharva",
    name: "Bachelor of Computer Applications (BCA)",
    issuer: "Atharva Institute",
    date: "2025", // Use 'Expected' as it's an ongoing degree
    link: "https://atharvainstitute.edu.in/", 
  },
  // Certifications
  {
    id: "full-stack-pride-educare",
    name: "Core Java",
    issuer: "Pride Educare",
    date: "April 2025", 
    link: "https://github.com/amritanshu121/Certificate-/blob/main/core%20java.pdf",
  },
  {
    id: "full-stack-pride-educare",
    name: "Advance Java",
    issuer: "Pride Educare",
    date: "August 2025", 
    link: "https://github.com/amritanshu121/Certificate-/blob/main/Advance%20java.pdf",
  },
 
];

export default certifications;
