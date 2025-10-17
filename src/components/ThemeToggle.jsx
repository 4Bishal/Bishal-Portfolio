import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils.js";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // default dark

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark" || !storedTheme) {
            // Default to dark if no theme found
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
            if (!storedTheme) localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const handleToggle = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={handleToggle}
            className={cn(
                "fixed bottom-5 right-5 md:top-5 md:right-5 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300",
                "hover:bg-gray-100 dark:hover:bg-gray-700",
                "focus:outline-none"
            )}
            aria-label="Toggle Theme"
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
                <Moon className="h-6 w-6 text-blue-700" />
            )}
        </button>
    );
};
