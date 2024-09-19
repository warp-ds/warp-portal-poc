<script setup>
import { ref, computed } from 'vue';

// Import all JSON data
const components = import.meta.glob('./*/data.json', { eager: true });
const baseUrl = import.meta.env.BASE_URL;

// Map JSON data to include href and correct paths
const componentData = Object.keys(components).map(path => ({
  ...components[path].default,
  href: `${baseUrl}components/${path.replace('/data.json', '')}`
}));

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
      component.frameworks.some(framework => frameworks.includes(framework.name));
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

<style>
  /* remove these to custom.css and replace with warp-doc color tokens */
  :root{
    --w-border: #999;
    --w-border-focus: #00F;
    --w-button-bg: #eee;
    --w-button-bg-active: #333;
    --w-text: #333;
    --w-text-inverted: #eee;
    --w-border-radius: 4px;
  }
  /* set up as custom default styling somewhere else, default.css perhaps?  */
  .input-text{
    border: 1px solid var(--w-border);
    color: var(--w-text);
    padding: 4px 8px;
    border-radius: var(--w-border-radius);
  }
  .input-text:focus{
    border: 1px solid var(--w-border-focus);
  }
  .button{
    background-color: var(--w-button-bg);
    color: var(--w-text);
    padding: 4px 8px;
    border-radius: var(--w-border-radius);
  }
  .button-active{
    background-color: var(--w-button-bg-active);
    color: var(--w-text-inverted);
  }
  .button:focus{
    outline:1px solid red;
  }
</style>


# Overview
All WARP components for Figma, React, Vue, Elements, iOS, and Android.

<div>
  <!-- Input field for text filtering -->
  <input
    v-model="query"
    placeholder="Filter components"
    class="input-text"
  />

  <!-- Row of buttons for framework filtering -->
  <div class="flex flex-wrap gap-4 pt-8">
    <button
      v-for="framework in frameworkNames"
      :key="framework"
      @click="toggleFramework(framework)"
      :class="[
        'button',
        selectedFrameworks.includes(framework)
          ? 'button-active'
          : ''
      ]"
    >
      {{ framework }}
    </button>
    <button
      @click="showAll"
      :class="[
        'button',
        selectedFrameworks.length === 0
          ? 'button-active'
          : ''
      ]"
    >
      All
    </button>
  </div>

  <!-- Display filtered components -->
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div
      v-for="component in filteredComponents"
      :key="component.title"
      class="flex flex-col border border-gray-200 p-4 rounded-md shadow-sm"
    >
      <h3 class="text-lg font-semibold mb-2">
        <a
          :href="component.href"
          class="text-blue-600 hover:underline"
        >
          {{ component.title }}
        </a>
      </h3>
      <img
        class="mb-2 max-w-full h-auto"
        :src="component.image.src"
        :alt="component.image.alt"
      />
      <p class="text-gray-700">{{ component.description }}</p>
    </div>
  </div>
</div>


