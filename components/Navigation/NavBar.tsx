import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import NavItem from "./NavItem";
import { NavContent } from "../../types";
import { Sling as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeContext } from "../../animations/themeContext";

const NavBar: FunctionComponent<{
  navigationContent: NavContent[];
}> = ({ navigationContent }) => {
  const [activeItem, setActiveItem] = useState<string>("home");
  const [isRetracted, setIsRetracted] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const [isDarkMode, setDarkMode] = useState(true);

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleDarkMode = (isDarkMode: boolean) => {
    setTheme(isDarkMode ? "dark" : "light");
    setDarkMode(isDarkMode);
  };

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    var prev = window.scrollY;
    const handleNavigation = (e: Event) => {
      if (window.scrollY < 200) {
        setIsRetracted(false);
      } else {
        if (prev > window.scrollY) {
          setIsRetracted(false);
        } else if (prev < window.scrollY) {
          setIsRetracted(true);
        }
        prev = window.scrollY;
      }
    };
    window.addEventListener("scroll", handleNavigation);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.header
      animate={isRetracted ? "closed" : "open"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      variants={{
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
      }}
      className="fixed flex bg-white dark:bg-main h-[11vh] items-center w-full z-40 transition-colors duration-500 shadow-md"
    >
      {/* Web Navbar */}
      <nav className="flex items-center justify-between w-[100%] mx-4">
        <Link
          className="ml-4 cursor-pointer"
          to={"home"}
          spy={true}
          smooth={true}
          offset={5}
          duration={1200}
        >
          {theme === "dark" ? (
            <Image src="/nl.png" alt="logo" width={35} height={35} />
          ) : (
            <Image
              className="rounded-xl"
              src="/nldark.png"
              alt="logo"
              width={35}
              height={35}
            />
          )}
        </Link>

        <div className="hidden lg:block">
          <div className="flex items-center px-5">
            <ul className="flex flex-row gap-16 text-lg font-semibold font-inconsolata">
              {navigationContent.map((navItem, index) => (
                <NavItem
                  onClick={() => setOpen(false)}
                  key={index}
                  id={navItem.id}
                  offset={navItem.offset}
                  name={navItem.name}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              ))}
            </ul>
            <div className="ml-20 transition-all ">
              <div className="transition-all hover:scale-110">
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={27}
                  moonColor={theme === "dark" ? "white" : "#374151"}
                  sunColor={theme === "dark" ? "white" : "#374151"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="z-30 lg:hidden">
          <Hamburger
            rounded={true}
            toggled={isOpen}
            toggle={setOpen}
            size={25}
            color={theme === "dark" ? "#FFFFFF" : "#374151"}
          />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="lg:invisible absolute top-0 left-0 flex justify-center items-center w-full px-5 bg-white dark:bg-main h-[100vh] transition-colors duration-500"
            >
              <ul className="flex w-[100%]  flex-col items-center text-xl font-semibold gap-11 font-inconsolata">
                {navigationContent.map((navItem, index) => (
                  <NavItem
                    onClick={() => setOpen(false)}
                    key={index}
                    id={navItem.id}
                    offset={navItem.offset}
                    name={navItem.name}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                  />
                ))}
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={30}
                  moonColor={theme === "dark" ? "white" : "#374151"}
                  sunColor={theme === "dark" ? "white" : "#374151"}
                />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default NavBar;
