import React from "react";
import { TypeAnimation } from "react-type-animation";
import MobileSocialLinks from "../Socials/MobileSocialLinks";
import Section from "../Utilities/Section";
import BlueButton from "../Utilities/BlueButton";
import { Link } from "react-scroll";
import { generateBubbles } from "../../animations/animations";

export const HomeScreen = () => {
  const BubbleBackground = () => {
    return (
      <div>
        <div className="background">
          <div className="container">
            <div className="bubbles">{generateBubbles(5)}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <BubbleBackground />
      <Section
        id="home"
        className="flex items-center justify-center min-h-screen"
      >
        <div className="flex flex-col justify-center w-[750px] z-10">
          <h3 className="text-lg font-semibold font-inconsolata dark:text-primary text-primaryDark">
            Nice to meet you! I am
          </h3>
          <h1 className="mt-6 text-6xl font-bold text-transparent md:text-7xl font-poppins bg-clip-text bg-gradient-to-r from-gradientLeft to-gradientRight">
            Nicholas Lee.
          </h1>

          <TypeAnimation
            className="mt-2 text-lg font-bold text-primaryDark md:text-4xl dark:text-primary"
            sequence={[
              "I build web applications",
              2000,
              "I build mobile applications",
              2000,
              "I love bringing ideas to life with code",
              2000,
              "I'm an aspiring software engineer",
              2000,
              "I enjoy solving complex problems",
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
          />

          <p className="mt-12 text-sm font-normal leading-8 text-secondaryDark dark:text-secondary">
            I am a computer science student at the National University of
            Singapore, pursuing my interest in full-stack web and mobile
            development. My passion lies in utilizing technology to not only
            bring ideas to life through beautiful and efficient software, but to
            also make a meaningful difference in people&apos;s lives.
          </p>
          <Link
            className="cursor-pointer w-fit mt-12"
            to={"projects"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <BlueButton onClick={() => ""}>View Projects</BlueButton>
          </Link>

          <div className="block sm:hidden">
            <MobileSocialLinks />
          </div>
        </div>
      </Section>
    </div>
  );
};
