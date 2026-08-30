import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://eren22aspirant.github.io',
  base: '/Leviackermann_skills_practise',
  trailingSlash: 'always', // <-- Forces consistent subfolder index routing
  integrations: [react()],
});
