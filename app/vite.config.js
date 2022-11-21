import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import jsconfigPaths from "vite-jsconfig-paths";


export default defineConfig({
  root:"./",
  plugins: [react(),jsconfigPaths()]
});
