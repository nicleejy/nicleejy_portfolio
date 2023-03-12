import React, { FunctionComponent, useEffect } from "react";
import { Project } from "../../types";
import ProjectLinks from "./ProjectLinks";
import SkillRow from "../Skills/SkillRow";
import { useLottie, useLottieInteractivity } from "lottie-react";
import { FaMedal } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInLeft } from "../../animations/animations";

const FeaturedProjectItem: FunctionComponent<{ project: Project }> = ({
  project: {
    name,
    subheader,
    description,
    technologies,
    projectLink,
    githubLink,
    animation,
    imagePath,
    award,
  },
}) => {
  const style = {
    height: 300,
  };

  const options = {
    animationData: animation,
  };

  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.25, 0.7],
        type: "seek",
        frames: [0, 45],
      },
    ],
  });

  const framerAnimation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      framerAnimation.start("animate");
    }
  }, [framerAnimation, inView]);

  const handleClickProject = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (projectLink != null) {
      window.open(projectLink, "_blank");
    } else {
      window.open(githubLink, "_blank");
    }
  };

  const handleClickAward = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (award && award.link != null) {
      window.open(award.link, "_blank");
    }
  };

  return (
    <motion.div
      variants={fadeInLeft}
      initial="initial"
      ref={ref}
      animate={framerAnimation}
    >
      <h1
        className="mt-12 mb-1 text-2xl font-bold text-primaryDark transition-all dark:text-primary cursor-pointer hover:text-accent duration-300 dark:hover:text-accent"
        onClick={handleClickProject}
      >
        {name}
      </h1>
      <h3 className="mt-2 text-md leading-none dark:text-secondary text-secondaryDark font-inconsolata">
        {subheader}
      </h3>
      {award && (
        <div
          className="flex items-center p-3 mt-6 transition-all duration-300 w-fit text-sm font-inconsolata text-primary hover:scale-105 cursor-pointer"
          onClick={handleClickAward}
        >
          <FaMedal className="text-accent" size={30} />
          <p className="ml-2 dark:text-secondary text-primaryDark">
            Awarded&nbsp;
            <span className="dark:text-accent text-accent">
              {award.name}&nbsp;
            </span>
            {award.event}
          </p>
        </div>
      )}

      <div
        className="relative px-6 py-10 mt-8 mb-24 md:mt-14 shadow-lg  dark:bg-tertiary rounded-xl md:w-[630px] cursor-pointer"
        onClick={handleClickProject}
      >
        <div className="flex flex-col items-center">
          <p className="mr-0 text-sm leading-7 list-disc lg:mr-32 text-secondaryDark dark:text-secondary ">
            {description}
          </p>

          <div className="block lg:absolute lg:block lg:-right-1/2 lg:-top-44 lg:left-auto lg:bottom-auto">
            {Animation}
          </div>
          {/* <Image
						className="my-10 md:hidden"
						alt={name}
						src={imagePath}
						height={300}
						width={500}
					/> */}
        </div>
        <div className="flex justify-between mt-12">
          <SkillRow skillNames={technologies} />
          <ProjectLinks projectLink={projectLink} githubLink={githubLink} />
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectItem;
