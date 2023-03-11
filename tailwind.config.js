module.exports = {
	purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
	content: ["./node_modules/flowbite/**/*.js"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#FFFFFF",
				secondary: "#B5B9E2",
				accent: "#5F5AFF",
				gradientLeft: "#5920E1",
				gradientRight: "#F62E5A",
				tertiary: "#140535",
				main: "#13012C",
				accent2: "#5A5F95",
				primaryDark: "#38393D",
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
