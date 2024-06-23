import React from "react";
import Section from "../Utilities/Section";
import Header from "../Utilities/Header";
import { projects } from "../../data";
import FeaturedProjectItem from "../Projects/FeaturedProjectItem";

export const FeaturedProjects = () => {
  return (
    <Section
      id="projects"
      className="flex items-center justify-center min-h-[80vh] "
    >
      <div className="flex flex-col w-[800px]">
        <Header chapter="02" title="Featured Projects" />
        {projects.map((project, index) => (
          <div key={index}>
            <FeaturedProjectItem project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};
