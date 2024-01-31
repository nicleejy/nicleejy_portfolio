module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  content: ["./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: "0.8rem",
      sm: "0.875remrem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.857rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
    },
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#D8DAF3",
        accent: "#7032FB",
        gradientLeft: "#5920E1",
        gradientRight: "#F62E5A",
        tertiary: "#130530",
        main: "#110125",
        accent2: "#E4009C",
        primaryDark: "#2F3033",
        secondaryDark: "#76767A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
