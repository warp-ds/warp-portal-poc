<script setup>
  import Vue from './vue.md';
  import React from './react.md';
  import Elements from './elements.md';
  import Android from './android.md';
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Modal
{{ data.description }}

They are overlays that prevent users from interacting with the rest of the application until a specific action is taken. They can be disruptive because they require merchants to take an action before they can continue interacting with the rest of the site. It should be used thoughtfully and sparingly.

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<modal-example />

## Usage

<component-design-guidelines name="Warp - Components / Modal" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=354-18223&mode=design" />

### Accessibility
Modal needs either aria-label or aria-labelledby to be accessible to screen readers.

All dialogs must have a title. Titles appear in bold at the top of the dialog and use a few words to convey the outcome of what will happen if a user continues with an action. Use the property title for this.

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
    <template #android>
    <android />
  </template>
    <template #iOS>
    <iOS />
  </template>
</tabs-content>