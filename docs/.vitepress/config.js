import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite';
import { presetWarp } from '@warp-ds/uno';

export default defineConfig({
  srcDir: 'src',
  base: '/warp-portal-poc',
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
  themeConfig: {
    logo: '/warp-logo-small.svg',
    siteTitle: 'Warp Design System',
    nav: [
      { text: 'Get started', link: '/getstarted' },
      { text: 'Foundations', link: '/foundations' },
      { text: 'Components', link: '/components' },
      { text: 'NavLevels', link: '/navlevels' },
      { text: 'Temp', link: '/temp' },
    ],
    sidebar: {
      '/getstarted/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'About', link: '/getstarted/' },
            { text: 'One', link: '/getstarted/one' },
            { text: 'Two', link: '/getstarted/two' }
          ]
        }
      ],
      '/foundations/': [
        {
          text: 'Foundations',
          items: [
            { text: 'About', link: '/foundations/' },
            { text: 'One', link: '/foundations/one' },
            { text: 'Two', link: '/foundations/two' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'About', link: '/components/' },
            { text: 'One', link: '/components/one' },
            { text: 'Two', link: '/components/two' }
          ]
        }
      ],
      '/navlevels/': [
        {
          text: 'Top',
          collapsed: true,
          items: [
            {
              text: 'Top+1',
              collapsed: true,
              items: [
                {
                  text: 'top+2',
                  collapsed: true,
                  items: [
                    {
                      text: 'top+3',
                      collapsed: true,
                      items: [
                        {
                          text: 'top+4',
                          collapsed: true,
                          items: [
                            { text: 'One', link: '/navlevels/one' },
                            { text: 'Two', link: '/navlevels/two' }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            },
          ]
        }
      ],
      '/temp/': [
        {
          text: 'Temp',
          items: [
            { text: 'About Pocs', link: '/temp/' },
            { text: 'Poc-1', link: '/temp/poc-1' },
          ]
        }
      ]
    },
    lastUpdated: true, // Add this to show the last updated timestamp
    editLink: {
      pattern: 'https://github.com/warp-ds/warp-portal-poc/edit/main/docs/src/:path' // Edit link for GitHub
    }
  }
})