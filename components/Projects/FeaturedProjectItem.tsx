import React, { FunctionComponent, useEffect } from "react";
import { Project } from "../../types";
import ProjectLinks from "./ProjectLinks";
import SkillRow from "../Skills/SkillRow";
import { useLottie, useLottieInteractivity } from "lottie-react";
import { FaMedal } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInLeft } from "../../animations/animations";
import Image from "next/image";

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
        visibility: [0.2, 0.7],
        type: "seek",
        frames: [0, 14],
      },
    ],
  });

  const framerAnimation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      framerAnimation.start("animate");
    }
  }, [framerAnimation, inView]);

  const handleClickProject = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (projectLink != null) {
      window.open(projectLink, "projectTab");
    } else {
      window.open(githubLink, "githubTab");
    }
  };

  const handleClickAward = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (award && award.link != null) {
      window.open(award.link, "awardTab");
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
        className="mt-4 mb-1 text-xl font-bold text-primaryDark transition-all dark:text-primary hover:text-accent duration-300 dark:hover:text-accent cursor-pointer"
        onClick={handleClickProject}
      >
        {name}
      </h1>
      <h3 className="mt-2 text-md leading-none dark:text-secondary text-secondaryDark font-inconsolata">
        {subheader}
      </h3>
      {award && (
        <div
          className="flex items-center p-4 mt-6 transition-all duration-300 w-fit text-sm font-inconsolata text-primary cursor-pointer rounded-lg hover:bg-accent/10"
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
      <div className="relative px-6 py-10 mt-8 mb-20 md:mt-8 shadow-lg dark:bg-tertiary rounded-xl md:w-[630px]">
        <div className="flex flex-col items-center">
          <p className="mr-0 text-xs leading-7 list-disc lg:mr-32 text-secondaryDark dark:text-secondary ">
            {description}
          </p>
          {/* {animation && <div className="hidden lg:absolute lg:block lg:-right-1/2 lg:-top-44 lg:left-auto lg:bottom-auto">
            {Animation}
          </div>} */}
          <Image
            // className='my-10 lg:hidden'
            className="my-10 lg:absolute lg:block lg:-right-1/2 lg:-top-40 lg:left-auto lg:bottom-auto"
            alt={name}
            src={imagePath}
            height={300}
            width={500}
          />
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
