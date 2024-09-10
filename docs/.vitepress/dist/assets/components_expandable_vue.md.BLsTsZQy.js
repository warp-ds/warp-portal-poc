import{_ as a,G as i,o as e,c as t,J as n,V as l}from"./chunks/framework.DS0mASGI.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/expandable/vue.md","filePath":"components/expandable/vue.md"}'),p={name:"components/expandable/vue.md"},h=l(`<h3 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h3><blockquote><p>Use in entire app</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Expandable } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@warp-ds/vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Expandable);</span></span></code></pre></div><blockquote><p>Use in one component and special imports</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { wExpandable, wExpandTransition, wWillExpand } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@warp-ds/vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">w-expandable</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I am expandable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;p&gt;Hello there I am some informative content&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">w-expandable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="visual-options" tabindex="-1">Visual options <a class="header-anchor" href="#visual-options" aria-label="Permalink to &quot;Visual options&quot;">​</a></h3><h4 id="default" tabindex="-1">Default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;Default&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">w-expandable</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I am expandable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;p&gt;Hello there I am some informative content&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">w-expandable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="expandable-box" tabindex="-1">Expandable box <a class="header-anchor" href="#expandable-box" aria-label="Permalink to &quot;Expandable box&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">w-expandable</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I am expandable&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;p&gt;Hello there I am some informative content&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">w-expandable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="animation" tabindex="-1">Animation <a class="header-anchor" href="#animation" aria-label="Permalink to &quot;Animation&quot;">​</a></h3><h4 id="you-should-only-use-this-feature-under-careful-supervision-of-your-friendly-local-uxer" tabindex="-1">You should only use this feature under careful supervision of your friendly local UXer. <a class="header-anchor" href="#you-should-only-use-this-feature-under-careful-supervision-of-your-friendly-local-uxer" aria-label="Permalink to &quot;You should only use this feature under careful supervision of your friendly local UXer.&quot;">​</a></h4><p>The w-expandable component can be animated using the animated prop.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">w-expandable</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> animated</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I am expandable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;p&gt;Hello there I am some informative content&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">w-expandable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>The wExpandTransition component can wrap one or more wWillExpand components.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">w-expand-transition</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;w-will-expand v-if=&quot;expanded&quot;&gt;Hello&lt;/w-will-expand&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;w-will-expand v-else&gt;Hi&lt;/w-will-expand&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;w-expand-transition&gt;</span></span></code></pre></div><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3>`,19);function o(k,d,r,E,c,u){const s=i("api-table");return e(),t("div",null,[h,n(s,{type:"vue",component:"Expandable"})])}const b=a(p,[["render",o]]);export{y as __pageData,b as default};
