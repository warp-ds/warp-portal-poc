<script setup>
const pages = [{
  title: "Tokens",
  description: "Todo",
  href: "tokens",
},
{
  title: "Native styling",
  description: "Todo",
  href: "styling/native/",
},
{
  title: "Web styling",
  description: "Todo",
  href: "styling/web/unocss",
},
{
  title: "Illustrations",
  description: "Todo",
  href: "illustrations/",
},
{
  title: "Typography",
  description: "Todo",
  href: "typography/",
},
{
  title: "Accessibility",
  description: "Todo",
  href: "accessibility/",
},
{
  title: "Design principles",
  description: "Todo",
  href: "design-principles/",
},
{
  title: "Brands",
  description: "Todo",
  href: "brands/",
},
{
  title: "Data visualisation",
  description: "Todo",
  href: "data-visualization/getting-started/",
},
{
  title: "Elevation",
  description: "Todo",
  href: "elevation/",
},
{
  title: "Dark mode",
  description: "Todo",
  href: "dark-mode",
},
{
  title: "Motion",
  description: "Todo",
  href: "motion/",
}]
</script>

# Foundations
Foundations are the visual components essential for crafting captivating end-to-end user experiences.

<cards class="grid grid-cols-1 sm:grid-cols-2 gap-12">
  <card
    v-for="page in pages"
    :key="page.title"
    class="flex flex-col border border-gray-200 p-4 rounded-md shadow-sm"
  >
    <h3 class="h4 text-m! static! mt-16! mx-16!">
      <a
        :href="page.href"
        class="block before:content-empty before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 focus:outline-0"
      >
        {{ page.title }}
      </a>
    </h3>
    <p class="m-16! text-s">{{ page.description }}</p>
  </card>
</cards>