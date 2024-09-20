<script setup>
  import Vue from './vue.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Button Group

{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example

<ThemeSwitcher />
<buttongroup-example />

## Usage

This component is only supported in Warp Vue at the moment.
For a React equivalent that serves a similar purpose, use the `Toggle` in [RadioButtons](/components/radiobuttons/).

<component-questions />

## Frameworks

<tabs-content>
  <template #vue>
    <vue />
  </template>
</tabs-content>
