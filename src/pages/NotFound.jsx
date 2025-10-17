import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        toast.error("Oops! The page you’re looking for doesn’t exist 😕", {
            iconTheme: {
                primary: "#ef4444", // Tailwind red-500
                secondary: "#ffffff",
            },
            style: {
                borderRadius: "12px",
                background: "#1f2937", // dark gray
                color: "#fff",
            },
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
            <h1 className="text-[5rem] md:text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 glitch">
                404
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mt-4 max-w-md">
                Oops! The page you’re looking for doesn’t exist or might have been moved.
            </p>
            <button
                onClick={() => navigate("/")}
                className="mt-8 px-6 py-3 text-base font-semibold rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 text-white shadow-lg transition-all duration-300"
            >
                Go Home
            </button>

            {/* Floating emoji animation */}
            <div className="absolute top-10 left-10 text-4xl animate-bounce">😅</div>
            <div className="absolute bottom-10 right-10 text-4xl animate-spin-slow">🚀</div>
        </div>
    );
};
