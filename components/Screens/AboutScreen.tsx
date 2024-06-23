import React from "react";
import Section from "../Utilities/Section";
import Header from "../Utilities/Header";
import Image from "next/image";

export const AboutScreen = () => {
  return (
    <Section
      id="about"
      className="flex items-center justify-center min-h-[100vh]"
    >
      <div className="w-[750px]">
        <Header chapter="01" title="About Me" />
        <p className="text-xs font-normal leading-8 text-secondaryDark dark:text-secondary">
          I&apos;m an aspiring software engineer with a strong passion for
          developing clean, effective technical solutions that make a positive
          impact. I&apos;m fascinated by optimisation problems, predictive
          modeling, and working with large data sets.
          <br></br>
        </p>
        <div className="flex flex-col items-center lg:flex-row">
          <p className="text-xs font-normal leading-8 text-secondaryDark dark:text-secondary">
            <br></br>I thrive in fast-paced and collaborative team environments,
            bringing a keen eye for detail to every project I work on.
            Currently, I am expanding my skillsets by exploring web development
            tools such as Three.js and Express.js. <br></br>In 2016, I
            co-founded Advocado Films, where I honed my skills in content
            creation and corporate branding, creating high-quality work for
            clients. My passion for visual storytelling has honed my eye for
            detail and my ability to create intuitive and user-friendly
            solutions.
            <br></br>
            <br></br>When I am not coding, I enjoy traveling, doing photography
            and videography, and looking for good food around Singapore.
          </p>

          <div className="relative top-0 left-0 mt-20 md:ml-20 group">
            <div className="border-2 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 border-accent shadow-md w-[230px] h-[307px]"></div>
            <div className="absolute top-[-14px] left-[-14px] overflow-hidden">
              <Image
                className="transition-all duration-300 group-hover:scale-105"
                src="/profile.jpg"
                alt="profile"
                width={230}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
