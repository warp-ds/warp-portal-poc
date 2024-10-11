<script setup>
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Spinner

{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

::: warning iOS only
For the web implementation of a "spinner", see [CSS - Animation - Spinner](../../foundations/styling/web/animation#spinner).
:::

## Example
<ThemeSwitcher />
<spinner-example />

## Usage

<component-design-guidelines name="Warp - Components / Spinner" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?node-id=900-35603&t=jDaOykQhPf30zVST-0" />

<component-questions />

## iOS implementation

<iOS />
