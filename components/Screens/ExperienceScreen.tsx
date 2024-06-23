import React, { useState } from "react";
import Section from "../Utilities/Section";
import Header from "../Utilities/Header";
import { experiences } from "../../data";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/animations";
import ExperienceTabContent from "../Experience/ExperienceTabContent";
import ExperienceTabBar from "../Experience/ExperienceTabBar";

export const ExperienceScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const selectedExperience = experiences[selectedTab];
  return (
    <Section
      id="experience"
      className="flex items-center justify-center min-h-[100vh]"
    >
      <div className="flex flex-col min-w-0 max-w-[850px]">
        <Header chapter="02" title="Experience" />
        <div className="mt-4">
          <div className="flex flex-col gap-8 lg:flex-row">
            <ExperienceTabBar
              experiences={experiences}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            <ExperienceTabContent experience={selectedExperience} />
          </div>
        </div>
      </div>
    </Section>
  );
};
