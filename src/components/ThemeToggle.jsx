import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils.js";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        console.log("Stored theme:", storedTheme); // Debug

        const theme = storedTheme || "dark";
        const isDark = theme === "dark";

        setIsDarkMode(isDark);

        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        console.log("Theme applied:", theme); // Debug
    }, []);

    const handleToggle = () => {
        const newTheme = isDarkMode ? "light" : "dark";

        setIsDarkMode(!isDarkMode);
        localStorage.setItem("theme", newTheme);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        console.log("Theme toggled to:", newTheme); // Debug
    };

    return (
        <button
            onClick={handleToggle}
            className={cn(
                "fixed bottom-5 right-5 md:top-5 md:right-5 z-50 p-3 rounded-full",
                "bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300",
                "hover:bg-gray-100 dark:hover:bg-gray-700",
                "focus:outline-none focus:ring-2 focus:ring-primary"
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