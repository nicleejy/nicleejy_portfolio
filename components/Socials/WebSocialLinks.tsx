import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
import React from "react";
import { motion } from "framer-motion";

const WebSocialLinks = () => {
  const hoverStyle =
    "hover:scale-125 hover:text-accent dark:hover:text-accent transition text-primaryDark dark:text-primary duration-100 ease-in-out";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.6,
        ease: "easeInOut",
        duration: 0.8,
      }}
      className="fixed flex flex-col gap-8 ml-8 top-[50%] z-10"
    >
      <a
        href="https://www.instagram.com/leesvisuals/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <SiInstagram size={20} className={hoverStyle} />
      </a>
      <a href="https://github.com/nicleejy" target="_blank" rel="noreferrer">
        <SiGithub size={20} className={hoverStyle} />
      </a>
      <a
        href="https://sg.linkedin.com/in/nicholasleejunyi"
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin size={20} className={hoverStyle} />
      </a>
    </motion.div>
  );
};

export default WebSocialLinks;
