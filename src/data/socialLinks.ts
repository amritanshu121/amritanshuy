// src/data/socialLinks.ts

import { ISocialLink } from "./types";
// You might import specific icons if you choose to use react-icons here
// import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const socialLinks: ISocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/amritanshu121", // Replace with Abhishek's actual GitHub URL
    // iconComponent: FaGithub, // Uncomment and import if using react-icons
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amritanshu-yadav-b556b72a8/", // Replace with Abhishek's actual LinkedIn URL
    // iconComponent: FaLinkedinIn, // Uncomment and import if using react-icons
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/amritanshu001/", // Replace with Abhishek's actual email address
    // iconComponent: FaEnvelope, // Uncomment and import if using react-icons
  },
  // Add other social links as needed
  // {
  //   name: 'Twitter',
  //   url: 'https://twitter.com/abhishekgupta_dev',
  //   // iconComponent: FaTwitter,
  // },
];

export default socialLinks;
