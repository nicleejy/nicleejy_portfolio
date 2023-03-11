import React from "react";
import Section from "../Utilities/Section";
import Header from "../Utilities/Header";
import ExperienceItem from "../Experience/ExperienceItem";
import { experiences } from "../../data";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/animations";

export const ExperienceScreen = () => {
  return (
    <Section
      id="experience"
      className="flex items-center justify-center min-h-[100vh]"
    >
      <div className="flex flex-col w-[750px]">
        <Header chapter="02" title="My Experiences" />
        <div className="mt-12">
          <ol className="relative border-l dark:border-primary border-primaryDark border-opacity-30">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <ExperienceItem experience={experience} />
              </motion.div>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
};
