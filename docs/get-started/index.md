<script setup>
const pages = [{
  title: "Mission, values, principles",
  description: "The Warp Design System mission reflecting its values and principles",
  href: "mission-values-principles",
  image: {
    src: "/warp-portal-poc/css/la03.jpg",
    alt: "AI-generated image"
  },
},
{
  title: "Web Developers",
  description: "Getting started guide for Web developers",
  href: "developers/web/",
    image: {
    src: "/warp-portal-poc/css/la04.jpg",
    alt: "AI-generated image"
  },
},
{
  title: "iOS Developers",
  description: "Getting started guide for iOS developers",
  href: "developers/ios/",
    image: {
    src: "/warp-portal-poc/css/la05.jpg",
    alt: "AI-generated image"
  },
},
{
  title: "Android Developers",
  description: "Getting started guide for Android developers",
  href: "developers/android/",
    image: {
    src: "/warp-portal-poc/css/la06.jpg",
    alt: "AI-generated image"
  },
},
{
  title: "Designers",
  description: "Getting started guide for designers",
  href: "designers/warp-in-figma/",
    image: {
    src: "/warp-portal-poc/css/la08.jpg",
    alt: "AI-generated image"
  },
}]
</script>

# Get started
Begin crafting and building great product experiences with the WARP design system’s UI foundations, components, and patterns.

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