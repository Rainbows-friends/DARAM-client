import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: [
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@layout", replacement: "/src/layout" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@api", replacement: "/src/api" },
      { find: "@data", replacement: "/src/data" },
      { find: "@contexts", replacement: "/src/contexts" },
      { find: "@utils", replacement: "/src/utils" },
    ],
  },
});
