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

<template>
  <article class="docs-card rounded-4 shadow-s focus-within:shadow-m hover:shadow-m overflow-hidden relative">
    <slot></slot>
  </article>
</template>

<style scoped>
  .docs-card{
    border: 1px solid var(--vp-c-card-border, transparent);
  }
  .docs-card:hover{
    --vp-c-card-border: var(--vp-c-brand-1)
  }
</style>