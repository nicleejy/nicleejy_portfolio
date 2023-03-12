module.exports = {
	purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
	content: ["./node_modules/flowbite/**/*.js"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#FFFFFF",
				secondary: "#C7CAEE",
				accent: "#6424F3",
				gradientLeft: "#5920E1",
				gradientRight: "#F62E5A",
				tertiary: "#150636",
				main: "#13012C",
				accent2: "#5A5F95",
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
