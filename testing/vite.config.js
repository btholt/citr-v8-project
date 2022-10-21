import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  test: {
    environment: "happy-dom",
    setupFiles: ["./setupVitest.js"],
  },
});
