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

<cards>
  <card v-for="component in componentData" :key="component.title"
    :imgurl="component.image.src" :imgalt="component.image.alt">
    <h3 class="h4 m-0! mb-8! text-m!">{{ component.title }}</h3>
    <p class="m-0! text-s">{{ component.description }}</p>
  </card>
</cards>