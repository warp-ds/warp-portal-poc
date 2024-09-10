import{_ as s,o as i,c as a,V as e}from"./chunks/framework.DS0mASGI.js";const u=JSON.parse('{"title":"Migrating from Fabric","description":"","frontmatter":{},"headers":[],"relativePath":"migration/developers/index.md","filePath":"migration/developers/index.md"}'),t={name:"migration/developers/index.md"},n=e(`<h1 id="migrating-from-fabric" tabindex="-1">Migrating from Fabric <a class="header-anchor" href="#migrating-from-fabric" aria-label="Permalink to &quot;Migrating from Fabric&quot;">​</a></h1><h2 id="css-changes" tabindex="-1">CSS changes <a class="header-anchor" href="#css-changes" aria-label="Permalink to &quot;CSS changes&quot;">​</a></h2><p>While Warp maintains as much backward-compatibility as possible from Fabric, some breaking changes were necessary or justified.</p><h3 id="before-getting-started" tabindex="-1">Before getting started <a class="header-anchor" href="#before-getting-started" aria-label="Permalink to &quot;Before getting started&quot;">​</a></h3><p>Before migrating to Warp, this may affect or break the styling for other teams that exists on the same page as your project. <strong>Make sure to communicate and align with affected teams before starting the migration process.</strong></p><hr><h3 id="how-to-migrate" tabindex="-1">How to migrate <a class="header-anchor" href="#how-to-migrate" aria-label="Permalink to &quot;How to migrate&quot;">​</a></h3><ol><li>Remove Fabric as a dependency from your project.</li><li>Remove any mentions of Fabric, e.g. <code>fabric.css</code>.</li><li>Change the prefixes <code>f-</code> to <code>w-</code> for your component names. The icons should still use the <code>f-</code> prefix. Use the <a href="https://github.com/warp-ds/preset-migrate" target="_blank" rel="noreferrer">migration plugin</a> to help with this (see further down this page for instructions on using the plugin).</li><li>Make sure to install Warp to your project. Follow the instructions on <a href="/tech-docs/getting-started/developers/">getting started page</a>.</li><li>If using external classes in Warp components, be aware of potential conflicts with classes applied to the component itself. These classes share CSS specificity, and precedence is determined by order. For instance, in React components, the &#39;winning&#39; class is based on the @warp-ds/uno rule sequence, which could differ from Fabric&#39;s. Adding &#39;important&#39; to your classes (e.g., class=&#39;flex!&#39;) may be necessary.</li></ol><p>Don&#39;t include Fabric and Warp in the same context, instead use either one of them to avoid conflicts, overlapping styles and unintended visual inconsistencies. If it is necessary to include both libraries, it is recommended to encapsulate one of them within a shadow DOM to prevent conflicts and ensure proper isolation.</p><h3 id="icons" tabindex="-1">Icons <a class="header-anchor" href="#icons" aria-label="Permalink to &quot;Icons&quot;">​</a></h3><p>Warp now supports icons, and it is no longer necessary to continue importing the icons from Fabric. See further information and icons usage on our <a href="https://warp-ds.github.io/tech-docs/components/icons/" target="_blank" rel="noreferrer">icons page</a>.</p><h3 id="colours" tabindex="-1">Colours <a class="header-anchor" href="#colours" aria-label="Permalink to &quot;Colours&quot;">​</a></h3><p>Warp utilises a system of coloring border, text, background and icons using semantic colour tokens. You will need to manually find the most suitable semantic class (e.g. s-bg-primary) to replace the Fabric colour classes which sets static colours (e.g. blue-600). To find possible replacements refer to our <a href="https://warp-ds.github.io/colour-tokens-overview/" target="_blank" rel="noreferrer">Colours in WARP</a> page.</p><h3 id="migration-plugin" tabindex="-1">Migration plugin <a class="header-anchor" href="#migration-plugin" aria-label="Permalink to &quot;Migration plugin&quot;">​</a></h3><p>The migration plugin is available to use to detect all deprecated CSS classes and provide warnings with useful hints.</p><h4 id="install-the-plugin" tabindex="-1">Install the plugin <a class="header-anchor" href="#install-the-plugin" aria-label="Permalink to &quot;Install the plugin&quot;">​</a></h4><div class="info custom-block"><p class="custom-block-title">Reminder</p><p>Do not forget to uninstall the plugin once the migration is complete.</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install @warp-ds/preset-migrate --save-dev</span></span></code></pre></div><h4 id="use-the-plugin-in-your-uno-config" tabindex="-1">Use the plugin in your Uno config <a class="header-anchor" href="#use-the-plugin-in-your-uno-config" aria-label="Permalink to &quot;Use the plugin in your Uno config&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;unocss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { presetWarp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@warp-ds/uno&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { presetMigrate } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@warp-ds/preset-migrate&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  presets: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">presetMigrate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">presetWarp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h4 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h4><p>The output provides a description of the necessary changes or removals required when migrating from Fabric to Warp. The process requires to be done manually, so make sure that these modifications are applied to all relevant class names and component names.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">REPLACED</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] flex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">shrink </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> use shrink</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">REPLACED</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] flex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">grow </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> use grow</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">REPLACED</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] last</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:mb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> use </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">last</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:mb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">REMOVED</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] input </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> use Warp button component instead</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DEPRECATED</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">background</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">primary</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> use </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;s-color-background-primary&#39;</span></span></code></pre></div><p>Look in the <a href="https://warp-ds.github.io/css-docs/" target="_blank" rel="noreferrer">CSS docs</a> to find the correct class names, and in the <a href="https://warp-ds.github.io/tech-docs" target="_blank" rel="noreferrer">Tech docs</a> for the components.</p><h2 id="component-changes" tabindex="-1">Component changes <a class="header-anchor" href="#component-changes" aria-label="Permalink to &quot;Component changes&quot;">​</a></h2><h3 id="validation-messages" tabindex="-1">Validation messages <a class="header-anchor" href="#validation-messages" aria-label="Permalink to &quot;Validation messages&quot;">​</a></h3><p>In Fabric, both hints and errors would be displayed at the same time, and were concatenated with a <code>,</code>.</p><p>For example, when the hint was &quot;Please fill out your 11-digit SSN&quot;; and the error was &quot;This field must be filled out&quot;.</p><blockquote><p>This field must be filled out, Please fill out your 11-digit SSN</p></blockquote><p>This was suboptimal because it required managing of capitalization, and also messages could become quite long and at times unclear to the user.</p><p>In Warp, errors will show when the field is invalid, otherwise the hint will show. This means your errors may need editing to ensure they are clear to the user.</p><p>Using the previous example&#39;s error as an example, it should be rewritten (f.ex) as</p><blockquote><p>This field must be filled out with your 11-digit SSN</p></blockquote><p>and the hint can remain the same.</p><h2 id="colors-in-warp" tabindex="-1">Colors in Warp <a class="header-anchor" href="#colors-in-warp" aria-label="Permalink to &quot;Colors in Warp&quot;">​</a></h2><p>In Warp Design System we are changing the whole concept of working with colors. We are no longer picking colors from a palette (like <code>text-blue-600</code>), but instead we use colors based on their purpose (like <code>text-primary</code>). This is something we do because we need to support theming/dark mode.</p>`,36),r=[n];function o(l,h,p,d,k,c){return i(),a("div",null,r)}const m=s(t,[["render",o]]);export{u as __pageData,m as default};
