<script setup>
  import React from './react.md';
  import Vue from './vue.md';
  import Elements from './elements.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Attention
{{ data.description }}

::: warning Web only
For the iOS and Android implementation of Attention, see [Components - Callout](/components/callout/) and [Components - Tooltip](/components/tooltip/).
:::

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Examples
<ThemeSwitcher />
<attention-example />

## Usage

<component-design-guidelines :links="[
{ name: 'Warp - Components / Callout', link:'https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=259-13731&mode=design' },
{ name: 'Warp - Components / Tooltip', link:'https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=377-23911&mode=design' },
{ name: 'Warp - Components / Popover', link:'https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=374-22825&mode=design' },
]" />

<component-questions />

## Frameworks

<tabs-content>
  <template #react>
    <react />
  </template>
  <template #vue>
    <vue />
  </template>
  <template #elements>
    <elements />
  </template>
</tabs-content>
