import React from "react";
import Button from "../component/Button/Button";
import Card from "../component/Card/Card";
import { SocialIcon } from "react-social-icons";
import socialLinks from "../data/socialLinks";
import skills from "../data/skills";
import { ISkill } from "../data/types";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Animation variants (ensure Variants is imported from 'framer-motion')
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleGetInTouch = () => {
    navigate("/contact"); // Navigate to the /contact route
    // You can add a console.log here for debugging if needed:
    // console.log("Navigating to contact page...");
  };

  const handleDownloadCV = () => {
    const resumeUrl = "/assets/amritanshu01.pdf";
    window.open(resumeUrl, "_blank");
  };

  // Group skills by category for display
  const categorizedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {} as Record<string, ISkill[]>);

  return (
    <div className="flex flex-col items-center py-16 sm:py-24 md:py-32">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-16 px-4"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Profile Picture */}
        <motion.div
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mx-auto mb-8 shadow-xl border-4 border-accent-500 dark:border-accent-600 transition-all duration-300 transform hover:scale-105"
          variants={itemVariants}
        >
          <img
            src="amritmain.jpg" // CHANGE THIS TO YOUR ACTUAL PROFILE PICTURE PATH
            alt="Amritanshu Yadav"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold mb-4 leading-tight text-light-text dark:text-dark-text"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-accent-500">Amritanshu Yadav</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
          variants={itemVariants}
        >
           Passionate{" "}
          <span className="font-semibold text-accent-500">
            Full Stack Developer
          </span>{" "}
          who enjoys creating simple, modern, and user-friendly web apps.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          variants={itemVariants}
        >
          <Button variant="primary" size="lg" onClick={handleGetInTouch}>
            Get in Touch
          </Button>
          <Button variant="outline" size="lg" onClick={handleDownloadCV}>
            Download CV
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6"
          variants={itemVariants}
        >
          {socialLinks.map((link) => (
            <SocialIcon
              key={link.name}
              url={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125 hover:shadow-lg rounded-full"
              style={{ height: 48, width: 48 }}
            />
          ))}
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="w-full max-w-5xl px-4 mt-16 sm:mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Card className="text-left">
          <motion.h2
            className="text-3xl sm:text-4xl font-heading font-bold text-accent-500 mb-6 border-b-2 border-accent-500 pb-2 inline-block"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-light-text dark:text-gray-300 leading-relaxed mb-4"
            variants={itemVariants}
          >
           I’m a passionate Full Stack Developer with experience building web applications using React, Next.js, HTML, CSS, JavaScript, Node.js, Express, and databases. I have worked on real-world projects including a hospital website and a cooperative bank web application.
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl text-light-text dark:text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
           I enjoy turning ideas into reality with clean, efficient, and user-friendly code. I’m always eager to learn new technologies, take on challenging projects, and create solutions that make an impact. Collaboration, problem-solving, and delivering quality work are what drive me every day.
          </motion.p>
        </Card>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="w-full max-w-5xl px-4 mt-16 sm:mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Card className="text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-heading font-bold text-accent-500 mb-6 border-b-2 border-accent-500 pb-2 inline-block"
            variants={itemVariants}
          >
            My Skills
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {Object.keys(categorizedSkills).map((category) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="col-span-full sm:col-span-1 lg:col-span-1"
              >
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-accent-500 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {categorizedSkills[category].map((skill) => (
                    <div
                      key={skill.id}
                      className="flex flex-col items-center p-3 rounded-lg bg-light-bg dark:bg-dark-bg transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default border border-light-border dark:border-dark-border w-24 h-24 sm:w-28 sm:h-28 justify-center"
                    >
                      {skill.icon && (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 mb-2 object-contain"
                        />
                      )}
                      <span className="text-sm sm:text-base font-medium text-light-text dark:text-dark-text text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.section>
    </div>
  );
};

export default Home;
