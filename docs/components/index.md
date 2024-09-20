<script setup>
const components = import.meta.glob('./*/data.json', { eager: true })
const baseUrl = import.meta.env.BASE_URL

const componentData = Object.keys(components).map(path => {
 return ({
  ...components[path].default, // component data from JSON
  href: `${baseUrl}components/${path.replace('/data.json', '')}`
})});

</script>

# Overview
All WARP components for Figma, React, Vue, Elements, iOS, and Android.

[Filters]

<cards class="grid grid-cols-1 sm:grid-cols-3">
  <card v-for="component in componentData" :key="component.title" class="flex flex-col">
    <h3 class="h4 text-m! static! mt-16! mx-16!">
      <a :href="component.href" class="block before:content-empty before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 focus:outline-0">{{ component.title }}</a>
    </h3>
    <img class="order-first" :src="component.image.src" :alt="component.image.alt"/>
    <p class="m-16! text-s">{{ component.description }}</p>
  </card>
</cards>