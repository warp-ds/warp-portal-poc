import { defineConfig } from 'vitepress';
import { presetDocs } from '@warp-ds/preset-docs';
import { presetWarp } from '@warp-ds/uno';
import uno from 'unocss/vite';
import { classes as componentClasses } from '@warp-ds/css/component-classes/classes';
import { supported as supportedClasses } from '../supported.js';
import markdownItContainer from 'markdown-it-container';


const base = '/warp-portal-poc';

const pdColorClasses = ['blue', 'cyan', 'fuchsia', 'indigo', 'pink', 'purple', 'sky', 'violet'].reduce(
  (colorResult, color) => [
    ...colorResult,
    ...['bg','border'].reduce(
      (partResult, part) => [
        ...partResult,
        [100,200,300,400,500,600,700,800,900].map((value) => `pd-${part}-${color}-${value}`)
      ],
      []
    )
  ],
  []
)

// Classes of documentation-related elements used within Warp component examples
// These classes are for styling our docs within the shadow DOM
// if you add a class somewhere in code, and it doesn't work, add that class here (no time to explain)
const docsClasses = [
  'aspect-square', 'aspect-1/1', 'aspect-2/1',
  'bg-[url(./20s-scientists.jpg)]',
  'bg-[url(./50s-scientists.jpg)]',
  'bg-[url(./50s-scientists_240.jpg)]',
  'bg-[url(./office-warping.png)]',
  'bg-[url(./repeatable.png)]',
  'bg-[--vp-c-bg-soft]', 'bg-[--w-s-color-border]', 'bg-[--tw-pink-fg]', 'bg-[--vp-c-bg-alt]',
  'bg-[--w-s-color-background-positive/40]', 'hover:bg-[--w-s-color-background-positive/100]', 'bg-[var(--w-black)/70]', 'hover:bg-[var(--w-black)/100]',
  'border-x-[--w-s-color-background-positive/60]', 'hover:border-x-[--w-s-color-background-positive/100]',
  'border-y-[var(--w-black)/40]', 'hover:border-y-[var(--w-black)/100]',
  'bottom-[26]',
  'before:content-[\'Before\']', 'after:content-[\'after\']', 'before:content-[\'Hello_World\']', 'before:content-[\'Hello\\_World\']', 'before:content-empty',
  'divide-y-[--w-white/60]',
  'sm:flex-row',
  'font-bold',
  'sm:gap-16', 'sm:gap-32',
  'sm:grid', 'sm:grid-cols-3', 'sm:grid-cols-2',
  'grid-cols-minmax-100px', 'grid-cols-[1fr_2.4rem_1fr_2.4rem_1fr]', 'grid-cols-[1fr_1fr_1fr]', 'grid-rows-[1fr_3fr_1fr]', 'grid-cols-[repeat(2,64px)]', 'md:grid-cols-4',
  'h-[7]', 'h-[200]', 'h-[240]', 'before:h-14',
  'before:inline-block',
  'sm:justify-around',
  'leading-[120]',
  '-m-1', '-m-[19]', '-ml-48', '-my-32', '-mx-8', '-mt-16', '-mb-48',
  'max-w-[300]', 'max-w-[344]', 'max-w-[400]',
  'outline-[--w-s-color-background-positive/40]', 'hover:outline-[--w-s-color-background-positive/100]', 'outline-[--w-black/40]', 'hover:outline-[--w-black/100]',
  'p-0!',
  'right-[26]',
  '-rotate-90',
  'rounded-tl-16',
  's-bg/10', 's-bg/20', 's-bg/50', 's-bg/60', 's-bg/80', 'hover:s-bg/100', 'hover:s-bg-hover', 'active:s-bg-active',
  's-bg-primary/10', 's-bg-primary/50', 'hover:s-bg-primary/100',
  's-bg-positive/10', 'md:s-bg-positive',
  's-bg-negative/10',
  's-bg-warning', 'hover:s-bg-warning-hover', 'active:s-bg-warning-active',
  's-bg-info', 'hover:s-bg-info-hover', 'active:s-bg-info-active',
  'selection:s-bg-positive',
  's-border/50', 'hover:s-border/100',
  's-border-t-primary/55', 'hover:s-border-t-primary/100',
  's-divide-x-primary', 's-divide-x-primary-subtle/60',
  's-icon/60', 'hover:s-icon/100', 's-icon-primary/60', 'hover:s-icon-primary/100',
  's-outline/50', 'hover:s-outline/100', 's-outline-focus/50', 'hover:s-outline-focus/100', 'hover:s-outline-hover', 'md:s-outline-positive',
  's-text/60', 'hover:s-text/100', 's-text-link/50', 'hover:s-text-link/100', 'text-[--w-s-color-text-positive/60]', 'hover:text-[--w-s-color-text-positive/100]', 'text-[var(--w-black)/50]', 'hover:text-[var(--w-black)/100]', 'hover:s-text-positive', 'md:s-text-positive',
  'marker:s-text-negative', 'marker:s-text-positive',
  'hover:scale-110', 'hover:scale-125',
  'skew-y-0', 'skew-x-8', 'skew-y-6', 'skew-y-12',
  '-space-x-24',
  'text-12', 'text-14',
  'text-right!',
  'text-[--vp-c-text-1]',
  'group-hover:translate-x-144', 'translate-x-32', 'translate-y-32', '-translate-y-32',
  'translate-x-1', '-translate-x-1', 'translate-y-1', '-translate-y-1', '-translate-y-[3]', '-translate-x-[3]', 'hover:-translate-y-1',
  'w-[200]', 'w-[300]', 'w-[400]', 'before:w-14',
  '[--w-prefix-width:56px]', '[--spinner-size:16px]', '[--spinner-size:32px]',
  'last:ml-auto!',
  'md:block', 'md:hidden', 'md:s-border-positive',
  'group-hover:visible',

  // presetDocs:
  'ex-box', 'ex-inner-box', 'ex-font', 'ex-font-dark', 'ex-pic-no',
  ...pdColorClasses,
  'pd-border-white', 'pd-border-white/50',
  'pd-bg-white', 'hover:pd-bg-indigo-600', 'hover:pd-bg-indigo-700',
  'before:pd-bg-pink-500',
  'pd-font-mono',
  'pd-shadow-sm', 'pd-shadow-md', 'pd-shadow-lg', 'pd-shadow-xl',
  'pd-text-sm', 'pd-text-xs',
  'pd-text-black', 'pd-text-white', 'pd-text-slate-500', 'pd-text-slate-800', 'pd-text-slate-900', 'pd-text-indigo-600',
  'before:pd-text-indigo-400', 'after:pd-text-indigo-400',
];

export default defineConfig({
  lang: 'en',
  title: 'Warp Design System',
  description: 'Documentation for Warp Design System technical platform',
  lastUpdated: false,
  cleanUrls: true,
  base: `${base}/`,
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    config: (md) => {
      md.use(markdownItContainer, 'image-block', {
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            return '<div class="styled-image-block">';
          } else {
            return '</div>';
          }
        }
      });
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => /(-example|-color-table|example-container|poc-1-div)$/.test(tag),
      },
    },
  },
  vite: {
    plugins: [
      uno({ presets: [presetWarp({ skipResets: true })] }),
      uno({
        presets: [presetWarp(), presetDocs()],
        mode: 'shadow-dom',
        shortcuts: [{
          'ex-font': 'pd-text-sm font-bold pd-font-mono pd-text-white',
          'ex-font-dark': 'pd-text-sm font-bold pd-font-mono pd-text-slate-900',
          'ex-box': 'ex-font p-24 rounded pd-shadow-xl flex items-center justify-center',
          'ex-inner-box': 'p-24 rounded pd-shadow-xl mx-auto pd-bg-white pd-text-slate-500 max-w-[300]',
          'ex-pic-no': 'absolute top-10 left-10 h-32 w-32 text-center pd-bg-white rounded-full pd-text-slate-800 leading-[32]',
        }],
        safelist: [...componentClasses, ...supportedClasses, ...docsClasses],
      }),
    ],
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: `${base}/warp-logo-small.svg`,
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/dba-dk.css',
      },
    ],
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
        href: 'https://assets.finn.no/pkg/@warp-ds/fonts/v1/tori-fi.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/finn-no.css',
      },
    ],
  ],
  themeConfig: {
    lastUpdated: true, // Add this to show the last updated timestamp
    editLink: {
      pattern: 'https://github.com/warp-ds/warp-portal-poc/edit/main/docs/src/:path' // Edit link for GitHub
    },
    search: { provider: 'local' },
    logo: '/warp-logo-small.svg',
    outline: 'deep',
    socialLinks: [{ icon: 'github', link: 'https://github.com/warp-ds' }],
    nav: [
      { text: 'Get started', link: '/get-started/' },
      { text: 'Foundations', link: '/foundations/' },
      { text: 'Components', link: '/components/' },
      { text: 'POCs', link: '/pocs' },
      {
        text: 'What\'s new',
        link: '/blog/',
        activeMatch: '/blog/$',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Collaborate',
          items: [
            { text: 'Request new component', link: '/collaborate/request-new-component/' },
            { text: 'Request component changes', link: '/collaborate/request-component-changes/' },
          ],
        },
        {
          text: 'Help',
          items: [
            { text: 'Support', link: '/help/support/' },
            { text: 'Report bugs/errors', link: '/help/report-bugs/' },
          ]
        }
      ],
      '/get-started/': [
        {
          text: 'Get started',
          items: [
            { text: 'Developers',
              collapsed: true,
              items: [
                {
                  text: 'Web',
                  collapsed: true,
                  items: [
                    { text: 'Setup', link: '/get-started/developers/web/' },
                    { text: 'Migrate from Fabric', link: '/get-started/developers/web/migrate-from-fabric/' },
                    { text: 'Building custom components with Warp', link: '/get-started/developers/web/custom-components/' },
                  ],
                },
                {
                  text: 'Android',
                  collapsed: true,
                  items: [
                    { text: 'Setup', link: '/get-started/developers/android/' },
                    { text: 'Building custom components with Warp', link: '/get-started/developers/android/custom-components/' },
                  ]
                },
                {
                  text: 'iOS',
                  collapsed: true,
                  items: [
                    { text: 'Setup', link: '/get-started/developers/ios/' },
                    { text: 'Building custom components with Warp', link: '/get-started/developers/ios/custom-components/' },
                  ]
                },
              ],
            },
            { text: 'Designers',
              collapsed: true,
              items: [
                { text: 'Warp in Figma', link: '/get-started/designers/warp-in-figma/' },
                { text: 'Designing for multibrand', link: '/get-started/designers/designing-for-multibrand/' },
                { text: 'Migrate from Fabric', link: '/get-started/designers/migrate-from-fabric/' },
                { text: 'Building custom components with Warp', link: '/get-started/designers/custom-components/' },
              ]
            },
            { text: 'FAQ', link: '/get-started/faq/' },
          ],
        },
      ],
      '/foundations/': [ {
        text: 'Foundations',
        items: [
          { text: 'Tokens', link: '/foundations/tokens/' },
          { text: 'Styling', collapsed: true, items: [
            { text: 'Native', link: '/foundations/styling/native/' },
            { text: 'Web', collapsed: true, items: [
                  {
                    text: 'Introduction',
                    collapsed: true,
                    items: [
                      { text: 'UnoCSS - what\'s that?', link: '/foundations/styling/web/unocss' },
                      { text: 'Class Variants', link: '/foundations/styling/web/class-variants' },
                      { text: 'Hover, Focus and other states', link: '/foundations/styling/web/states' },
                      { text: 'Helper classes', link: '/foundations/styling/web/helpers' },
                    ],
                  },
                  {
                    text: 'Layout',
                    collapsed: true,
                    items: [
                      { text: 'Aspect Ratio', link: '/foundations/styling/web/aspect-ratio' },
                      { text: 'Columns', link: '/foundations/styling/web/columns' },
                      { text: 'Break After', link: '/foundations/styling/web/break-after' },
                      { text: 'Break Before', link: '/foundations/styling/web/break-before' },
                      { text: 'Break Inside', link: '/foundations/styling/web/break-inside' },
                      { text: 'Box Sizing', link: '/foundations/styling/web/box-sizing' },
                      { text: 'Display', link: '/foundations/styling/web/display' },
                      { text: 'Floats', link: '/foundations/styling/web/floats' },
                      { text: 'Clear', link: '/foundations/styling/web/clear' },
                      { text: 'Isolate', link: '/foundations/styling/web/isolate' },
                      { text: 'Object Fit', link: '/foundations/styling/web/object-fit' },
                      { text: 'Object Position', link: '/foundations/styling/web/object-position' },
                      { text: 'Overflow', link: '/foundations/styling/web/overflow' },
                      { text: 'Overscroll', link: '/foundations/styling/web/overscroll' },
                      { text: 'Position', link: '/foundations/styling/web/position' },
                      {
                        text: 'Top / Right / Bottom / Left',
                        link: '/foundations/styling/web/top-right-bottom-left',
                      },
                      { text: 'Visibility', link: '/foundations/styling/web/visibility' },
                      { text: 'Z-Index', link: '/foundations/styling/web/z-index' },
                    ],
                  },
                  {
                    text: 'Sizing',
                    collapsed: true,
                    items: [
                      { text: 'Width', link: '/foundations/styling/web/width' },
                      { text: 'Min-Width', link: '/foundations/styling/web/min-width' },
                      { text: 'Max-Width', link: '/foundations/styling/web/max-width' },
                      { text: 'Height', link: '/foundations/styling/web/height' },
                      { text: 'Min-Height', link: '/foundations/styling/web/min-height' },
                      { text: 'Max-Height', link: '/foundations/styling/web/max-height' },
                    ],
                  },
                  {
                    text: 'Typography',
                    collapsed: true,
                    items: [
                      { text: 'Font Size', link: '/foundations/styling/web/font-size' },
                      { text: 'Font Style', link: '/foundations/styling/web/font-style' },
                      { text: 'Font Weight', link: '/foundations/styling/web/font-weight' },
                      {
                        text: 'Font Variant Numeric',
                        link: '/foundations/styling/web/font-variant-numeric',
                      },
                      { text: 'Line Height', link: '/foundations/styling/web/line-height' },
                      { text: 'List Style Position', link: '/foundations/styling/web/list-style-position' },
                      { text: 'List Style Type', link: '/foundations/styling/web/list-style-type' },
                      { text: 'Text Align', link: '/foundations/styling/web/text-align' },
                      { text: 'Text Color', link: '/foundations/styling/web/text-color' },
                      { text: 'Text Decoration', link: '/foundations/styling/web/text-decoration' },
                      { text: 'Text Transform', link: '/foundations/styling/web/text-transform' },
                      { text: 'Text Overflow', link: '/foundations/styling/web/text-overflow' },
                      { text: 'Vertical Align', link: '/foundations/styling/web/vertical-align' },
                      { text: 'Whitespace', link: '/foundations/styling/web/whitespace' },
                      { text: 'Word Break', link: '/foundations/styling/web/word-break' },
                      { text: 'Content', link: '/foundations/styling/web/content' },
                    ],
                  },
                  {
                    text: 'Iconography',
                    collapsed: true,
                    items: [
                      { text: 'Icon Color', link: 'foundations/foundations/styling/web/icon-color' },
                    ],
                  },
                  {
                    text: 'Backgrounds',
                    collapsed: true,
                    items: [
                      {
                        text: 'Background Attachment',
                        link: '/foundations/styling/web/background-attachment',
                      },
                      { text: 'Background Clip', link: '/foundations/styling/web/background-clip' },
                      { text: 'Background Color', link: '/foundations/styling/web/background-color' },
                      { text: 'Background Origin', link: '/foundations/styling/web/background-origin' },
                      {
                        text: 'Background Position',
                        link: '/foundations/styling/web/background-position',
                      },
                      { text: 'Background Repeat', link: '/foundations/styling/web/background-repeat' },
                      { text: 'Background Size', link: '/foundations/styling/web/background-size' },
                      { text: 'Background Image', link: '/foundations/styling/web/background-image' },
                    ],
                  },
                  {
                    text: 'Spacing',
                    collapsed: true,
                    items: [
                      { text: 'Padding', link: '/foundations/styling/web/padding' },
                      { text: 'Margin', link: '/foundations/styling/web/margin' },
                      { text: 'Space between', link: '/foundations/styling/web/space-between' },
                    ],
                  },
                  {
                    text: 'Flexbox & Grid',
                    collapsed: true,
                    items: [
                      { text: 'Flex', link: '/foundations/styling/web/flex' },
                      { text: 'Flex Basis', link: '/foundations/styling/web/flex-basis' },
                      { text: 'Flex Direction', link: '/foundations/styling/web/flex-direction' },
                      { text: 'Flex Grow', link: '/foundations/styling/web/flex-grow' },
                      { text: 'Flex Shrink', link: '/foundations/styling/web/flex-shrink' },
                      { text: 'Flex Wrap', link: '/foundations/styling/web/flex-wrap' },
                      { text: 'Order', link: '/foundations/styling/web/order' },
                      {
                        text: 'Grid Template Columns',
                        link: '/foundations/styling/web/grid-template-columns',
                      },
                      {
                        text: 'Grid Column Start / End',
                        link: '/foundations/styling/web/grid-column-se',
                      },
                      {
                        text: 'Grid Template Rows',
                        link: '/foundations/styling/web/grid-template-rows',
                      },
                      { text: 'Grid Row Start / End', link: '/foundations/styling/web/grid-row-se' },
                      { text: 'Grid Auto Flow', link: '/foundations/styling/web/grid-auto-flow' },
                      { text: 'Grid Auto Columns', link: '/foundations/styling/web/grid-auto-columns' },
                      { text: 'Grid Auto Rows', link: '/foundations/styling/web/grid-auto-rows' },
                      { text: 'Gap', link: '/foundations/styling/web/gap' },
                      { text: 'Justify Content', link: '/foundations/styling/web/justify-content' },
                      { text: 'Justify Items', link: '/foundations/styling/web/justify-items' },
                      { text: 'Justify Self', link: '/foundations/styling/web/justify-self' },
                      { text: 'Align Content', link: '/foundations/styling/web/align-content' },
                      { text: 'Align Items', link: '/foundations/styling/web/align-items' },
                      { text: 'Align Self', link: '/foundations/styling/web/align-self' },
                      { text: 'Place Content', link: '/foundations/styling/web/place-content' },
                      { text: 'Place Items', link: '/foundations/styling/web/place-items' },
                      { text: 'Place Self', link: '/foundations/styling/web/place-self' },
                    ],
                  },
                  {
                    text: 'Border',
                    collapsed: true,
                    items: [
                      { text: 'Border Radius', link: '/foundations/styling/web/border-radius' },
                      { text: 'Border Width', link: '/foundations/styling/web/border-width' },
                      { text: 'Border Color', link: '/foundations/styling/web/border-color' },
                      { text: 'Border Style', link: '/foundations/styling/web/border-style' },
                      { text: 'Divide Width', link: '/foundations/styling/web/divide-width' },
                      { text: 'Divide Color', link: '/foundations/styling/web/divide-color' },
                      { text: 'Divide Style', link: '/foundations/styling/web/divide-style' },
                      { text: 'Outline Style', link: '/foundations/styling/web/outline-style' },
                      { text: 'Outline Width', link: '/foundations/styling/web/outline-width' },
                      { text: 'Outline Color', link: '/foundations/styling/web/outline-color' },
                      { text: 'Outline Offset', link: '/foundations/styling/web/outline-offset' },
                    ],
                  },
                  {
                    text: 'Effects',
                    collapsed: true,
                    items: [
                      { text: 'Box Shadow', link: '/foundations/styling/web/box-shadow' },
                      { text: 'Drop Shadow', link: '/foundations/styling/web/drop-shadow' },
                      { text: 'Opacity', link: '/foundations/styling/web/opacity' },
                    ],
                  },        {
                    text: 'Filters',
                    collapsed: true,
                    items: [
                      { text: 'Backdrop Blur', link: '/foundations/styling/web/backdrop-blur' },
                    ],
                  },
                  {
                    text: 'Tables',
                    collapsed: true,
                    items: [
                      { text: 'Border Collapse', link: '/foundations/styling/web/border-collapse' },
                      { text: 'Border Spacing', link: '/foundations/styling/web/border-spacing' },
                      { text: 'Table Layout', link: '/foundations/styling/web/table-layout' },
                    ],
                  },
                  {
                    text: 'Transitions & Animation',
                    collapsed: true,
                    items: [
                      {
                        text: 'Transition Property',
                        link: '/foundations/styling/web/transition-property',
                      },
                      {
                        text: 'Transition Duration',
                        link: '/foundations/styling/web/transition-duration',
                      },
                      {
                        text: 'Transition Timing',
                        link: '/foundations/styling/web/transition-timing',
                      },
                      {
                        text: 'Transition Delay',
                        link: '/foundations/styling/web/transition-delay',
                      },
                      {
                        text: 'Animation',
                        link: '/foundations/styling/web/animation',
                      },
                    ],
                  },
                  {
                    text: 'Transforms',
                    collapsed: true,
                    items: [
                      { text: 'Scale', link: '/foundations/styling/web/scale' },
                      { text: 'Rotate', link: '/foundations/styling/web/rotate' },
                      { text: 'Translate', link: '/foundations/styling/web/translate' },
                      { text: 'Skew', link: '/foundations/styling/web/skew' },
                      { text: 'Transform Origin', link: '/foundations/styling/web/transform-origin' },
                    ],
                  },
                  {
                    text: 'Interactivity',
                    collapsed: true,
                    items: [
                      { text: 'Appearance', link: '/foundations/styling/web/appearance' },
                      { text: 'Caret', link: '/foundations/styling/web/caret' },
                      { text: 'Cursor', link: '/foundations/styling/web/cursor' },
                      { text: 'Pointer Events', link: '/foundations/styling/web/pointer-events' },
                      { text: 'Resize', link: '/foundations/styling/web/resize' },
                      { text: 'Scroll Behavior', link: '/foundations/styling/web/scroll-behavior' },
                      { text: 'Scroll Snap Align', link: '/foundations/styling/web/scroll-snap-align' },
                      { text: 'Scroll Snap Stop', link: '/foundations/styling/web/scroll-snap-stop' },
                      { text: 'Scroll Snap Type', link: '/foundations/styling/web/scroll-snap-type' },
                      { text: 'Touch Action', link: '/foundations/styling/web/touch-action' },
                      { text: 'User Select', link: '/foundations/styling/web/user-select' },
                      { text: 'Will Change', link: '/foundations/styling/web/will-change' },
                    ],
                  },
                  {
                    text: 'Accessibility',
                    collapsed: true,
                    items: [
                      { text: 'Screen Readers', link: '/foundations/styling/web/screen-readers' },
                    ],
                  },
            ]}
          ]},
          { text: 'Illustrations', link: '/foundations/illustrations/' },
          { text: 'Typography', link: '/foundations/typography/' },
          { text: 'Accessibility', link: '/foundations/accessibility/' },
          { text: 'Design Princples', link: '/foundations/design-principles/' },
          { text: 'Brands', link: '/foundations/brands/' },
          {
            text: 'Data visualisation',
            collapsed: true,
            items: [
              {
                text: 'Getting Started',
                link: '/foundations/data-visualization/getting-started/',
              },
              {
                text: 'Chart types',
                link: '/foundations/data-visualization/chart-types/',
              },
              {
                text: 'Colour Usage',
                link: '/foundations/data-visualization/colour-usage/',
              },
              {
                text: 'Success criteria',
                link: '/foundations/data-visualization/success-criteria/',
              },
            ],
          },
          { text: 'Elevation', link: '/foundations/elevation/' },
          { text: 'Dark mode', link: '/foundations/dark-mode/' },
          { text: 'Motion', link: '/foundations/motion/' },
        ]
      },
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Component Overview', link: '/components/' },
            { text: 'Alert', link: '/components/alert/' },
            { text: 'Attention', link: '/components/attention/' },
            { text: 'Avatar', link: '/components/avatar/' },
            { text: 'Badge', link: '/components/badge/' },
            { text: 'Box', link: '/components/box/' },
            { text: 'Breadcrumbs', link: '/components/breadcrumbs/' },
            { text: 'Broadcast', link: '/components/broadcast/' },
            { text: 'Button', link: '/components/buttons/' },
            { text: 'Button Group', link: '/components/buttongroup/' },
            { text: 'Card', link: '/components/card/' },
            { text: 'Checkbox', link: '/components/checkbox/' },
            { text: 'Combobox', link: '/components/combobox/' },
            { text: 'Expandable', link: '/components/expandable/' },
            { text: 'Icons', link: '/components/icons/' },
            { text: 'Modal', link: '/components/modal/' },
            { text: 'Pagination', link: '/components/pagination/' },
            { text: 'Pill', link: '/components/pill/' },
            { text: 'Radio', link: '/components/radio/' },
            { text: 'Radio Buttons', link: '/components/radiobuttons/' },
            { text: 'Select', link: '/components/select/' },
            { text: 'Slider', link: '/components/slider/' },
            { text: 'Spinner', link: '/components/spinner/' },
            { text: 'Steps', link: '/components/steps/' },
            { text: 'Switch', link: '/components/switch/' },
            { text: 'Tabs', link: '/components/tabs/' },
            { text: 'Text', link: '/components/text/' },
            { text: 'Text Area', link: '/components/textarea/' },
            { text: 'Text Field', link: '/components/textfield/' },
            { text: 'Toast', link: '/components/toast/' },
            { text: 'Utilities', link: '/components/utilities/' },
          ],
        },
      ],
      '/pocs/': [
        {
          text: 'POCs',
          items: [
            { text: 'Poc-1', link: '/pocs/poc-1' },
          ]
        }
      ],
    },
  },
});
