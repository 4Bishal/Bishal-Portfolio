import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState("#hero");

    // Initialize theme
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
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

    // Scroll effect + active section detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            let current = "#hero";
            navItems.forEach((item) => {
                const section = document.querySelector(item.href);
                if (section) {
                    const sectionTop = section.offsetTop - 120; // navbar height offset
                    const sectionBottom = sectionTop + section.offsetHeight;
                    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                        current = item.href;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initialize on load
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Neon hover/bouncy underline effect
    const navLinkClasses = (href) =>
        cn(
            "relative px-2 py-1 font-medium text-lg transition-all duration-300",
            "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full",
            "after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:transition-all after:duration-500 after:ease-out",
            "hover:text-primary hover:after:w-full hover:after:animate-bounce-neon",
            activeSection === href
                ? "text-primary after:w-full after:animate-bounce-neon"
                : "text-foreground/80"
        );

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300",
                isScrolled ? "py-3 bg-background/100 border-b border-border" : "py-5 bg-background/100"
            )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Bishal Bhandari</span> Portfolio
                    </span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className={navLinkClasses(item.href)}>
                            <span className="relative z-10">{item.name}</span>
                        </a>
                    ))}

                    {/* Theme toggle */}
                    <button
                        onClick={handleToggle}
                        className="p-2 rounded-full hover:bg-foreground/10 transition-colors duration-300 focus:outline-none"
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? (
                            <Sun className="h-5 w-5 text-yellow-400" />
                        ) : (
                            <Moon className="h-5 w-5 text-blue-700" />
                        )}
                    </button>
                </div>

                {/* Mobile nav button */}
                <div className="md:hidden flex items-center space-x-2">
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="p-2 text-foreground z-50"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={cn(
                    "absolute top-full left-0 w-full z-40 flex flex-col items-center md:hidden transform transition-transform duration-300",
                    isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                )}
            >
                <div className="flex flex-col space-y-6 text-xl py-6 w-full items-center bg-background/100">
                    {/* Theme toggle inside mobile menu */}
                    <button
                        onClick={handleToggle}
                        className="p-2 rounded-full hover:bg-foreground/10 transition-colors duration-300 focus:outline-none mb-4"
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? (
                            <Sun className="h-5 w-5 text-yellow-400" />
                        ) : (
                            <Moon className="h-5 w-5 text-blue-700" />
                        )}
                    </button>

                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={navLinkClasses(item.href)}
                        >
                            <span className="relative z-10">{item.name}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Neon bounce animation */}
            <style jsx>{`
        @keyframes bounce-neon {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          50% {
            transform: scaleX(1.1);
            opacity: 1;
          }
          70% {
            transform: scaleX(0.95);
          }
          100% {
            transform: scaleX(1);
          }
        }
        .animate-bounce-neon {
          animation: bounce-neon 0.6s ease forwards;
        }
      `}</style>
        </nav>
    );
};
