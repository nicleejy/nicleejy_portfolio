import React, { useState, useEffect, createContext } from "react";

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	const checkTheme = (currentTheme) => {
		if (typeof window !== "undefined") {
			const root = window.document.documentElement;
			const isDarkMode = currentTheme === "dark";

			root.classList.remove(isDarkMode ? "light" : "dark");
			root.classList.add(currentTheme);
			localStorage.setItem("current-theme", currentTheme);
		}
	};
	
	useEffect(() => checkTheme(theme), [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const ThemeContext = createContext();
