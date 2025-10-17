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

function SkillCard({ skill, Icon, supportsHover }) {
    const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg) scale(1)");

    const handleMouseMove = (e) => {
        if (!supportsHover) return;

        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 8;
        const rotateY = ((x - centerX) / centerX) * -8;

        setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
    };

    const handleMouseLeave = () => {
        if (!supportsHover) return;
        setTransform("rotateX(0deg) rotateY(0deg) scale(1)");
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={supportsHover ? {
                transform,
                transition: 'transform 0.1s ease-out',
            } : {}}
            className={`group relative bg-card rounded-2xl p-5 sm:p-6 border border-border shadow-md active:scale-[0.98] transition-all duration-300 ${supportsHover ? "hover:border-primary/50 cursor-pointer" : ""
                }`}
        >
            <div className="relative flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 bg-card dark:bg-card-dark shrink-0">
                    {skill.isCustom || typeof Icon === "string" ? (
                        <img
                            src={Icon}
                            alt={skill.name}
                            className="w-7 h-7 sm:w-8 sm:h-8"
                        />
                    ) : (
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: skill.color }} />
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground truncate">
                        {skill.name}
                    </h3>
                </div>
            </div>

            {/* Proficiency Badge */}
            <div
                className={`mt-3 text-xs font-medium transition-all duration-300 origin-top ${supportsHover
                    ? "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                    : "opacity-100 scale-100"
                    }`}
            >
                <span
                    className={`inline-block px-3 py-1.5 rounded-full ${skill.level >= 85
                        ? "bg-primary/20 text-primary"
                        : skill.level >= 75
                            ? "bg-primary/10 text-primary/80"
                            : "bg-foreground/10 text-foreground/70"
                        }`}
                >
                    {skill.level >= 85 ? "⭐ Expert" : skill.level >= 75 ? "✨ Intermediate" : "📚 Beginner"}
                </span>
            </div>
        </div>
    );
}

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("Frontend");
    const [supportsHover, setSupportsHover] = useState(false);
    const categories = Object.keys(categoryInfo);
    const filteredSkills = skills.filter((s) => s.category === activeCategory);

    // Detect if device supports hover
    useEffect(() => {
        const checkHover = () => {
            const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
            setSupportsHover(hasHover);
        };

        checkHover();
        window.addEventListener('resize', checkHover);
        return () => window.removeEventListener('resize', checkHover);
    }, []);

    return (
        <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-4">
                        Skills & <span className="text-primary">Expertise</span>
                    </h2>
                    <p className="text-foreground/70 text-base sm:text-lg px-4">
                        Crafting digital experiences with cutting-edge technologies
                    </p>
                </div>

                {/* Category Navigation */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2">
                    {categories.map((cat) => {
                        const Icon = categoryInfo[cat].icon;
                        const isActive = activeCategory === cat;
                        const count = skills.filter((s) => s.category === cat).length;

                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`relative px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 cursor-pointer active:scale-95 ${isActive
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-card text-foreground border border-border hover:border-primary/50"
                                    }`}
                            >
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="text-sm sm:text-base">{cat}</span>
                                </div>

                                {/* Count badge */}
                                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center bg-card dark:bg-card-dark shadow-md border border-border">
                                    <span className="text-xs font-semibold text-foreground">{count}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Category Description */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <p className="text-foreground/60 text-base sm:text-lg px-4">
                        {categoryInfo[activeCategory].desc}
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {filteredSkills.map((skill, idx) => {
                        const Icon = skill.icon;
                        return (
                            <SkillCard
                                key={idx}
                                skill={skill}
                                Icon={Icon}
                                supportsHover={supportsHover}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};