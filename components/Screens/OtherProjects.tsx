import React from "react";
import { otherProjects } from "../../data";
import Section from "../Utilities/Section";
import OtherProjectsItem from "../Projects/OtherProjectsItem";
import { motion } from "framer-motion";
import { fadeInUpNoDelay, stagger } from "../../animations/animations";

export const OtherProjects = () => {
  return (
    <Section
      id="others"
      className="flex items-center justify-center min-h-[80vh]  "
    >
      <div className="flex flex-col w-[1000px] items-center">
        <h1 className=" text-3xl font-bold font-poppins dark:text-primary text-primaryDark">
          Other Creations
        </h1>
        <h3 className="mb-20 mt-2 text-md leading-none font-inconsolata dark:text-secondary">
          More projects I&apos;ve worked on
        </h3>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-16 lg:grid-cols-2"
        >
          {otherProjects.map((otherProject, index) => (
            <motion.div key={index} variants={fadeInUpNoDelay}>
              <OtherProjectsItem project={otherProject} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
