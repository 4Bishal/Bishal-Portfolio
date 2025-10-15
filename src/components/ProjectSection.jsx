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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transition-transform duration-300 hover:scale-105"
                        >
                            <div className="h-48 overflow-hidden relative flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-32 object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 bg-primary text-white rounded font-medium hover:scale-105 transition-transform duration-300"
                                    >
                                        Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 bg-gray-800 text-white rounded font-medium hover:scale-105 transition-transform duration-300"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                                <p className="text-sm text-muted-foreground">{project.description}</p>
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
