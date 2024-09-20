---
layout: home
hero:
  name: The design system for Schibsted Marketplaces
  text:
  tagline: Design, build and ship coherent experience with WARP
  image: /warp-hero.svg
  actions:
  - theme: brand
    text: Get Started →
    link: /get-started/

features:
  - icon: 
      src: /components-icon.svg
      width: 158px
      height: 162.17px
      alt: UI mockup with multiple horizontal bars representing text, buttons and icons, alongside small colored squares and circular icons at the bottom with one indicating a checkmark and another showing a double-arrow icon.
    title: Components
    details: UI controls and utilities to help you build great experiences
    link: /components
    linkText: See all components 

  - icon: 
      src: /foundations-icon.svg
      width: 126px
      height: 181px
      alt: Abstract illustration with red circles, geometric shapes, and stylized figures.
    title: Foundations
    details: Guidelines for colour palettes, typography, icons and more.
    link: /foundations
    linkText: Explore foundations
---

<script setup>
const baseUrl = import.meta.env.BASE_URL

const componentData = [
  {
    title: 'CSS classes',
    href: `${baseUrl}foundations/styling/web/unocss`,
    image: {src: 'css-classes-card.svg', alt: 'A paper with two curly braces.'},
    description: 'Explore how to use pre-defined utility-first CSS classes'
  },
  {
    title: 'Icons',
    href: `${baseUrl}components/icons/`,
    image: {src: 'icons-card.svg', alt: 'Three talk bubbles that are smiling and have closed eyes'},
    description: 'Browse our library of UI icons'
  },
  {
    title: 'Colors',
    href: `${baseUrl}foundations/styling/web/background-color#quick-reference`,
    image: {src: 'colors-card.svg', alt: 'Two abstract shapes in grey and black colors, one bigger than the other'},
    description: 'Get quick access to predefined color palettes for backgrounds, text and border'
  },
  {
    title: 'Tokens',
    href: `${baseUrl}foundations/styling/web/text-color#quick-reference`,
    image: {src: 'tokens-card.svg', alt: 'Two abstract shapes in grey and black colors, one bigger than the other'},
    description: 'Discover design tokens for managing color, typography, and spacing'
  }
]

</script>

<cards class="card-container">
  <card v-for="component in componentData" :key="component.title" class="card-item">
    <h3 class="card-title">
      <a :href="component.href" class="card-link">{{ component.title }}</a>
    </h3>
    <img class="card-image" :src="component.image.src" :alt="component.image.alt"/>
    <p class="card-description">{{ component.description }}</p>
  </card>
</cards>

<div class="banner-container">
  <div class="banner-icon-column">
    <img src="/public/collaborate-icon.svg" alt="Collaborate icon" class="banner-icon"/>
  </div>
  
 <div class="banner-column">
  <h2 class="banner-title">Collaborate</h2>
  <p>Contributing to the WARP design system, requesting new components or adjustments to existing ones.</p>
  <a :href="`${baseUrl}collaborate/request-new-component`" class="banner-link collaborate">
    Collaborate with us
    <span class="vpi-arrow-right link-text-icon"></span> <!-- Span for the arrow icon -->
  </a>
</div>

  
  <div class="banner-icon-column">
    <img src="/public/get-in-touch-icon.svg" alt="Get in touch icon" class="banner-icon"/>
  </div>

  <div class="banner-column">
    <h2 class="banner-title">Get in touch</h2>
    <p>Need help or support? The best way to get in touch with the team is through Slack.</p>
    <div class="slack-section">
      <img src="/public/slack-icon.svg" alt="Slack icon" width="24px" class="slack-icon"/> 
      <a href="https://sch-chat.slack.com/archives/C04P0GYTHPV" target="_blank" class="banner-link">#nmp-warp-design-system</a>
    </div>
  </div>
</div>

<style scoped>
/* Cards styling */
.card-container {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 640px) {
  .card-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card-item {
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 16px;
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  position: static;
}

.card-link {
  --vp-c-brand: #131B2D;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: bold;
  display: block;
  position: relative;
}

.card-link::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.card-image {
  order: -1;
}

.card-description {
  margin: 16px;
  font-size: 14px;
}

/* Banner styling */
.banner-container {
  display: grid;
  grid-template-columns: 1fr;
  background-color: #f6f6f7;
  padding: 40px 20px;
  margin-top: 40px;
  width: 100%;
  gap: 8px;
  align-items: start; 
}

@media (min-width: 640px) {
  .banner-container {
    grid-template-columns: .25fr 1.75fr 0.25fr 1.75fr;
  }
}

.banner-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner-icon-column {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 640px) {
  .banner-icon-column {
    margin-top: 10px;
  }
}

.banner-icon {
  width: 60px;
  height: 60px;
}

.banner-title {
  margin-top: 0;
  margin-bottom: 0;
  border-top: none;
  font-size: 36px;
  font-weight: 700;
}

.vp-doc p {
  margin-top: 6px;
}

.vpi-arrow-right::after {
  content: '→';
  font-size: 16px;
  margin-left: 8px;
  vertical-align: middle;
  display: inline-block;
}

.banner-link {
  margin-top: 16px;
  text-decoration: none;
  color: #131B2D;
}

.banner-link.collaborate {
  text-decoration: underline;
}

.banner-link:hover {
  text-decoration: underline;
}

.slack-section {
  display: flex;
  align-items: center;
}

.slack-icon {
  margin-right: 6px;
  align-self: flex-end;
}

</style>
