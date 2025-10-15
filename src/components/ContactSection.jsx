import * as React from "react";
import { Github, Mail, MapPin, Phone, Send } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { BsInstagram } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";


export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAIL_PUBLIC_ID
            );
            toast.success("Email Sent", {
                duration: 4000,
                position: "top-right",
            });

            formRef.current.reset();
        } catch (error) {
            toast.error("Something went wrong. Please try again later.", {
                duration: 4000,
                position: "top-right",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:bishal30112006@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        bishal30112006@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+9979818456658"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +997 9818456658
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <span className="text-muted-foreground hover:text-primary transition-colors">
                                        Kathmandu, Nepal
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
                            <div className="flex space-x-6 justify-center">
                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/bishal-bhandari-a63b8926a/"
                                    target="_blank"
                                    className="text-blue-700 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transform hover:scale-110 transition duration-300 hover:shadow-[0_0_15px_#0a66c2] dark:hover:shadow-[0_0_15px_#0a66c2] rounded-full p-1"
                                >
                                    <LiaLinkedin size={30} />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/bishalbhandari949/"
                                    target="_blank"
                                    className="text-pink-500 dark:text-pink-400 hover:text-pink-400 dark:hover:text-pink-300 transform hover:scale-110 transition duration-300 hover:shadow-[0_0_15px_#E1306C] dark:hover:shadow-[0_0_15px_#E1306C] rounded-full p-1"
                                >
                                    <BsInstagram size={30} />
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/4Bishal"
                                    target="_blank"
                                    className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transform hover:scale-110 transition duration-300 hover:shadow-[0_0_15px_#333] dark:hover:shadow-[0_0_15px_#fff] rounded-full p-1"
                                >
                                    <Github size={30} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Bishal Bhandari..."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="example@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {isSubmitting && (
                                    <span className="loader mr-2 border-t-2 border-primary w-4 h-4 rounded-full animate-spin" />
                                )}
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Loader CSS */}
            <style jsx>{`
        .loader {
          border-right-color: transparent;
          border-bottom-color: transparent;
        }
      `}</style>
        </section>
    );
};
