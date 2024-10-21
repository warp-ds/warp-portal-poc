<script setup>
import { ref, watch } from 'vue';

// Props for available frameworks, current query, and selected frameworks
const props = defineProps({
  availableFrameworks: Array,
  modelValue: String,
  selectedFrameworks: Array
});

// Emits events to update the query and frameworks in the parent component
const emit = defineEmits(['update:query', 'update:frameworks']);

// Local state for managing query and selected frameworks
const localQuery = ref(props.modelValue);
const localSelectedFrameworks = ref([...props.selectedFrameworks]);

// Emit changes when query or frameworks change
watch(localQuery, (newQuery) => emit('update:query', newQuery));
watch(localSelectedFrameworks, (newFrameworks) => emit('update:frameworks', newFrameworks));

// Function to toggle framework selection
const toggleFramework = (framework) => {
  if (localSelectedFrameworks.value.includes(framework)) {
    localSelectedFrameworks.value = localSelectedFrameworks.value.filter(f => f !== framework);
  } else {
    localSelectedFrameworks.value.push(framework);
  }
};

// Function to reset filters (show all)
const showAll = () => {
  localSelectedFrameworks.value = [];
};
</script>

<template>
  <div class="py-16 rounded-8 mb-16">
    <div class="pt-8 mb-16">
      <!-- Input field for text filtering -->
      <label class="block bold" for="filter-input">By name</label>
      <input
        v-model="localQuery"
        name="filter-input"
        class="doc-input"
        placeholder="Filter by name..."
      />
    </div>
    <p class="block bold mb-4!">Supported on platform</p>
    <!-- Row of buttons for framework filtering -->
    <div class="flex flex-wrap mb-16 gap-4 align-right">
      <button
        v-for="framework in availableFrameworks"
        :key="framework"
        @click="toggleFramework(framework)"
        :class="[
          'doc-pill',
          localSelectedFrameworks.includes(framework)
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
          localSelectedFrameworks.length === 0
            ? 'doc-pill-active'
            : ''
        ]"
      >
        All
      </button>
    </div>
  </div>
</template>
