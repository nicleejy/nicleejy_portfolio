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
        duration={1500}
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
            className="mb-6 transition-all rounded-2xl hover:scale-110"
            alt="logo"
            width={50}
            height={50}
          />
        )}
      </Link>

      <a
        href={"https://github.com/nicleejy/nicleejy_portfolio"}
        target="_blank"
        rel="noreferrer"
        className="text-sm dark:text-secondary text-secondaryDark  hover:text-accent dark:hover:text-accent font-inconsolata hover:scale-105 transition-all"
      >
        Designed and built by Nicholas Lee
      </a>
      <SkillRow
        className="mt-6"
        skillNames={["next", "typescript", "tailwind", "react"]}
      />
    </footer>
  );
};
