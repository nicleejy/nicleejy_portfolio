import type { NextPage } from "next";
import { AboutScreen } from "../components/Screens/AboutScreen";
import { ExperienceScreen } from "../components/Screens/ExperienceScreen";
import { FeaturedProjects } from "../components/Screens/FeaturedProjects";
import { HomeScreen } from "../components/Screens/HomeScreen";
import NavBar from "../components/Navigation/NavBar";
import { OtherProjects } from "../components/Screens/OtherProjects";
import WebSocialLinks from "../components/Socials/WebSocialLinks";
import { navContents } from "../data";
import { ContactScreen } from "../components/Screens/ContactScreen";
import { ThemeProvider } from "../animations/themeContext";
import { FooterScreen } from "../components/Screens/FooterScreen";
import { HiChevronDoubleDown } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/animations";

const Home: NextPage = () => {
  return (
    <ThemeProvider>
      <main className="transition-colors duration-500 bg-primary font-poppins text-primary dark:bg-main">
        <div className="hidden sm:block">
          <WebSocialLinks />
        </div>
        <div>
          <Link
            className="cursor-pointer"
            to={"about"}
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <div className="hidden md:flex justify-center items-center absolute bottom-0 h-[10vh] w-full z-10">
              <HiChevronDoubleDown
                size={30}
                className="dark:text-primary text-secondaryDark animate-bounce"
              />
            </div>
          </Link>
        </div>

        <NavBar navigationContent={navContents} />
        <HomeScreen />
        <AboutScreen />
        <ExperienceScreen />
        <FeaturedProjects />
        <OtherProjects />

        <ContactScreen />
        <FooterScreen />
      </main>
    </ThemeProvider>
  );
};

export default Home;
