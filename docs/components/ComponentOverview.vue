<script setup>
import ComponentOverviewFilter from './ComponentOverviewFilters.vue';
import ComponentOverviewResult from './ComponentOverviewResult.vue';
import { ref, computed } from 'vue';

// Import all JSON data and corresponding placeholder.svg files
const components = import.meta.glob('./*/data.json', { eager: true });
const svgComponents = import.meta.glob('./*/placeholder.svg', { eager: true, import: 'default' });
console.log('Available SVG components:', Object.keys(svgComponents));

// Import default placeholder SVG
import defaultSvg from '../src/placeholder-default.svg';

const validateComponentData = (data, folderPath) => {
  const svgPath = `${folderPath}/placeholder.svg`;

  // Check if the specific placeholder.svg exists, otherwise use the default
  const svg = svgComponents[svgPath] || defaultSvg;

  return {
    title: data.title || 'Untitled Component',  // Default title if missing
    description: data.description || 'No description available.',  // Default description if missing
    category: data.category || 'Uncategorized',  // Default category if missing
    frameworks: Array.isArray(data.frameworks) ? data.frameworks.map(fw => ({
      name: fw.name || 'Unknown Framework',  // Default framework name if missing
      status: fw.status || 'unknown'  // Default status if missing
    })) : [],  // Default empty array if no frameworks provided
    svgComponent: svg,  // Use the component's SVG or the default if missing
    placeholder: {
      label: data.placeholder?.label || data.title || 'Component image missing'  // Fallback to title if no label or to text if that is also missing
    }
  };
};

// Map JSON data to include href and validate data
const componentData = Object.keys(components).map(path => {
  const folderPath = path.replace('/data.json', '');
  const rawData = components[path].default;

  return {
    ...validateComponentData(rawData, folderPath),  // Validate each component's data
    href: `/warp-portal-poc/components/${folderPath}`
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
</script>

<template>

  <ComponentOverviewFilter
    :availableFrameworks="frameworkNames"
    :modelValue="query"
    :selectedFrameworks="selectedFrameworks"
    @update:query="query = $event"
    @update:frameworks="selectedFrameworks = $event"
  />

  <ComponentOverviewResult
    :filteredComponents="filteredComponents"
  />

</template>