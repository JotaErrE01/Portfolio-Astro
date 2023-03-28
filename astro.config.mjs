import { defineConfig } from 'astro/config';
// import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
// import remarkToc from 'remark-toc';
// import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

// https://astro.build/config
// import node from "@astrojs/node";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://jotaerre.dev',
  integrations: [react(), tailwind(), mdx(), sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date('2023-03-28'),
  })],
  output: 'static',
  // adapter: node({
  //   mode: 'standalone'
  // }),
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'monokai',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      // langs: ['js', 'jsx', 'ts', 'tsx', 'css', 'html', 'json', 'md', 'astro'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: false
    },
    syntaxHighlight: 'shiki'
  }
});