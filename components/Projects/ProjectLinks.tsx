import React, { FunctionComponent, MouseEventHandler } from "react";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

const ProjectLinks: FunctionComponent<{
  projectLink?: string;
  githubLink?: string;
  className?: string;
}> = ({ projectLink, githubLink, className }) => {
  const hoverStyle =
    "transition-all dark:text-primary dark:hover:text-accent cursor-pointer hover:text-accent text-primaryDark";

  const handleProjectLinkClick: MouseEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    event.stopPropagation();
  };

  const handleGithubLinkClick: MouseEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    event.stopPropagation();
  };

  return (
    <div className={`flex flex-row gap-3 ${className}`}>
      {projectLink && (
        <a
          href={projectLink}
          target="_blank"
          rel="noreferrer"
          onClick={handleProjectLinkClick}
        >
          <FiExternalLink size={23} className={hoverStyle} />
        </a>
      )}

      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          onClick={handleGithubLinkClick}
        >
          <SiGithub size={23} className={hoverStyle} />
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
