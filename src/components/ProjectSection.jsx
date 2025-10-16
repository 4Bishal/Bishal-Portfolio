import { ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Confera",
        description:
            "Real-time video calling app with guest login, room creation, and screen sharing.",
        image: "/projects/confera.png",
        tags: ["MERN", "WebRTC", "Socket.IO", "Authentication"],
        demoUrl: "https://confera-08ud.onrender.com/",
        githubUrl: "https://github.com/4Bishal/Confera",
    },
    {
        id: 2,
        title: "Samva",
        description:
            "AI-powered chat application providing intelligent text responses like a smart companion.",
        image: "/projects/samva.png",
        tags: ["MERN", "React", "AI", "Node.js", "Express"],
        demoUrl: "https://samva.onrender.com",
        githubUrl: "https://github.com/4Bishal/Samva",
    },
    {
        id: 3,
        title: "FreelanceHub",
        description:
            "Connect freelancers and clients, browse projects, post jobs, and manage workflows efficiently.",
        image: "/projects/freelancehub.png",
        tags: ["MERN", "TailwindCSS", "Node.js", "MongoDB", "JWT"],
        demoUrl: "https://freelancehub-xqif.onrender.com/",
        githubUrl: "https://github.com/4Bishal/freelancehub",
    },
    {
        id: 4,
        title: "Awasly",
        description:
            "Property listing app inspired by Airbnb, supporting reviews, authentication, and MVC architecture.",
        image: "/projects/aawasly.png",
        tags: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
        demoUrl: "https://aawasly.onrender.com",
        githubUrl: "https://github.com/4Bishal/Awasly",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className="aspect-video overflow-hidden relative bg-muted">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="hidden md:flex absolute bottom-4 left-4 right-4 gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:bg-primary/90 transition-colors"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-card/95 backdrop-blur-sm text-foreground rounded-lg font-medium text-center hover:bg-card transition-colors"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Mobile buttons - always visible at bottom */}
                                <div className="flex md:hidden gap-3 mt-auto">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:bg-primary/90 transition-colors"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium text-center hover:bg-secondary/90 transition-colors"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/4Bishal"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
