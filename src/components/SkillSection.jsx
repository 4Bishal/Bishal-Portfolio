import { useState, useEffect } from "react";
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
    SiNodedotjs, SiMongodb, SiPostman, SiCloudinary,
    SiRedux, SiDocker, SiKubernetes, SiCplusplus,
    SiTypescript, SiPostgresql, SiGraphql
} from "react-icons/si";
import { Code2, Palette, Server, Wrench } from "lucide-react";

import uploadThingLogo from "@/assets/icons/uploadthing.svg";
import javaLogo from "@/assets/icons/java.svg";
import cLogo from "@/assets/icons/c.svg";
import pythonLogo from "@/assets/icons/python.svg";
import github from "@/assets/icons/github.svg";
import nextjs from "@/assets/icons/nextjs.svg";
import ci_cd from "@/assets/icons/ci-cd.svg";
import expressLogo from "@/assets/icons/express.svg";
import socketio from "@/assets/icons/socket-io.svg";
import webrtcLogo from "@/assets/icons/webrtc.svg";
import prismaLogo from "@/assets/icons/prisma.svg";

// Skills array
const skills = [
    // Frontend
    { name: "HTML5", category: "Frontend", icon: SiHtml5, color: "#E34F26", level: 90 },
    { name: "CSS3", category: "Frontend", icon: SiCss3, color: "#1572B6", level: 90 },
    { name: "JavaScript", category: "Frontend", icon: SiJavascript, color: "#F7DF1E", level: 90 },
    { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB", level: 90 },
    { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#38B2AC", level: 90 },
    { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178C6", level: 60 },
    { name: "Next.js", category: "Frontend", icon: nextjs, isCustom: true, level: 60 },

    // Backend
    { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933", level: 90 },
    { name: "Express.js", category: "Backend", icon: expressLogo, isCustom: true, level: 90 },
    { name: "WebSocket", category: "Backend", icon: socketio, isCustom: true, level: 75 },
    { name: "WebRTC", category: "Backend", icon: webrtcLogo, isCustom: true, level: 75 },

    // Tools
    { name: "Git/GitHub", category: "Tools", icon: github, isCustom: true, level: 90 },
    { name: "Postman", category: "Tools", icon: SiPostman, color: "#FF6C37", level: 90 },
    { name: "Cloudinary", category: "Tools", icon: SiCloudinary, color: "#3548FF", level: 90 },
    { name: "Redux", category: "Tools", icon: SiRedux, color: "#764ABC", level: 60 },
    { name: "Docker", category: "Tools", icon: SiDocker, color: "#2496ED", level: 60 },
    { name: "Kubernetes", category: "Tools", icon: SiKubernetes, color: "#326CE5", level: 60 },
    { name: "CI/CD", category: "Tools", icon: ci_cd, isCustom: true, level: 60 },
    { name: "UploadThing", category: "Tools", icon: uploadThingLogo, isCustom: true, level: 75 },

    // Languages
    { name: "C", category: "Languages", icon: cLogo, isCustom: true, level: 90 },
    { name: "C++", category: "Languages", icon: SiCplusplus, color: "#00599C", level: 90 },
    { name: "Python", category: "Languages", icon: pythonLogo, isCustom: true, level: 75 },
    { name: "Java", category: "Languages", icon: javaLogo, isCustom: true, level: 75 },

    // Database
    { name: "MongoDB", category: "Database", icon: SiMongodb, color: "#47A248", level: 90 },
    { name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "#336791", level: 60 },
    { name: "GraphQL", category: "Database", icon: SiGraphql, color: "#E10098", level: 60 },
    { name: "Prisma", category: "Database", icon: prismaLogo, isCustom: true, level: 60 },
];

// Category info
const categoryInfo = {
    Frontend: { icon: Palette, desc: "UI/UX & Client-side Development" },
    Backend: { icon: Server, desc: "Server, APIs & Logic" },
    Tools: { icon: Wrench, desc: "Development Tools & Workflow" },
    Languages: { icon: Code2, desc: "Programming Languages" },
    Database: { icon: Server, desc: "Databases & Query Languages" },
};

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("Frontend");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [hoverStyle, setHoverStyle] = useState({});
    const categories = Object.keys(categoryInfo);
    const filteredSkills = skills.filter((s) => s.category === activeCategory);

    // Detect dark mode
    useEffect(() => {
        const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(matchMedia.matches);
        const listener = (e) => setIsDarkMode(e.matches);
        matchMedia.addEventListener("change", listener);
        return () => matchMedia.removeEventListener("change", listener);
    }, []);

    // Skill card tilt
    const handleMouseMove = (e, idx) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 8;
        const rotateY = ((x - centerX) / centerX) * -8;
        setHoverStyle((prev) => ({
            ...prev,
            [idx]: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
        }));
    };

    const handleMouseLeave = (idx) => {
        setHoverStyle((prev) => ({ ...prev, [idx]: "rotateX(0deg) rotateY(0deg) scale(1)" }));
    };

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                        Skills & <span className="text-primary">Expertise</span>
                    </h2>
                    <p className="text-foreground/70 text-lg">
                        Crafting digital experiences with cutting-edge technologies
                    </p>
                </div>

                {/* Category Navigation with small badge counts */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat, idx) => {
                        const Icon = categoryInfo[cat].icon;
                        const isActive = activeCategory === cat;
                        const count = skills.filter((s) => s.category === cat).length;

                        const [tiltStyle, setTiltStyle] = useState("rotateX(0deg) rotateY(0deg) scale(1)");

                        const handleTiltMove = (e) => {
                            const card = e.currentTarget;
                            const rect = card.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const centerX = rect.width / 2;
                            const centerY = rect.height / 2;
                            const rotateX = ((y - centerY) / centerY) * 6;
                            const rotateY = ((x - centerX) / centerX) * -6;
                            setTiltStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
                        };

                        const handleTiltLeave = () => setTiltStyle("rotateX(0deg) rotateY(0deg) scale(1)");

                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                onMouseMove={handleTiltMove}
                                onMouseLeave={handleTiltLeave}
                                style={{ transform: tiltStyle }}
                                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${isActive
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-card text-foreground border border-border hover:border-primary/50"
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <Icon className="w-5 h-5" />
                                    <span>{cat}</span>
                                </div>

                                {/* Small count badge */}
                                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center bg-card dark:bg-card-dark shadow-md">
                                    <span className="text-xs font-semibold text-foreground">{count}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Category Description */}
                <div className="text-center mb-12">
                    <p className="text-foreground/60 text-lg">{categoryInfo[activeCategory].desc}</p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredSkills.map((skill, idx) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={idx}
                                onMouseMove={(e) => handleMouseMove(e, idx)}
                                onMouseLeave={() => handleMouseLeave(idx)}
                                style={{ transform: hoverStyle[idx] || "rotateX(0deg) rotateY(0deg) scale(1)" }}
                                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 shadow-md cursor-pointer will-change-transform"
                            >
                                <div className="relative flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 bg-card dark:bg-card-dark">
                                        {skill.isCustom || typeof Icon === "string" ? (
                                            <img
                                                src={Icon}
                                                alt={skill.name}
                                                className="w-8 h-8"
                                                style={{ filter: isDarkMode ? "brightness(0.9)" : "none" }}
                                            />
                                        ) : (
                                            <Icon className="w-8 h-8" style={{ color: skill.color }} />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                                    </div>
                                </div>

                                {/* Proficiency Badge */}
                                <div className="mt-3 text-xs font-medium opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top">
                                    <span
                                        className={`px-3 py-1 rounded-full ${skill.level >= 85
                                            ? "bg-primary/20 text-primary"
                                            : skill.level >= 75
                                                ? "bg-primary/10 text-primary/80"
                                                : "bg-foreground/10 text-foreground/70"
                                            }`}
                                    >
                                        {skill.level >= 85
                                            ? "⭐ Expert"
                                            : skill.level >= 75
                                                ? "✨ Intermediate"
                                                : "📚 Beginner"}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
