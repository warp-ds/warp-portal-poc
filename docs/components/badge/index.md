<script setup>
  import data from './data.json';
  import { mapFrameworkStatuses, useFrameworkDocs } from '../utils.js';

  // Get the dynamically imported markdown components
  const { vueDoc, reactDoc, elementsDoc, androidDoc, iosDoc } = useFrameworkDocs(data);
</script>

# {{ data.title }}

{{ data.description }}

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

## Example

<badge-example />

## Usage

<component-design-guidelines name="Warp - Components / Badge" link="https://www.figma.com/file/nkiRpuVu6XRfvY96BA80H8/Components-overview?type=design&node-id=249-11911&mode=design&t=CxdPkiD3C2rBtqKv-0" />

<component-questions />

## Frameworks

<!-- Use keep-alive to cache components and avoid blinking -->
<keep-alive>
  <tabs-content>
    <template #react>
      <component :is="reactDoc" v-if="reactDoc" />
    </template>
    <template #vue>
      <component :is="vueDoc" v-if="vueDoc" />
    </template>
    <template #elements>
      <component :is="elementsDoc" v-if="elementsDoc" />
    </template>
    <template #android>
      <component :is="androidDoc" v-if="androidDoc" />
    </template>
    <template #ios>
      <component :is="iosDoc" v-if="iosDoc" />
    </template>
  </tabs-content>
</keep-alive>