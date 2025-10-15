import { ArrowUp } from "lucide-react";
import { Github } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { BsInstagram } from "react-icons/bs";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card border-t border-border relative overflow-hidden">
            {/* Top glowing line */}
            <div className="absolute -top-6 left-0 w-full h-2 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 blur-xl rounded-full pointer-events-none animate-glow-move" />

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                {/* Left: copyright */}
                <p className="text-sm text-muted-foreground text-center md:text-left">
                    &copy; {new Date().getFullYear()} Pedrotech.co. All rights reserved.
                </p>

                {/* Center: social icons */}
                <div className="flex space-x-4">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/bishal-bhandari-a63b8926a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full text-primary bg-primary/10 hover:bg-primary/20 shadow-md hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110 animate-pulse-slow relative overflow-hidden"
                    >
                        <LiaLinkedin size={20} />
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-30 blur-xl animate-glow-move rounded-full pointer-events-none"></span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/4Bishal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full text-primary bg-primary/10 hover:bg-primary/20 shadow-md hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110 animate-pulse-slow relative overflow-hidden"
                    >
                        <Github size={20} />
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 opacity-30 blur-xl animate-glow-move rounded-full pointer-events-none"></span>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/bishalbhandari949/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full text-primary bg-primary/10 hover:bg-primary/20 shadow-md hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110 animate-pulse-slow relative overflow-hidden"
                    >
                        <BsInstagram size={20} />
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 opacity-30 blur-xl animate-glow-move rounded-full pointer-events-none"></span>
                    </a>
                </div>

                {/* Right: back-to-top button */}
                <a
                    href="#hero"
                    className="flex items-center justify-center p-4 rounded-full bg-primary/10 hover:bg-primary/20 text-primary shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 animate-pulse-slow relative overflow-hidden"
                >
                    <ArrowUp size={24} />
                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 opacity-30 blur-xl animate-glow-move rounded-full pointer-events-none"></span>
                </a>
            </div>

            {/* Bottom glowing line */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-xl rounded-full pointer-events-none animate-glow-move" />

            {/* Tailwind custom animations */}
            <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        @keyframes glow-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }

        .animate-glow-move {
          animation: glow-move 5s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
        </footer>
    );
};
