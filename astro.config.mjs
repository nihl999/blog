import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// import gruvboxTheme from "./gruvbox-dark-hard.json";

// https://astro.build/config
export default defineConfig({
  site: "https://nihl999.github.io",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "poimandres",
    },
  },
});
