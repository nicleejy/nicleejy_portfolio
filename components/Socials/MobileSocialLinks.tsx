import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
import React from "react";

const MobileSocialLinks = () => {
  const hoverStyle =
    "hover:scale-125 hover:text-accent dark:hover:text-accent transition text-primaryDark dark:text-primary duration-100 ease-in-out";

  return (
    <div className="mt-8">
      <div className="flex flex-row gap-5">
        <a
          href="https://www.instagram.com/leesvisuals/?hl=en"
          target="instagramTab"
        >
          <SiInstagram size={20} className={hoverStyle} />
        </a>
        <a
          href="https://github.com/nicleejy"
          target="githubTab"
        >
          <SiGithub size={20} className={hoverStyle} />
        </a>
        <a
          href="https://sg.linkedin.com/in/nicholasleejunyi"
          target="linkedinTab"
        >
          <SiLinkedin size={20} className={hoverStyle} />
        </a>
      </div>
    </div>
  );
};

export default MobileSocialLinks;
