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
    description: 'Two liner explaining the contents of this card'
  },
  {
    title: 'Icons',
    href: `${baseUrl}components/icons/`,
    image: {src: 'icons-card.svg', alt: 'Three talk bubbles that are smiling and have closed eyes'},
    description: 'Two liner explaining the contents of this card'
  },
  {
    title: 'Colors',
    href: `${baseUrl}foundations/styling/web/background-color#quick-reference`,
    image: {src: 'colors-card.svg', alt: 'Two abstract shapes in grey and black colors, one bigger than the other'},
    description: 'Two liner explaining the contents of this card'
  },
  {
    title: 'Tokens',
    href: `${baseUrl}foundations/styling/web/text-color#quick-reference`,
    image: {src: 'tokens-card.svg', alt: 'Two abstract shapes in grey and black colors, one bigger than the other'},
    description: 'Two liner explaining the contents of this card'
  },
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

<style scoped>
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

.card-link:focus {
  outline: none;
}

.card-image {
  order: -1;
}

.card-description {
  margin: 16px;
  font-size: 14px;
}

</style>
