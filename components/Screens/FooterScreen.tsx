import React, { useContext } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { ThemeContext } from "../../animations/themeContext";
import SkillRow from "../Skills/SkillRow";

export const FooterScreen = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <footer className=" h-[30vh] flex flex-col items-center justify-center text-primary-content">
      <Link
        className="cursor-pointer"
        to={"home"}
        spy={true}
        smooth={true}
        offset={5}
        duration={1000}
      >
        {theme === "dark" ? (
          <Image
            src="/nl.png"
            className="transition-all hover:scale-110"
            alt="logo"
            width={80}
            height={80}
          />
        ) : (
          <Image
            src="/nldark.png"
            className="mb-6 transition-all rounded-2xl hover:scale-110 animate-pulse"
            alt="logo"
            width={50}
            height={50}
          />
        )}
      </Link>
      <p className="text-sm dark:text-secondary text-secondaryDark font-inconsolata">
        Designed and built by Nicholas Lee
      </p>
      <SkillRow
        className="mt-6"
        skillNames={["next", "typescript", "tailwind", "react"]}
      />
    </footer>
  );
};
