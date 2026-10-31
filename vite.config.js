import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // INLINE_ASSETS=1 inlines fonts and icons into the bundle (used for the single-file preview).
    assetsInlineLimit: process.env.INLINE_ASSETS ? 100_000_000 : 4096,
  },
});
