import React from "react";
import { TypeAnimation } from "react-type-animation";
import MobileSocialLinks from "../Socials/MobileSocialLinks";
import Section from "../Utilities/Section";
import PrimaryButton from "../Utilities/PrimaryButton";
import { Link } from "react-scroll";
import { generateBubbles } from "../../animations/animations";
import { introductionText } from "../../data";

export const HomeScreen = () => {
  const BubbleBackground = () => {
    return (
      <div>
        <div className="background">
          <div className="container">
            <div className="bubbles">{generateBubbles(4)}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <BubbleBackground />
      <Section id="home" className="flex items-center justify-center h-screen">
        <div className="flex flex-col justify-center w-[750px] z-10">
          <h3 className="text-xs md:text-lg font-semibold font-inconsolata dark:text-primary text-primaryDark md:mt-0 mt-14">
            Nice to meet you! I am
          </h3>
          <h1 className="mt-2 text-4xl font-bold text-transparent md:text-7xl font-poppins bg-clip-text bg-gradient-to-r from-gradientLeft to-gradientRight">
            Nicholas Lee.
          </h1>
          <TypeAnimation
            className="mt-2 text-lg font-bold text-primaryDark md:text-4xl dark:text-primary"
            sequence={[
              "I build web apps",
              2000,
              "I build mobile apps",
              2000,
              "I design user-friendly software",
              2000,
              "I love bringing ideas to life",
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
          />
          <p className="mt-6 text-xs font-normal leading-8 text-secondaryDark dark:text-secondary">
            {introductionText}
          </p>
          <Link
            className="cursor-pointer w-fit mt-12"
            to={"projects"}
            spy={true}
            smooth={true}
            offset={-50}
            duration={1500}
          >
            <PrimaryButton onClick={() => undefined}>
              View Projects
            </PrimaryButton>
          </Link>
          <div className="block sm:hidden">
            <MobileSocialLinks />
          </div>
        </div>
      </Section>
    </div>
  );
};
