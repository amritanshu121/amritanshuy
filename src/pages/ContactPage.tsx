import React from "react";
import { motion, Variants } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ContactPage: React.FC = () => {
  return (
    <motion.div
      className="py-12 md:py-20"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-heading font-bold text-light-text dark:text-dark-text mb-10 text-center border-b-2 border-accent-500 pb-4 inline-block mx-auto block"
        variants={itemVariants}
      >
        Get In Touch
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-light-text dark:text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed"
        variants={itemVariants}
      >
        Feel free to connect with me directly through my contact details or on
        social media platforms.
      </motion.p>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 bg-light-card dark:bg-dark-card p-6 sm:p-8 rounded-lg shadow-lg items-stretch">
        {/* Left Column - Contact Details */}
        <motion.div
          className="flex flex-col space-y-6 h-full"
          variants={itemVariants}
        >
          <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-accent-500 mb-4">
            Contact Details
          </h3>

          {/* Email */}
          <div className="flex items-center space-x-4 text-base sm:text-lg text-light-text dark:text-dark-text">
            <EnvelopeIcon className="h-6 w-6 sm:h-7 sm:w-7 text-accent-500" />
            <a
              href="mailto:amritanshuy56@gmail.com"
              className="hover:text-accent-600 transition-colors duration-200"
            >
              amritanshuy56@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 text-base sm:text-lg text-light-text dark:text-dark-text">
            <PhoneIcon className="h-6 w-6 sm:h-7 sm:w-7 text-accent-500" />
            <a
              href="tel:9372513895"
              className="hover:text-accent-600 transition-colors duration-200"
            >
              +91 9372513895
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-4 text-base sm:text-lg text-light-text dark:text-dark-text">
            <MapPinIcon className="h-6 w-6 sm:h-7 sm:w-7 text-accent-500" />
            <span>Sundar nagar goregaon west mumbai-400064</span>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4 text-base sm:text-lg text-light-text dark:text-dark-text">
            <ChatBubbleLeftRightIcon className="h-6 w-6 sm:h-7 sm:w-7 text-accent-500" />
            <span>Connect with me:</span>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <SocialIcon
              url="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              fgColor="currentColor"
              bgColor="transparent"
              className="!h-9 !w-9 sm:!h-10 sm:!w-10 text-light-text dark:text-dark-text hover:text-accent-500 transition-colors duration-200 transform hover:scale-110"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              fgColor="currentColor"
              bgColor="transparent"
              className="!h-9 !w-9 sm:!h-10 sm:!w-10 text-light-text dark:text-dark-text hover:text-accent-500 transition-colors duration-200 transform hover:scale-110"
            />
            <SocialIcon
              url="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              fgColor="currentColor"
              bgColor="transparent"
              className="!h-9 !w-9 sm:!h-10 sm:!w-10 text-light-text dark:text-dark-text hover:text-accent-500 transition-colors duration-200 transform hover:scale-110"
            />
          </div>
        </motion.div>

        {/* Right Column - Info */}
        <motion.div
          className="flex flex-col justify-center space-y-6 h-full"
          variants={itemVariants}
        >
          <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-accent-500 mb-4">
            Let’s Connect
          </h3>
          <p className="text-base sm:text-lg text-light-text dark:text-gray-300 leading-relaxed">
            I’m always open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out anytime!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
