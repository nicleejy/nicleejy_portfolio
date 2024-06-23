import React, { FunctionComponent, useEffect } from "react";
import { Experience } from "../../types";
import SkillRow from "../Skills/SkillRow";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { motion, useAnimationControls } from "framer-motion";
import SecondaryButton from "../Utilities/SecondaryButton";

const ExperienceTabContent: FunctionComponent<{ experience: Experience }> = ({
  experience,
}) => {
  const {
    website,
    imageSource,
    title,
    contributions,
    duration,
    skillsList,
    testimonialPath,
    company,
  } = experience;

  const skillRowControls = useAnimationControls();
  const contentControls = useAnimationControls();

  useEffect(() => {
    const animateSkillRow = () => {
      skillRowControls
        .start({ opacity: 0, y: 30, transition: { duration: 0 } })
        .then(() => {
          skillRowControls.start({
            opacity: 1,
            y: 0,
            transition: { ease: "easeInOut", duration: 0.5 },
          });
        });
    };

    const animateContent = () => {
      contentControls
        .start({ opacity: 0, transition: { duration: 0 } })
        .then(() => {
          contentControls.start({
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.7 },
          });
        });
    };
    animateSkillRow();
    animateContent();
  }, [experience, skillRowControls, contentControls]);

  const onTestimonialClick = () => {
    window.open(`/documents/${testimonialPath}`, "testimonialTab");
  };

  return (
    <div className="lg:w-8/12 min-h-[380px] flex flex-col justify-between">
      <motion.div animate={contentControls}>
        <a href={website} target="companyTab">
          <div className="flex items-center transition-all duration-300 hover:translate-x-2">
            <Image
              className="object-contain"
              src={imageSource}
              alt={title}
              width={50}
              height={50}
            />
            <div className="ml-5">
              <h3 className="flex flex-col items-start lg:flex-row lg:items-center text-xl font-bold text-primaryDark dark:text-primary transition-all duration-300">
                {title}
                <span className="hidden lg:block dark:text-accent text-accent ml-2">
                  /&nbsp;
                  {company}
                </span>
              </h3>
              <h3 className="text-md font-inconsolata text-secondaryDark dark:text-secondary">
                {duration}
              </h3>
            </div>
          </div>
        </a>
        <ul className="mt-6 mb-10 ml-5 text-xs leading-6 list-disc text-secondaryDark dark:text-secondary">
          {contributions.map((contribution, index) => (
            <li key={index} className="mt-4">
              {contribution}
            </li>
          ))}
        </ul>
      </motion.div>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center w-full">
        {testimonialPath && (
          <SecondaryButton
            className="lg:mr-auto"
            icon={<FiExternalLink size={18} />}
            onClick={onTestimonialClick}
          >
            View Testimonial
          </SecondaryButton>
        )}
        {skillsList.length !== 0 && (
          <motion.div animate={skillRowControls}>
            <SkillRow skillNames={skillsList} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExperienceTabContent;
