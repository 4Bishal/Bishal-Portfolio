import { ArrowDown } from "lucide-react";
import lightPhoto from "@/assets/bishal-light.png";
import darkPhoto from "@/assets/bishal-dark.png";
import { useEffect, useState } from "react";

export const HeroSection = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Initialize theme from localStorage
        const storedTheme = localStorage.getItem("theme") || "dark";
        const dark = storedTheme === "dark";

        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        setIsDarkMode(dark);

        // Observe class changes on <html> for live toggle
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const floatAnim = "animate-[float_6s_ease-in-out_infinite]";

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-3xl mx-auto text-center z-10 space-y-8">

                {/* Hero Image */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8">
                    {/* Subtle glow behind photo */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 blur-2xl animate-pulse"></div>

                    {/* Floating images */}
                    <div className={`relative w-full h-full ${floatAnim}`}>
                        <img
                            src={lightPhoto}
                            alt="Bishal Light"
                            className={`absolute inset-0 w-full h-full object-cover rounded-full transition-all duration-700 ease-in-out ${!isDarkMode ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                }`}
                        />
                        <img
                            src={darkPhoto}
                            alt="Bishal Dark"
                            className={`absolute inset-0 w-full h-full object-cover rounded-full transition-all duration-700 ease-in-out ${isDarkMode ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                }`}
                        />
                    </div>

                    {/* Optional rotating ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]"></div>
                </div>

                {/* Name */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight opacity-0 animate-fade-in-delay-1">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">
                        {" "}
                        Bishal
                    </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                        {" "}
                        Bhandari
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2 leading-relaxed">
                    I'm a Full Stack Developer who builds smooth, responsive, and scalable web applications.
                    I combine frontend and backend expertise to create seamless user experiences and robust solutions.
                </p>

                {/* Button */}
                <div className="pt-4 opacity-0 animate-fade-in-delay-3">
                    <a
                        href="#projects"
                        className="cosmic-button inline-block transform hover:scale-105 transition-transform duration-300"
                    >
                        View My Work
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer group">
                <span className="text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">
                    Scroll
                </span>
                <ArrowDown className="h-5 w-5 text-primary group-hover:text-purple-500 transition-colors" />
            </div>
        </section>
    );
};
