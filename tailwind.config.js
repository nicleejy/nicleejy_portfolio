module.exports = {
	purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
	content: ["./node_modules/flowbite/**/*.js"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#FFFFFF",
				secondary: "#ADB1E2",
				accent: "#5B20E0",
				gradientLeft: "#5920E1",
				gradientRight: "#F62E5A",
				tertiary: "#150636",
				main: "#13012C",
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
