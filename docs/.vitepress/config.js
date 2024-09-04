import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite';
import { presetWarp } from '@warp-ds/uno';

export default defineConfig({
  vite: {
    plugins: [
      UnoCSS({
        presets: [presetWarp({ skipResets: true })],
      }),
      UnoCSS({
        mode: 'shadow-dom',
        presets: [presetWarp({ skipResets: true })],
      }),
    ],
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('my-div'),
      },
    },
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/finn-no.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/css/v1/tokens/finn-no.css',
      },
    ],
  ],
  }
  )