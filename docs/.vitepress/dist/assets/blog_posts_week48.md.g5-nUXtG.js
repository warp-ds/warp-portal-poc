import{_ as e,o as r,c as a,V as t}from"./chunks/framework.DS0mASGI.js";const b=JSON.parse('{"title":"WARP releases","description":"","frontmatter":{"title":"WARP releases","date":"2023-12-01T00:00:00.000Z"},"headers":[],"relativePath":"blog/posts/week48.md","filePath":"blog/posts/week48.md"}'),s={name:"blog/posts/week48.md"},o=t('<p>We have now released new versions of our Warp packages:</p><ul><li><a href="https://www.npmjs.com/package/@warp-ds/elements" target="_blank" rel="noreferrer">@warp-ds/elements: 1.2.1</a></li><li><a href="https://www.npmjs.com/package/@warp-ds/react" target="_blank" rel="noreferrer">@warp-ds/react: 1.2.1</a></li><li><a href="https://www.npmjs.com/package/@warp-ds/vue" target="_blank" rel="noreferrer">@warp-ds/vue: 1.2.2</a></li><li><a href="https://www.npmjs.com/package/@warp-ds/uno" target="_blank" rel="noreferrer">@warp-ds/uno: 1.3.0</a></li></ul><hr><h1 id="week-48" tabindex="-1">Week 48 <a class="header-anchor" href="#week-48" aria-label="Permalink to &quot;Week 48&quot;">​</a></h1><p>These past few weeks we have worked hard to fix reported issues, as well as bring you new stuff in our Warp packages. Below is an overview of the latest changes.</p><h2 id="warp-ds-elements-1-2-1" tabindex="-1">@warp-ds/elements@1.2.1 <a class="header-anchor" href="#warp-ds-elements-1-2-1" aria-label="Permalink to &quot;@warp-ds/elements@1.2.1&quot;">​</a></h2><h3 id="bug-fixes" tabindex="-1">Bug Fixes <a class="header-anchor" href="#bug-fixes" aria-label="Permalink to &quot;Bug Fixes&quot;">​</a></h3><ul><li><strong>textfield:</strong> allow styling input&#39;s left padding when prefix is wider than 40px (<a href="https://github.com/warp-ds/elements/issues/116" target="_blank" rel="noreferrer">#116</a>) (<a href="https://github.com/warp-ds/elements/commit/ac890c79d877a851fe536436aa598ef5e18308ec" target="_blank" rel="noreferrer">ac890c7</a>)</li><li>publish individual web components to eik (<a href="https://github.com/warp-ds/elements/issues/111" target="_blank" rel="noreferrer">#111</a>) (<a href="https://github.com/warp-ds/elements/commit/09152215ec3ccf40643403c2d64edb6b9f76ea89" target="_blank" rel="noreferrer">0915221</a>)</li><li><strong>expandable</strong> use Warp chevron icons instead of inline svgs (<a href="https://github.com/warp-ds/elements/issues/107" target="_blank" rel="noreferrer">#107</a>) (<a href="https://github.com/warp-ds/elements/commit/87faf60be3ac5d5460b04add6f5b408844b31bd7" target="_blank" rel="noreferrer">87faf60</a>)</li><li><strong>expandable:</strong> fix long titles overflowing chevron</li><li><strong>expandable</strong> only show focus indicator in on focus-visible</li><li><strong>tabs:</strong> left align all tabs instead of stretch</li></ul><p><a href="https://github.com/warp-ds/elements/releases/tag/v1.2.1" target="_blank" rel="noreferrer">Changelog</a></p><h2 id="warp-ds-react-1-2-1" tabindex="-1">@warp-ds/react@1.2.1 <a class="header-anchor" href="#warp-ds-react-1-2-1" aria-label="Permalink to &quot;@warp-ds/react@1.2.1&quot;">​</a></h2><h3 id="bug-fixes-1" tabindex="-1">Bug Fixes <a class="header-anchor" href="#bug-fixes-1" aria-label="Permalink to &quot;Bug Fixes&quot;">​</a></h3><ul><li><strong>combobox:</strong> don&#39;t open on modifier key press and fix aria-expanded (<a href="https://github.com/warp-ds/react/issues/152" target="_blank" rel="noreferrer">#152</a>) (<a href="https://github.com/warp-ds/react/commit/71e42f6ddd224c9b76cbf8d4db21fecf33b4e91e" target="_blank" rel="noreferrer">71e42f6</a>)</li><li><strong>textfield:</strong> allow styling input&#39;s left padding when prefix is wider than 40px (<a href="https://github.com/warp-ds/react/issues/173" target="_blank" rel="noreferrer">#173</a>) (<a href="https://github.com/warp-ds/react/commit/89e5a278edf5095e80d5aca24f0c4aa5d3c9fd9e" target="_blank" rel="noreferrer">89e5a27</a>)</li><li><strong>textfield:</strong> render prefix before input (<a href="https://github.com/warp-ds/react/issues/161" target="_blank" rel="noreferrer">#161</a>) (<a href="https://github.com/warp-ds/react/commit/2017cff7a67be1b0cac958cf0e85907591d8e3e8" target="_blank" rel="noreferrer">2017cff</a>)</li><li>Import icons in the correct way (<a href="https://github.com/warp-ds/react/issues/169" target="_blank" rel="noreferrer">#169</a>) (<a href="https://github.com/warp-ds/react/commit/f279db9165bfb673dcf55507e3e3880618cc23b3" target="_blank" rel="noreferrer">f279db9</a>)</li><li><strong>expandable:</strong> fix long titles overflowing chevron</li><li><strong>expandable</strong> only show focus indicator in on focus-visible</li><li><strong>tabs:</strong> left align all tabs instead of stretch</li><li><strong>modal</strong> set z-index of Modal backdrop to 30</li></ul><p><a href="https://github.com/warp-ds/react/releases/tag/v1.2.1" target="_blank" rel="noreferrer">Changelog</a></p><h2 id="warp-ds-vue-1-2-2" tabindex="-1">@warp-ds/vue@1.2.2 <a class="header-anchor" href="#warp-ds-vue-1-2-2" aria-label="Permalink to &quot;@warp-ds/vue@1.2.2&quot;">​</a></h2><h3 id="bug-fixes-2" tabindex="-1">Bug Fixes <a class="header-anchor" href="#bug-fixes-2" aria-label="Permalink to &quot;Bug Fixes&quot;">​</a></h3><ul><li><strong>Slider</strong> misc a11y fixes (<a href="https://github.com/warp-ds/vue/issues/108" target="_blank" rel="noreferrer">#108</a>) (<a href="https://github.com/warp-ds/vue/commit/371617868f24def93d49ffc4a7eb01b48276c134" target="_blank" rel="noreferrer">3716178</a>)</li><li><strong>textfield:</strong> allow styling input&#39;s left padding if prefix is wider than 40px (<a href="https://github.com/warp-ds/vue/issues/115" target="_blank" rel="noreferrer">#115</a>) (<a href="https://github.com/warp-ds/vue/commit/0799864895a8909c9aa80b21519a47a429a473db" target="_blank" rel="noreferrer">0799864</a>)</li><li><strong>textfield</strong> reintroduce placeholder (<a href="https://github.com/warp-ds/vue/issues/119" target="_blank" rel="noreferrer">#119</a>) (<a href="https://github.com/warp-ds/vue/commit/9783d3ab232eab5ab341132903e81364623a69f1" target="_blank" rel="noreferrer">9783d3a</a>)</li><li>use new icons export to drop bundle size (<a href="https://github.com/warp-ds/vue/issues/110" target="_blank" rel="noreferrer">#110</a>) (<a href="https://github.com/warp-ds/vue/commit/9d95858ee60fc691b4493c67f6f6cddd3bd035a5" target="_blank" rel="noreferrer">9d95858</a>)</li><li><strong>expandable:</strong> fix long titles overflowing chevron</li><li><strong>expandable</strong> only show focus indicator in on focus-visible</li><li><strong>tabs:</strong> left align all tabs instead of stretch</li><li><strong>modal</strong> set z-index of Modal backdrop to 30</li></ul><p><a href="https://github.com/warp-ds/vue/releases/tag/v1.2.2" target="_blank" rel="noreferrer">Changelog</a></p><h2 id="warp-ds-uno-1-3-0" tabindex="-1">@warp-ds/uno 1.3.0 <a class="header-anchor" href="#warp-ds-uno-1-3-0" aria-label="Permalink to &quot;@warp-ds/uno 1.3.0&quot;">​</a></h2><h3 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h3><ul><li><strong>rules:</strong> add support for outline color classes (<a href="https://github.com/warp-ds/drive/issues/173" target="_blank" rel="noreferrer">#173</a>) (<a href="https://github.com/warp-ds/drive/commit/da3aec9789d425cbea2c3dbb399d85c64344dff3" target="_blank" rel="noreferrer">da3aec9</a>)</li></ul><p><a href="https://github.com/warp-ds/drive/releases/tag/v1.3.0" target="_blank" rel="noreferrer">Changelog</a></p>',21),l=[o];function i(n,d,h,f,c,p){return r(),a("div",null,l)}const u=e(s,[["render",i]]);export{b as __pageData,u as default};
