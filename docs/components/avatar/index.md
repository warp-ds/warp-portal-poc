<script setup>
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Avatar

{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

