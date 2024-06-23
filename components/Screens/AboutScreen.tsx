import React from "react";
import Section from "../Utilities/Section";
import Header from "../Utilities/Header";
import Image from "next/image";
import { aboutText } from "../../data";

export const AboutScreen = () => {
  return (
    <Section
      id="about"
      className="flex items-center justify-center min-h-[100vh]"
    >
      <div className="w-[750px]">
        <Header chapter="03" title="About Me" />
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col">
            {aboutText.map((paragraph, index) => (
              <p
                key={index}
                className="text-xs font-normal leading-8 text-secondaryDark dark:text-secondary mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative top-0 left-0 mt-10 md:ml-20 group">
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
