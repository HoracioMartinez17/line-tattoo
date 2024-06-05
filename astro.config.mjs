import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import * as dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: "server",
  adapter: cloudflare()
});