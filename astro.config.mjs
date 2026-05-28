import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://henry-website.vercel.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
