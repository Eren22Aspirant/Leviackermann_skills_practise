// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Replace 'your-github-username' and 'your-repo-name' with your actual GitHub details
  site: 'https://github.io',
  base: 'https://github.com/Eren22Aspirant/Leviackermann_skills_practise',
  integrations: [react()],
});
