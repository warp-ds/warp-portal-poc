<script setup>
  import iOS from './ios.md';
  import data from './data.json';
  import { mapFrameworkStatuses } from '../utils.js';
</script>

# Tooltip

{{ data.description }}
Tooltips should be used sparingly and contain succinct, supplementary information.

::: warning iOS only
For the web implementation of a "tooltip", see [Components - Attention - Tooltip](/components/attention/#tooltip).
:::

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example
<ThemeSwitcher />
<tooltip-example />

## Usage

<component-design-guidelines name="Warp - Components / Tooltip" link="https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components-2.0?node-id=1308-38514&t=ypV9S2xFCv8kSzjB-0" />

<component-questions />

## iOS implementation

<iOS />
