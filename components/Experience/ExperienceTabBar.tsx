import React, { FunctionComponent } from "react";
import { Experience } from "../../types";

interface ExperienceTabBarProps {
  experiences: Experience[];
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}
const ExperienceTabBar: FunctionComponent<ExperienceTabBarProps> = ({
  experiences,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <>
      <div className="flex relative flex-row lg:flex-col h-fit overflow-x-scroll">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`flex h-16 px-6 py-2 cursor-pointer items-center hover:bg-accent/5 text-md font-inconsolata ${
              selectedTab === index
                ? "text-accent bg-accent/10"
                : "dark:text-secondary text-secondaryDark"
            } whitespace-nowrap`}
            onClick={() => setSelectedTab(index)}
          >
            {experience.company}
          </div>
        ))}
        <div
          className="hidden lg:block h-16 absolute right-0 w-1 bg-accent z-10 rounded-sm transition-all duration-300"
          style={{ top: `${selectedTab * 64}px` }}
        />
        <div className="hidden lg:block absolute right-0 top-0 w-1 h-full rounded-sm bg-[#fafafa] dark:bg-[#260E50] transition-all duration-300" />
      </div>
    </>
  );
};

export default ExperienceTabBar;
