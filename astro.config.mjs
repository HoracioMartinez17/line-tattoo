import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import preact from '@astrojs/preact';



// https://astro.build/config
export default defineConfig({
  integrations: [preact({
    compat: true
  })],
  site: 'https://linetattooheilbronn.de',
  output: "server",
  adapter: cloudflare()
});