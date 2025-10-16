import { Briefcase, Code, User, Brain } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    const cards = [
        {
            icon: Code,
            title: "Full Stack Development",
            text: "Building complete web applications using MERN stack, integrating front-end and back-end with APIs.",
        },
        {
            icon: User,
            title: "Front-end & UX Design",
            text: "Crafting responsive interfaces, improving user experience, and implementing intuitive designs for modern web apps.",
        },
        {
            icon: Briefcase,
            title: "Tools & Intermediate Skills",
            text: "Experienced with tools and technologies that support MERN stack development: API integration, cloud services, state management, and deployment.",
        },
        {
            icon: Brain,
            title: "Problem Solving & Java (DSA)",
            text: "Strong problem-solving mindset with hands-on experience in Java for Data Structures and Algorithms. Focused on writing optimized, efficient solutions and improving logical thinking for real-world software challenges.",
        },
    ];

    return (
        <section id="about" className="py-24 px-4 relative overflow-visible">
            <div className="container mx-auto max-w-5xl">
                {/* Section Title */}
                <motion.h2
                    className="text-4xl md:text-6xl font-bold text-foreground mb-5"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About <span className="text-primary">Me</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-semibold">
                            Full Stack Developer & MERN Enthusiast
                        </h3>

                        <p className="text-muted-foreground">
                            I am a Full Stack Developer specializing in MERN stack development.
                            I build dynamic, responsive, and scalable web applications by combining
                            front-end and back-end development with a focus on creating seamless user experiences.
                        </p>

                        <p className="text-muted-foreground">
                            While my knowledge spans multiple technologies and tools within full-stack development,
                            I’m constantly learning and improving my skills in UX design, API integration, cloud services,
                            and modern web development practices.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a
                                href="/BishalBhandariCV.pdf"
                                download="BishalBhandariCV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download Resume
                            </a>


                        </div>
                    </motion.div>

                    {/* Right Column - Skill Cards */}
                    <div className="grid grid-cols-1 gap-6 overflow-visible">
                        {cards.map((card, i) => (
                            <motion.div
                                key={i}
                                className="gradient-border p-6 rounded-xl bg-background/40 backdrop-blur-sm border border-primary/20 hover:border-primary/60 shadow-md hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <card.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">{card.title}</h4>
                                        <p className="text-muted-foreground">{card.text}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
