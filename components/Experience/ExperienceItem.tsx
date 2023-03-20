import React, { FunctionComponent } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { Experience } from "../../types";
import SkillRow from "../Skills/SkillRow";
import Image from "next/image";

const ExperienceItem: FunctionComponent<{ experience: Experience }> = ({
  experience: {
    title,
    duration,
    contributions,
    imageSource,
    skillsList,
    website,
  },
}) => {
  return (
    <li className="mb-10 ml-6 ">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full ring-8 ring-white dark:bg-main -left-3 dark:ring-main dark:ring-8">
        <BiCodeAlt
          className="transition-none text-secondaryDark dark:text-primary"
          size={50}
        />
      </span>
      <div className="ml-2 md:ml-10">
        <a href={website} target="_blank" rel="noreferrer">
          <div className="flex items-center transition-all duration-300 group hover:translate-x-2">
            <Image
              className="object-contain"
              src={imageSource}
              alt={title}
              width={50}
              height={50}
            />

            <div className="ml-5">
              <h3 className="flex items-center mb-1 text-xl font-bold text-primaryDark dark:text-primary group-hover:text-accent dark:group-hover:animate-glow transition-all duration-300">
                {title}
              </h3>
              <time className="block mt-2 text-lg leading-none font-inconsolata text-secondaryDark dark:text-secondary">
                {duration}
              </time>
            </div>
          </div>
        </a>
        <ul className="mt-6 mb-6 ml-5 text-sm leading-7 list-disc text-secondaryDark dark:text-secondary">
          {contributions.map((contribution, index) => (
            <li key={index} className="mt-4">
              {contribution}
            </li>
          ))}
        </ul>
        <SkillRow className="mb-28" skillNames={skillsList} />
      </div>
    </li>
  );
};

export default ExperienceItem;
