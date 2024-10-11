<script setup>
  import Vue from './vue.md';
  import React from './react.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Switch
{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Examples
<ThemeSwitcher />
<switch-example />

## Usage

<component-design-guidelines name="Warp - Components / Switch" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=377-23907&mode=design" />

<component-questions />

## Frameworks

<tabs-content>
  <template #react>
    <react />
  </template>
  <template #vue>
    <vue />
  </template>
</tabs-content>
