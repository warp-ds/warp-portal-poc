<script setup>

// Receive the filtered component data from the parent
const props = defineProps({
  filteredComponents: Array
});
</script>

<template>
  <cards class="grid grid-cols-1 sm:grid-cols-3 gap-12">
    <card
      v-for="component in filteredComponents"
      :key="component.title"
      class="flex flex-col border border-gray-200 rounded-md shadow-sm"
      style="background-color: var(--vp-c-muted-bg)"
    >
      <h3 class="h4 text-m! static! mt-16! mx-16!">
        <a
          :href="component.href"
          class="block before:content-empty before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 focus:outline-0"
        >
          {{ component.title }}
        </a>
      </h3>
      <div class="order-first" style="aspect-ratio:4/3; display: flex; justify-content: center; align-items: center; background-color: var(--vp-c-bg-soft);">
        <!-- Render the SVG inline -->
        <component
          v-if="component.svgComponent"
          :is="component.svgComponent"
          :aria-label="component.placeholder.label"
          role="img"
          class="max-w-[80%] max-h-[80%]"
        />
      </div>
      <p class="m-16! text-s">{{ component.description }}</p>
    </card>
  </cards>
</template>