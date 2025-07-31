import { createContext, useContext, useEffect, useState, } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );

    useEffect(
        () => {
            const root = window.document.documentElement;
            if (theme === "light") {
                root.classList.add("light");
            } else {
                root.classList.remove("light");
            }
            localStorage.setItem("theme", theme)
        }, [theme]);

    return (
        <ThemeContext.Provider
            value={{ theme: theme === "light", setTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
