import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import critters from "astro-critters";

// https://astro.build/config
import purgecss from "astro-purgecss";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]'
        }
      }
    }
  },
  integrations: [astroImageTools, tailwind(), critters(), purgecss() /* TODO compress() wieder einfügen */, prefetch()]
});