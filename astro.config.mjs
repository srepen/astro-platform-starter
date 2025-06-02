// astro.config.mjs – always allow hosts in dev/preview
// -----------------------------------------------------
// Use this if Netlify’s dev‑server previews STILL show
// the “Blocked request … not allowed” error. It removes
// the `onNetlify` gate and just lets Vite accept all
// Host headers whenever the dev or preview server runs.

import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,          // listen on 0.0.0.0 (required in container)
      allowedHosts: 'all'  // accept any Host header
    },
    preview: {
      host: true,
      allowedHosts: 'all'
    }
  },

  integrations: [react()],
  adapter: netlify()
});
