<!--
// USAGE
// <card>This is a nice card</card>
// <card imgurl="..." imgalt="Description of image"></card>
// LAYOUT
// We might put these inside a <cards></cards> for some automagic layout love, or set up any other layout if that is wanted.
// <cards>
//   <card>1</card>
//   <card>2</card>
//   <card>3</card>
// </cards>
-->

<script setup>
const props = defineProps({
  imgurl: String,
  imgalt: String,
});
</script>

<template>
  <article class="card-wrapper rounded-4 shadow-s overflow-hidden">
    <div v-if="imgurl" class="flex items-center justify-center gap-8 overflow-hidden img-bg" style="aspect-ratio: 4 / 3">
      <img :src="imgurl" :alt="imgalt">
    </div>
    <div class="do-caption p-16">
      <slot></slot>
    </div>
  </article>
</template>

<style lang="scss">
.card-wrapper {
  .img-bg {
    background-color: #F9F9FA;
  }
}
</style>

