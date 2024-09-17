---
layout: home
hero:
  name: The design system for Schibsted Marketplaces
  text:
  tagline: Design, build and ship coherent experience with WARP
  image: /warp-logo.svg
  actions:
  - theme: brand
    text: Get Started →
    link: /get-started/

features:
  - icon: 
      src: /components-icon.svg
      width: 158px
      height: 162.17px
      alt: UI mockup with multiple horizontal bars representing text, buttons and icons, alongside small colored squares and circular icons at the bottom with one indicating a checkmark and another showing a double-arrow icon.
    title: Components
    details: UI controls and utilities to help you build great experiences
    link: /components
    linkText: See all components 

  - icon: 
      src: /foundations-icon.svg
      width: 126px
      height: 181px
      alt: Abstract illustration with red circles, geometric shapes, and stylized figures.
    title: Foundations
    details: Guidelines for colour palettes, typography, icons and more.
    link: /foundations
    linkText: Explore foundations
---

<style>
.VPHomeFeatures .item .VPLink {
  max-width: 557px;
  max-height: 351px;
  background-color: #131B2D;
  border-radius: 8px;
}
.VPHomeFeatures .item .VPLink .box {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  grid-template-areas:
    "title icon"
    "details icon"
    "link icon"
    "link-text icon";
  padding: 60px 38px 60px 38px;
  }
.VPHomeFeatures .item .VPLink .box .VPImage {
  grid-area: icon;
  justify-self: end;
}
.VPHomeFeatures .item .VPLink .box .title {
  grid-area: title;
  color: #F6D553;
  font-size: 36px;
  line-height: 52px;
}
.VPHomeFeatures .item .VPLink .box .details {
  grid-area: details;
  color: #FFFBD5;
  font-size: 22px;
  line-height: 32px;
}
.VPHomeFeatures .item .VPLink .link-text {
  grid-area: link;
  color: #FFFBD5;
}
.VPHomeFeatures .item .VPLink .link-text-value {
  grid-area: link-text;
  color: #FFFBD5;
  font-size: 16px;
  text-decoration: underline;
}
</style>
