// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
<<<<<<< cloudflare/workers-autoconfig
  integrations: [icon()],

=======
  site: 'https://luissagnay.dev',
  integrations: [icon(), sitemap()],
>>>>>>> main
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});