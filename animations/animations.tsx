import { CSSProperties } from "react";

export const getRandomIntInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateBubbles = (numBubbles: number) => {
  const bubbles = [];
  for (let i = 0; i < numBubbles; i++) {
    const style = {
      "--i": getRandomIntInRange(10, 30),
    } as CSSProperties;
    bubbles.push(<span style={style} key={i}></span>);
  }
  return bubbles;
};

export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -80,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.7,
    },
  },
};

export const fadeInUpNoDelay = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};

export const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const fadeInLeftDelay = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};
