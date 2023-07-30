import React, { FunctionComponent } from "react";
import { OtherProject } from "../../types";
import ProjectLinks from "./ProjectLinks";
import SkillRow from "../Skills/SkillRow";
import Image from "next/image";

const FeaturedProjectItem: FunctionComponent<{ project: OtherProject }> = ({
  project: {
    name,
    description,
    technologies,
    projectLink,
    githubLink,
    imagePath,
  },
}) => {
  return (
    <div className="flex flex-col h-[520px] md:h-[500px] w-full md:w-[400px] grid-item bg-white shadow-lg dark:shadow-none dark:bg-tertiary rounded-xl overflow-hidden hover:-translate-y-2 duration-200 transition-all ">
      <Image
        className="h-[200px] w-full md:w-[400px] object-cover "
        src={imagePath}
        alt={name}
        height={220}
        width={300}
      />
      <div className="h-[320px] md:h-[300px] flex flex-col justify-between px-8 py-10">
        <h1 className="mb-4 text-xl font-bold text-primaryDark dark:text-primary transition-all duration-300">
          {name}
        </h1>
        <p className="text-xs leading-7 text-secondaryDark dark:text-secondary">
          {description}
        </p>
        <div className="flex justify-between mt-8">
          <SkillRow className="text-primary" skillNames={technologies} />
          <ProjectLinks projectLink={projectLink} githubLink={githubLink} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectItem;
