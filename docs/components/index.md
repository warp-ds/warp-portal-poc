---
editLink: false
---

<script setup>
import { ref, computed } from 'vue';

// Import all JSON data
const components = import.meta.glob('./*/data.json', { eager: true });

// Map JSON data to include href and correct paths
const componentData = Object.keys(components).map(path => {
  const folderPath = path.replace('/data.json', '');

  return {
    ...components[path].default,
    href: `/warp-portal-poc/components/${folderPath}` // Direct href
  };
});

// Reactive variables for query and selected frameworks
const query = ref('');
const selectedFrameworks = ref([]);

// Extract unique framework names
const frameworkNames = computed(() => {
  const names = new Set();
  componentData.forEach(component => {
    component.frameworks.forEach(framework => {
      names.add(framework.name);
    });
  });
  return Array.from(names);
});

// Computed property to filter components based on query and selected frameworks
const filteredComponents = computed(() => {
  const lowerQuery = query.value.toLowerCase();
  const frameworks = selectedFrameworks.value;

  return componentData.filter(component => {
    const matchesQuery = component.title.toLowerCase().includes(lowerQuery);
    const matchesFramework = frameworks.length === 0 ||
      frameworks.every(framework =>
        component.frameworks.some(componentFramework => componentFramework.name === framework)
      );
    return matchesQuery && matchesFramework;
  });
});

// Function to handle button clicks
const toggleFramework = (framework) => {
  if (selectedFrameworks.value.includes(framework)) {
    selectedFrameworks.value = selectedFrameworks.value.filter(f => f !== framework);
  } else {
    selectedFrameworks.value.push(framework);
  }
};

// Function to handle "All" button click
const showAll = () => {
  selectedFrameworks.value = [];
};
</script>

# Overview
All WARP components for Figma, React, Vue, Elements, iOS, and Android.

## Filters
<section>
  <div class="py-16 rounded-8 mb-16">
    <div class="pt-8 mb-16">
      <!-- Input field for text filtering -->
      <label class="block bold" for="filter-input">By name</label>
      <input
        v-model="query"
        name="filter-input"
        class="doc-input"
      />
    </div>
    <p class="block bold mb-4!">Supported on platform</p>
    <!-- Row of buttons for framework filtering -->
    <div class="flex flex-wrap mb-16 gap-4 align-right">
      <button
        v-for="framework in frameworkNames"
        :key="framework"
        @click="toggleFramework(framework)"
        :class="[
          'doc-pill',
          selectedFrameworks.includes(framework)
            ? 'doc-pill-active'
            : ''
        ]"
      >
        {{ framework }}
      </button>
      <button
        @click="showAll"
        :class="[
          'doc-pill',
          selectedFrameworks.length === 0
            ? 'doc-pill-active'
            : ''
        ]"
      >
        All
      </button>
    </div>
  </div>

  <!-- Display filtered components -->
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
        <!-- Directly use component.image.src here -->
        <img class="max-w-[80%] max-h-[80%]"
          :src="component.image.src"
          :alt="component.image.alt || 'Component as a wireframe'"
        />
      </div>
      <p class="m-16! text-s">{{ component.description }}</p>
    </card>
  </cards>
</section>