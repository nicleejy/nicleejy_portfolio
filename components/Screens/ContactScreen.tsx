import React from "react";
import Section from "../Utilities/Section";
import Header from "../Utilities/Header";
import PrimaryButton from "../Utilities/PrimaryButton";

export const ContactScreen = () => {
  return (
    <Section
      id="contact"
      className="flex items-center justify-center min-h-[20vh]"
    >
      <div className="w-[800px]">
        <Header chapter="04" title="Let's Connect!" />

        <div className="flex flex-col">
          <p className="text-xs font-normal leading-8 text-secondaryDark dark:text-secondary">
            If you&apos;re interested in discussing potential projects or
            opportunities, have any questions, or simply want to connect,
            don&apos;t hesitate to reach out! Thank you for visiting my
            portfolio :&#41;{" "}
          </p>
          <PrimaryButton
            className="mt-12"
            onClick={() => window.open("mailto:e0725400@u.nus.edu")}
          >
            Contact Me
          </PrimaryButton>
        </div>
      </div>
    </Section>
  );
};
