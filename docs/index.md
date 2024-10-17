---
layout: home
---

<script setup>
const baseUrl = import.meta.env.BASE_URL
import ClassesCard from './src/css-classes-card.svg';
import IconsCard from './src/icons-card.svg';
import ColorsCard from './src/colors-card.svg';
import TokensCard from './src/tokens-card.svg';
import heroSVG from './src/warp-hero.svg';
const componentData = [
  {
    title: 'CSS classes',
    href: 'foundations/styling/web/unocss',
    image: { component: ClassesCard, alt: 'A paper with two curly braces.' },
    description: 'Explore how to use pre-defined utility-first CSS classes'
  },
  {
    title: 'Icons',
    href: 'components/icons',
    image: { component: IconsCard, alt: 'Three talk bubbles that are smiling and have closed eyes' },
    description: 'Browse our library of UI icons'
  },
  {
    title: 'Colors',
    href: 'foundations/styling/web/background-color#quick-reference',
    image: { component: ColorsCard, alt: 'Two abstract shapes in grey and black colors, one bigger than the other' },
    description: 'Get quick access to predefined color palettes for backgrounds, text, and border'
  },
  {
    title: 'Tokens',
    href: 'foundations/tokens',
    image: { component: TokensCard, alt: 'Two abstract shapes in grey and black colors, one bigger than the other' },
    description: 'Discover design tokens for managing color, typography, and spacing'
  }
];
</script>

<div class="VPHero has-image VPHomeHero">
  <div class="container">
    <div class="main">
      <h1 class="name"><span class="clip">The design system for Schibsted Marketplaces</span></h1>
      <p class="tagline">Design, build and ship coherent experience with WARP</p>
      <div class="actions">
        <div class="action">
          <a class="vp-font-size-4 brand" href="/warp-portal-poc/get-started">Get Started →</a>
        </div>
      </div>
    </div>
    <div class="image">
      <div class="image-container">
        <heroSVG class="VPImage image-src" />
      </div>
    </div>
  </div>
</div>

<cards class="cards cols2to1">
  <card class="card type2">
    <div>
      <h2 class="card-title vp-font-size-2">Foundations</h2>
      <p class="card-description">Guidelines for colour palettes, typography, icons, styling and more.</p>
      <a class="card-link" href="foundations">Explore foundations <span class="vpi-arrow-right link-text-icon"></span></a>
    </div>
    <div>
      <svg role="img" aria-labeledby="componentSvg" width="158" height="163" viewBox="0 0 158 163" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title id="componentSvg">UI mockup with multiple horizontal bars representing text, buttons and icons, alongside small colored squares and circular icons at the bottom with one indicating a checkmark and another showing a double-arrow icon.</title>
        <rect x="6" width="148" height="91.3438" rx="4.625" fill="var(--vp-c-svg4, #EBEBF2)"/>
        <rect x="15.25" y="13.875" width="24.2812" height="4.625" rx="2.3125" fill="var(--vp-c-svg2, #131B2D )"/>
        <rect x="43" y="13.875" width="35.8438" height="4.625" rx="2.3125" fill="var(--vp-c-svg2, #131B2D )"/>
        <rect x="15.25" y="27.75" width="92.5" height="3.46875" rx="1.73438" fill="var(--vp-c-svg3,#9EACC9)"/>
        <rect x="15.25" y="35.8438" width="115.625" height="3.46875" rx="1.73438" fill="var(--vp-c-svg3, #9EACC9 )"/>
        <rect x="15.25" y="43.9375" width="69.375" height="3.46875" rx="1.73438" fill="var(--vp-c-svg3, #9EACC9 )"/>
        <rect x="110.062" y="65.9062" width="34.6875" height="11.5625" rx="2.3125" fill="var(--vp-c-svg2, #131B2D )"/>
        <rect x="82.3125" y="65.9062" width="23.125" height="11.5625" rx="2.3125" fill="var(--vp-c-svg3, #9EACC9 )"/>
        <rect y="117.172" width="11" height="11" rx="2" fill="var(--vp-c-svg4, #EBEBF2)"/>
        <rect x="17" y="120.672" width="51" height="4" rx="2" fill="var(--vp-c-svg4, #EBEBF2)"/>
        <rect y="134.172" width="11" height="11" rx="2" fill="var(--vp-c-svg3, #9EACC9 )"/>
        <rect x="17" y="137.672" width="51" height="4" rx="2" fill="var(--vp-c-svg3, #9EACC9 )"/>
        <rect y="151.172" width="11" height="11" rx="2" fill="var(--vp-c-svg3, #9EACC9 )"/>
        <rect x="17" y="154.672" width="51" height="4" rx="2" fill="var(--vp-c-svg3, #9EACC9 )"/>
        <rect x="88" y="124.172" width="31.3471" height="31.3469" rx="15.6735" fill="var(--vp-c-svg4, #EBEBF2)"/>
        <path d="M97.3469 138.961L101.701 143.315L108.667 135.478" stroke="var(--vp-c-svg2, #131B2D )" stroke-width="1.30613" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="126.653" y="124.172" width="31.3471" height="31.3469" rx="15.6735" fill="var(--vp-c-svg4, #EBEBF2)"/>
        <path d="M148.204 133.968L136.449 145.723" stroke="var(--vp-c-svg2, #131B2D )" stroke-width="1.30613" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M136.449 133.968L148.204 145.723" stroke="var(--vp-c-svg2, #131B2D )" stroke-width="1.30613" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </card>
  <card class="card type2">
    <div>
      <h2 class="card-title vp-font-size-2">Components</h2>
      <p class="card-description">UI controls and utilities to help you build great experiences</p>
      <a class="card-link" href="components">See all components <span class="vpi-arrow-right link-text-icon"></span></a>
    </div>
    <div>
      <svg role="img" aria-labeledby="foundationSvg" width="126" height="181" viewBox="0 0 126 181" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title id="foundationSvg">Abstract illustration with red circles, geometric shapes, and stylized figures.</title>
        <rect width="80" height="80" rx="40" fill="#BE3830"/>
        <path d="M34.7321 46.0099H24.9621L23.1623 50.9913H20.077L28.1759 28.7195H31.5504L39.6171 50.9913H36.5319L34.7321 46.0099ZM33.8965 43.6317L29.8471 32.319L25.7976 43.6317H33.8965Z" fill="#FFFBD5"/>
        <path d="M42.0541 42.1212C42.0541 40.3214 42.4184 38.7466 43.1468 37.3968C43.8753 36.0256 44.8716 34.965 46.1357 34.2151C47.4212 33.4652 48.846 33.0903 50.4101 33.0903C51.9527 33.0903 53.2918 33.4224 54.4274 34.0866C55.5629 34.7508 56.4092 35.5864 56.9663 36.5934V33.3795H59.923V50.9913H56.9663V47.7132C56.3878 48.7417 55.5201 49.5987 54.3631 50.2843C53.2275 50.9485 51.8992 51.2806 50.3779 51.2806C48.8139 51.2806 47.3998 50.8949 46.1357 50.1236C44.8716 49.3523 43.8753 48.2703 43.1468 46.8776C42.4184 45.485 42.0541 43.8995 42.0541 42.1212ZM56.9663 42.1533C56.9663 40.8249 56.6985 39.6679 56.1628 38.6824C55.6272 37.6968 54.8987 36.9469 53.9774 36.4327C53.0776 35.897 52.0813 35.6292 50.9886 35.6292C49.8959 35.6292 48.8996 35.8863 47.9997 36.4005C47.0998 36.9148 46.3821 37.6646 45.8464 38.6502C45.3108 39.6358 45.043 40.7928 45.043 42.1212C45.043 43.471 45.3108 44.6494 45.8464 45.6564C46.3821 46.642 47.0998 47.4026 47.9997 47.9382C48.8996 48.4524 49.8959 48.7095 50.9886 48.7095C52.0813 48.7095 53.0776 48.4524 53.9774 47.9382C54.8987 47.4026 55.6272 46.642 56.1628 45.6564C56.6985 44.6494 56.9663 43.4817 56.9663 42.1533Z" fill="#FFFBD5"/>
        <rect x="21" y="135" width="46" height="46" rx="23" fill="#BE3830"/>
        <path d="M40.025 148.062H36.05C35.3182 148.062 34.725 148.656 34.725 149.388V166.613C34.725 167.344 35.3182 167.938 36.05 167.938H40.025C40.7568 167.938 41.35 167.344 41.35 166.613V149.388C41.35 148.656 40.7568 148.062 40.025 148.062Z" stroke="#FFFBD5" stroke-width="1.325" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M43.7924 148.163L47.4662 149.68C47.627 149.746 47.7732 149.844 47.8964 149.967C48.0196 150.09 48.1173 150.236 48.1841 150.396C48.2509 150.557 48.2853 150.729 48.2855 150.903C48.2857 151.077 48.2516 151.25 48.1852 151.41L41.35 166.613" stroke="#FFFBD5" stroke-width="1.325" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M50.2547 152.515L52.9303 155.454C53.0474 155.583 53.138 155.733 53.197 155.897C53.2559 156.061 53.282 156.235 53.2738 156.408C53.2656 156.582 53.2232 156.753 53.1492 156.91C53.0751 157.068 52.9707 157.209 52.842 157.326L41.1943 167.235" stroke="#FFFBD5" stroke-width="1.325" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M34.725 152.037H41.35" stroke="#FFFBD5" stroke-width="1.325" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M34.725 156.013H41.35" stroke="#FFFBD5" stroke-width="1.325" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M34.725 159.988H41.35" stroke="#FFFBD5" stroke-width="1.325" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="66" y="80" width="60" height="60" rx="30" fill="#BE3830"/>
        <path d="M96.0006 102.125C96.6063 102.125 97.1984 101.945 97.702 101.609C98.2057 101.272 98.5982 100.794 98.83 100.234C99.0618 99.6749 99.1224 99.0591 99.0043 98.465C98.8861 97.871 98.5944 97.3253 98.1661 96.897C97.7378 96.4687 97.1921 96.177 96.5981 96.0588C96.004 95.9407 95.3882 96.0013 94.8286 96.2331C94.269 96.4649 93.7907 96.8574 93.4542 97.3611C93.1177 97.8647 92.9381 98.4568 92.9381 99.0625C92.939 99.8745 93.2619 100.653 93.8361 101.227C94.4102 101.801 95.1887 102.124 96.0006 102.125Z" fill="#FFFBD5"/>
        <path d="M86.3751 102.169L86.3997 102.175L86.4226 102.182C86.4773 102.198 86.532 102.214 86.5867 102.231C87.6044 102.53 92.5438 103.922 96.0236 103.922C99.2572 103.922 103.75 102.719 105.187 102.31C105.33 102.255 105.476 102.208 105.625 102.169C106.664 101.896 107.375 102.951 107.375 103.916C107.375 104.871 106.516 105.326 105.649 105.653V105.668L100.442 107.295C99.9097 107.499 99.7675 107.707 99.698 107.887C99.4722 108.467 99.6526 109.613 99.7166 110.014L100.034 112.475L101.794 122.11C101.8 122.136 101.805 122.163 101.809 122.19L101.822 122.26C101.948 123.143 101.3 124 100.072 124C98.9997 124 98.5266 123.26 98.3215 122.253C98.3215 122.253 96.7903 113.636 96.0247 113.636C95.259 113.636 93.6819 122.253 93.6819 122.253C93.4768 123.26 93.0037 124 91.9319 124C90.7003 124 90.0517 123.139 90.1819 122.253C90.1933 122.178 90.207 122.103 90.2234 122.031L92.0079 112.476L92.3245 110.015C92.5537 108.581 92.3694 108.108 92.307 107.997C92.3053 107.994 92.3039 107.991 92.3026 107.989C92.2436 107.879 91.9745 107.634 91.3467 107.399L86.4642 105.692C86.4342 105.684 86.4046 105.674 86.3756 105.663C85.5006 105.335 84.6256 104.881 84.6256 103.917C84.6256 102.953 85.336 101.896 86.3751 102.169Z" fill="#FFFBD5"/>
        <line x1="61.1099" y1="68.991" x2="81.1099" y2="90.991" stroke="#BE3830" stroke-width="3"/>
        <line x1="57.0196" y1="145.865" x2="79.0196" y2="126.865" stroke="#BE3830" stroke-width="3"/>
      </svg>
    </div>
  </card>
</cards>

<cards class="cards cols4to1">
  <card v-for="component in componentData" :key="component.title" class="card type1">
    <h3 class="card-title custom-heading">
      <a :href="component.href" class="card-link">{{ component.title }}</a>
    </h3>
    <component :is="component.image.component" :aria-label="component.image.alt" class="card-image" />
    <p class="card-description">{{ component.description }}</p>
  </card>
</cards>

<div class="banner-container">
  <div class="banner-content-wrapper">
    <div class="banner-icon-column">
      <img src="/collaborate-icon.svg" alt="Collaborate icon" class="banner-icon"/>
    </div>

  <div class="banner-column">
    <h2 class="banner-title">Collaborate</h2>
    <p class="banner-content">Contributing to the WARP design system, requesting new components or adjustments to existing ones.</p>
    <a :href="`${baseUrl}collaborate/request-new-component`" class="banner-link collaborate">
      Collaborate with us
      <span class="vpi-arrow-right link-text-icon"></span>
    </a>
  </div>


  <div class="banner-icon-column">
      <img src="/get-in-touch-icon.svg" alt="Get in touch icon" class="banner-icon"/>
   </div>

   <div class="banner-column">
      <h2 class="banner-title">Get in touch</h2>
      <p class="banner-content">Need help or support? The best way to get in touch with the team is through Slack.</p>
      <div class="slack-section">
        <img src="/slack-icon.svg" alt="Slack icon" width="24px" class="slack-icon"/>
        <a href="https://sch-chat.slack.com/archives/C04P0GYTHPV" target="_blank" class="banner-link">#nmp-warp-design-system</a>
      </div>
    </div>
  </div>
</div>

<style scoped>
/* Cards styling */
.cards {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 640px) {
  .cards.cols4to1{
    grid-template-columns: repeat(4, 1fr);
  }
  .cards.cols2to1{
    grid-template-columns: repeat(2, 1fr);
  }
}
/* Title setups, these should probably live in custom.css if we wanna reuse these */
 .vp-font-size-1 {
  font-size: var(--vp-font-size-1);
  line-height: var(--vp-line-height-1);
}

 .vp-font-size-2 {
  font-size: var(--vp-font-size-2);
  line-height: var(--vp-line-height-2);
}
.vp-font-size-3 {
  font-size: var(--vp-font-size-3);
  line-height: var(--vp-line-height-3);
}
.vp-font-size-4 {
  font-size: var(--vp-font-size-4);
  line-height: var(--vp-line-height-4);
}
.card{
  display: flex;
  position: relative;
  border: 1px solid var(--vp-c-card-border, transparent);
}
.card:hover{
  --vp-c-card-border: var(--vp-c-brand-1)
}
.card.type1 {
  flex-direction: column;
}
.card.type2{
  flex-direction: row;
  background-color: var(--vp-c-bg-soft);
  justify-content: space-between;
  align-items: center;
  min-height: 280px;
  gap: 20px;
  padding: 20px 60px;
}

.card-title {
  position: static;
  border-top: 0;
  margin-top: 0;
  padding-top: 0;
}
.card.type1 .card-title{
  padding: 16px 16px 0 16px;
}
.card.type1 .card-description{
  padding: 0px 16px 16px 16px;
}

/* need to override the h2 coming from md styling */
h2.card-title {
  border-top: 0;
}
.card-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: bold;
  display: block;
}

.card-link::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.card-image {
  order: -1;
  background-color: var(--vp-c-bg-soft);
}

.card-description {

}

/* Banner styling */
.vp-doc.container .banner-container {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 0 23px;
}


.banner-container {
  background-color: var(--vp-c-bg-soft);
}

.banner-content-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  gap: 8px;
  align-items: start;
}

@media (min-width: 640px) {
  .banner-content-wrapper {
    padding: 40px 20px;
    grid-template-columns: .25fr 1.75fr .25fr 1.75fr;
  }
}

@media (min-width: 960px) {
  .banner-content-wrapper {
    padding: 40px 112px;
  }
}

@media (min-width: 1600px) {
  .banner-content-wrapper {
    padding: 40px 213px;
  }
}

@media (min-width: 1800px) {
  .banner-content-wrapper {
    padding: 40px 335px;
  }
}

.banner-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner-icon-column {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 640px) {
  .banner-icon-column {
    margin-top: 10px;
  }
}

.banner-icon {
  width: 60px;
  height: 60px;
}

.banner-title {
  margin: 0;
  border-top: none;
  font-size: 36px;
  font-weight: 700;
}

.banner-content {
  font-size: 18px;
}

@media (min-width: 960px) {
  .banner-content {
    max-width: 40ch;
  }
}

.vp-doc p {
  margin-top: 6px;
}


.vpi-arrow-right::after {
  content: '→';
  font-size: 16px;
  margin-left: 8px;
  vertical-align: middle;
  display: inline-block;
}

.banner-link {
  margin-top: 16px;
  text-decoration: none;
  color: var(--vp-c-brand-1);
}

.banner-link.collaborate {
  text-decoration: underline;
}

.banner-link:hover {
  text-decoration: underline;
}

.slack-section {
  display: flex;
  align-items: center;
}

.slack-icon {
  margin-right: 6px;
  align-self: flex-end;
}

.VPHero {
  margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1);
  padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 0px 24px;
  position: relative; /* Ensure the pseudo-element is positioned relative to this */
}

.VPHero::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100px;
  right: -100px;
  bottom: 0;
  background-image: url('./stars-background.svg');
  background-repeat: repeat-x;
  background-position: bottom;
  z-index: -1;
}

.VPHero.has-image .container {
  text-align: center;
}

.VPHero .container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1152px;
}

.VPHero .main {
  position: relative;
  z-index: 10;
  order: 2;
  flex-grow: 1;
  flex-shrink: 0;
}

.VPHero.has-image .name,
.VPHero.has-image .text {
  margin: 0 auto;
}

.VPHero .name {
  color: var(--vp-home-hero-name-color);
}

.VPHero .name,
.VPHero .text {
  max-width: 392px;
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
}

.VPHero .clip {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

.VPHero.has-image .tagline {
  margin: 0 auto;
}

.VPHero .tagline {
  padding-top: 8px;
  max-width: 392px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}

.VPHero.has-image .actions {
  justify-content: center;
}

.VPHero .actions {
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
  padding-top: 24px;
}

.VPHero .action {
  flex-shrink: 0;
  padding: 6px;
}

.VPHero .image {
  order: 1;
  margin: -76px -24px -48px;
}

.VPHero .image-container {
  position: relative;
  margin: 0 auto;
  width: 320px;
  height: 320px;
}

.VPHero .image-src {
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  max-width: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 0px 24px;
  }

  .VPHero .name,
  .VPHero .text {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }

  .VPHero .tagline {
    padding-top: 12px;
    max-width: 576px;
    line-height: 32px;
    font-size: 20px;
  }

  .VPHero .actions {
    padding-top: 32px;
  }

  .VPHero .image {
    margin: -108px -24px -48px;
  }

  .VPHero .image-container {
    width: 392px;
    height: 392px;
  }

}

@media (min-width: 960px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 0;
  }

  .VPHero.has-image .container {
    text-align: left;
  }

  .VPHero .container {
    flex-direction: row;
  }

  .VPHero.has-image .main {
    max-width: 592px;
  }

  .VPHero .main {
    order: 1;
    width: calc((100% / 3) * 2);
  }

  .VPHero.has-image .name,
  .VPHero.has-image .text {
    margin: 0;
  }

  .VPHero .name,
  .VPHero .text {
    line-height: 64px;
    font-size: 56px;
  }

  .VPHero.has-image .tagline {
    margin: 0;
  }

  .VPHero .tagline {
    line-height: 36px;
    font-size: 24px;
  }

  .VPHero.has-image .actions {
    justify-content: flex-start;
  }

  .VPHero .image {
    flex-grow: 1;
    order: 2;
    margin: 0;
    min-height: 100%;
  }

  .VPHero .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: translate(-32px, -32px);
  }

  .VPHero .image-bg {
    max-width: 495px;
    width: 100%;
  }


}

.dark .VPHero .image-bg {
  --vp-home-hero-image-background-image: linear-gradient(135deg, rgba(4, 121, 144, 0.25) 0%, rgba(138, 105, 156, 0.25) 100%);
  --vp-home-hero-image-filter: blur(32px);
}

</style>
