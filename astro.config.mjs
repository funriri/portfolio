import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ site: 'https://funriri.github.io', base: '/portfolio', devToolbar: { enabled: false }, vite: { plugins: [tailwindcss()] } });
