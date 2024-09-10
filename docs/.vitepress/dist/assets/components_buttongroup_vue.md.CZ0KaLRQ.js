import{_ as i,G as e,o as n,c as o,J as t,V as p,a,b as l}from"./chunks/framework.DS0mASGI.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/buttongroup/vue.md","filePath":"components/buttongroup/vue.md"}'),r={name:"components/buttongroup/vue.md"},h=p(`<h3 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h3><blockquote><p>Use in entire app</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ButtonGroup } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@warp-ds/vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ButtonGroup);</span></span></code></pre></div><blockquote><p>Use in one component and special imports</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { wButtonGroup, wButtonGroupItem } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@warp-ds/vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">w-button-group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;w-button-group-item :selected=&quot;props.selected&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;w-clickable label radio v-model=&quot;radioModel&quot; value=&quot;foo&quot;&gt;Foo&lt;/w-clickable&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/w-button-group-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;w-button-group-item :selected=&quot;active(&#39;Radio&#39;) &amp;&amp; radioModel === &#39;bar&#39;&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;w-clickable label radio v-model=&quot;radioModel&quot; value=&quot;bar&quot;&gt;Bar&lt;/w-clickable&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/w-button-group-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;w-button-group-item :selected=&quot;active(&#39;Radio&#39;) &amp;&amp; radioModel === &#39;baz&#39;&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;w-clickable label radio v-model=&quot;radioModel&quot; value=&quot;baz&quot;&gt;Baz&lt;/w-clickable&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/w-button-group-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">w-button-group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><h4 id="buttongroup-props" tabindex="-1">ButtonGroup props <a class="header-anchor" href="#buttongroup-props" aria-label="Permalink to &quot;ButtonGroup props&quot;">​</a></h4>`,9),u=a("h4",{id:"buttongroupitem-props",tabindex:"-1"},[l("ButtonGroupItem props "),a("a",{class:"header-anchor",href:"#buttongroupitem-props","aria-label":'Permalink to "ButtonGroupItem props"'},"​")],-1);function k(d,c,E,g,b,m){const s=e("api-table");return n(),o("div",null,[h,t(s,{type:"vue",component:"ButtonGroup"}),u,t(s,{type:"vue",component:"ButtonGroupItem"})])}const q=i(r,[["render",k]]);export{v as __pageData,q as default};
