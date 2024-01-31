import { motion } from "framer-motion";
import { FC } from "react";
import { fadeInUp } from "../../animations/animations";

type Props = {
  className?: string;
  id?: string;
  children: React.ReactNode;
};

const Section: FC<Props> = ({ children, id, className }) => {
  const getVariants = () => {
    switch (id) {
      case "home":
        return { animate: "animate" };
      default:
        return { whileInView: "animate" };
    }
  };

  return (
    <motion.section
      variants={fadeInUp}
      initial="initial"
      {...getVariants()}
      viewport={{ once: true }}
      id={id}
      className={`${className} px-10 sm:px-28 w-full py-12 `}
    >
      {children}
    </motion.section>
  );
};

export default Section;
