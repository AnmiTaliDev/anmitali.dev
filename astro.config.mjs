import { defineConfig, fontProviders } from 'astro/config';
import { iconNames } from './src/data/icons.ts';

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Google Sans Flex',
      cssVariable: '--font-text',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Google Sans Code',
      cssVariable: '--font-code',
      weights: ['400'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
    {
      provider: fontProviders.googleicons(),
      name: 'Material Symbols Rounded',
      cssVariable: '--font-icons',
      weights: ['400'],
      styles: ['normal'],
      fallbacks: [],
      options: {
        experimental: {
          glyphs: [...iconNames],
        },
      },
    },
  ],
});
