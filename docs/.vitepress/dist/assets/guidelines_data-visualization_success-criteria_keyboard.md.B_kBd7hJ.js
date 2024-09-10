import{_ as t,o as i,c as o,V as n,aC as e,aB as a,aA as r}from"./chunks/framework.DS0mASGI.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guidelines/data-visualization/success-criteria/keyboard.md","filePath":"guidelines/data-visualization/success-criteria/keyboard.md"}'),s={name:"guidelines/data-visualization/success-criteria/keyboard.md"},l=n('<br><h2 id="keyboard-navigation" tabindex="-1">Keyboard navigation <a class="header-anchor" href="#keyboard-navigation" aria-label="Permalink to &quot;Keyboard navigation&quot;">​</a></h2><p>Interactive charts should be easy to operate using a keyboard. Everything that can be done through pointer interaction (e.g. click or hover), should be achievable through keyboard interaction as well.</p><p>Interactive elements should be easily identifiable and have focus outlines, and the focus order should be in logical order. Any custom interaction should be explained.</p><h3 id="_1-information-accessible-through-pointer-interaction-is-also-available-through-keyboard-interaction" tabindex="-1">1. Information accessible through pointer interaction is also available through keyboard interaction <a class="header-anchor" href="#_1-information-accessible-through-pointer-interaction-is-also-available-through-keyboard-interaction" aria-label="Permalink to &quot;1. Information accessible through pointer interaction is also available through keyboard interaction&quot;">​</a></h3><p><img src="'+e+'" alt="Blue tech tag"></p><p>For example, hover interaction on bars or lines should be possible to reach using the keyboard.</p><h3 id="_2-interactive-elements-have-focus-outlines" tabindex="-1">2. Interactive elements have focus outlines <a class="header-anchor" href="#_2-interactive-elements-have-focus-outlines" aria-label="Permalink to &quot;2. Interactive elements have focus outlines&quot;">​</a></h3><p><img src="'+a+'" alt="Red design tag and blue tech tag"></p><p>People who use a keyboard to navigate a page or chart need to be able to see clearly which element is in focus.</p><details class="details custom-block"><summary>How to enable focus outline</summary><h4 id="set-an-outline-or-border-on-focus" tabindex="-1">Set an outline or border on <code>:focus</code> <a class="header-anchor" href="#set-an-outline-or-border-on-focus" aria-label="Permalink to &quot;Set an outline or border on `:focus`&quot;">​</a></h4><p>Either use the default system outline (so it will follow user preferences with regards to contrast), or make sure the contrast between the background and outline is at least <strong>3:1</strong>, ideally <strong>4.5:1</strong>.</p><h4 id="make-sure-interactive-elements-can-receive-focus" tabindex="-1">Make sure interactive elements can receive focus <a class="header-anchor" href="#make-sure-interactive-elements-can-receive-focus" aria-label="Permalink to &quot;Make sure interactive elements can receive focus&quot;">​</a></h4><p>Interactive elements (such as <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;input&gt;</code>) automatically are focusable by keyboard, and will receive <code>:focus</code> states.</p><p>Sometimes, interactions are added to non-interactive elements, such as shapes within an <code>&lt;svg&gt;</code> element. In those cases, it&#39;s necessary to make sure the elements are reachable by keyboard interactions.</p><ul><li>Either by setting <code>tabindex=0</code> (will follow the tab order),</li><li>Or by programmatically changing the focus on certain commands (eg. the arrow keys).</li></ul><p>Read more in <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html#navigation-mechanisms-focus-visible-examples-head" target="_blank" rel="noreferrer">(WCAG) Understanding 2.4.7: Focus Visible</a>.</p></details><h3 id="_3-the-chart-does-not-have-keyboard-traps" tabindex="-1">3. The chart does not have keyboard traps <a class="header-anchor" href="#_3-the-chart-does-not-have-keyboard-traps" aria-label="Permalink to &quot;3. The chart does not have keyboard traps&quot;">​</a></h3><p><img src="'+e+'" alt="Blue tech tag"></p><p>For example, when opening a modal, make sure it is possible to close it using the keyboard.</p><h3 id="_4-interactive-elements-are-identifiable" tabindex="-1">4. Interactive elements are identifiable <a class="header-anchor" href="#_4-interactive-elements-are-identifiable" aria-label="Permalink to &quot;4. Interactive elements are identifiable&quot;">​</a></h3><p><img src="'+r+'" alt="Red design tag"></p><p>It should be possible to see visually that an element is interactive. For example, if it is possible to click a header in a table to sort the table, there should be some visual indication that the header can be clicked or reached by using a keyboard.</p><p>If the interaction is explained somewhere else, it should be possible to reach the explanation using a keyboard.</p><h3 id="_5-the-keyboard-navigation-is-intuitive-and-uses-conventional-combinations" tabindex="-1">5. The keyboard navigation is intuitive and uses conventional combinations <a class="header-anchor" href="#_5-the-keyboard-navigation-is-intuitive-and-uses-conventional-combinations" aria-label="Permalink to &quot;5. The keyboard navigation is intuitive and uses conventional combinations&quot;">​</a></h3><p><img src="'+e+'" alt="Blue tech tag"></p><ul><li>The <code>tab</code> key should navigate to the first interactive element of the chart </li><li>Arrow keys should navigate between data points, legend items, menu options, or toggle between data series</li><li><code>Space</code>/<code>Enter</code> should activate buttons or toggles.</li></ul><h3 id="_6-unconventional-keyboard-interaction-is-explained" tabindex="-1">6. Unconventional keyboard interaction is explained <a class="header-anchor" href="#_6-unconventional-keyboard-interaction-is-explained" aria-label="Permalink to &quot;6. Unconventional keyboard interaction is explained&quot;">​</a></h3><p><img src="'+a+'" alt="Red design tagn and blue tech tag"></p><p>If keyboard interaction is unconventional, make sure to include information about how to navigate the chart/page. This should be visible on the page, but can appear as the user is navigating using a keyboard.</p>',24),c=[l];function d(h,u,b,m,p,g){return i(),o("div",null,c)}const f=t(s,[["render",d]]);export{k as __pageData,f as default};
