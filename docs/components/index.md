<script setup>
import { ref, computed } from 'vue';

// Import all JSON data
const components = import.meta.glob('./*/data.json', { eager: true });
const baseUrl = import.meta.env.BASE_URL || '/'; // Fallback to '/' if BASE_URL is undefined

// Clean up the base URL to avoid double slashes
const cleanBaseUrl = baseUrl.replace(/\/+$/, ''); // Remove trailing slashes

// Map JSON data to include href and dynamically generate image paths
const componentData = Object.keys(components).map(path => {
  // Clean up folderPath by removing './' and leading slashes
  const folderPath = path.replace('/data.json', '').replace(/^\.\/+/, '');

  return {
    ...components[path].default,
    // Clean up href by removing './' if it exists
    href: `${cleanBaseUrl}/components/${folderPath}`,
    image: {
      // Clean up image path by removing './' if it exists
      src: `${cleanBaseUrl}/components/${folderPath}/placeholder.png`,
      alt: components[path].default.title
    }
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
    --w-panel-bg: #f9f9f9;
    --w-input-bg: #fff;
  }
  /* set up as custom default styling somewhere else, default.css perhaps?  */
  .input-text{
    border: 1px solid var(--w-border);
    color: var(--w-text);
    padding: 4px 8px;
    border-radius: var(--w-border-radius);
    background-color: var(--w-input-bg);
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

## Filters
<section>
  <div class="p-16 rounded-8 mb-16"  style="background-color: var(--vp-c-bg-soft);">
    <div class="pt-8 mb-16">
      <!-- Input field for text filtering -->
      <label class="block bold" for="filter-input">By name</label>
      <input
        v-model="query"
        name="filter-input"
        class="input-text"
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
  </div>

  <!-- Display filtered components -->
  <cards class="grid grid-cols-1 sm:grid-cols-3 gap-12" >
    <card
      v-for="component in filteredComponents"
      :key="component.title"
      class="flex flex-col border border-gray-200 rounded-md shadow-sm"
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
      <img class="max-w-[80%] max-h-[80%]"
        :src="component.image.src"
        :alt="component.image.alt"
      /></div>
      <p class="m-16! text-s">{{ component.description }}</p>
    </card>
  </cards>
</section>
