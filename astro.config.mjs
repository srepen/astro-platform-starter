// astro.config.mjs – updated for Netlify preview compatibility
// -----------------------------------------------------------
// Keeps your Tailwind, React integration, and Netlify adapter
// while adding Vite “allowedHosts” so dev‑server previews work.

import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Flag that’s always set inside Netlify build containers
const onNetlify = process.env.NETLIFY === 'true';

export default defineConfig({
  // ─── Vite settings ────────────────────────────────────────
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,                       // listen on 0.0.0.0
      allowedHosts: onNetlify ? 'all' : undefined
    },
    preview: {
      host: true,
      allowedHosts: onNetlify ? 'all' : undefined
    }
  },

  // ─── Astro integrations ──────────────────────────────────
  integrations: [react()],

  // ─── Deployment adapter ──────────────────────────────────
  adapter: netlify()
});
