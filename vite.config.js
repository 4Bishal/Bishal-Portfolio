import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Exact repo name (case-sensitive) for GitHub Pages
const repoName = "Bishal-Portfolio";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Only use /Portfolio/ in production, localhost stays clean
  base: mode === "production" ? `/${repoName}/` : "/",
}));
