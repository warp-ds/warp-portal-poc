<template>
  <footer class="footer">
    <div class="footer-column logo-column">
      <img src="/warp-logo.svg" alt="Warp Logo" width="122" />
    </div>
    <div class="footer-column">
      <h3 class="footer-column-title">Collaborate</h3>
      <a class="footer-link" :href="`${baseUrl}collaborate/request-new-component`">Request new component</a>
      <a class="footer-link" :href="`${baseUrl}collaborate/request-component-changes`">Reuqest component changes</a>
    </div>
    <div class="footer-column">
      <h3 class="footer-column-title">Help</h3>
      <a class="footer-link" :href="`${baseUrl}help/support`">Support</a>
      <a class="footer-link" :href="`${baseUrl}help/report-bugs`">Report bugs/errors</a>
    </div>
  </footer>
</template>

<script setup>
const baseUrl = import.meta.env.BASE_URL;
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #0F1728;
  width: 100%;
  position: relative;
}
@media (min-width: 960px) {
  .has-sidebar ~ .footer {
  width: calc(100% - var(--vp-sidebar-width, 300px));
  margin-left: var(--vp-sidebar-width, 300px);
}
}
@media (min-width: 1440px) {
  .has-sidebar ~ .footer {
    width: calc(100% - ((100% - (var(--vp-layout-max-width) - 64px)) / 2 + var(--vp-sidebar-width) - 32px));
    margin-left: calc((100% - (var(--vp-layout-max-width) - 64px)) / 2 + var(--vp-sidebar-width) - 32px); 
  }
}

.footer::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 104px;
  background: url('stars-background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  pointer-events: none;
}

.footer::after {
  content: '';
  position: absolute;
  top: -8px;
  left: 0;
  right: 0;
  width: 100%;
  height: 8px;
  background: url('hero-wavy-line.svg');
  background-size: cover;
  background-repeat: no-repeat;
  transform: scaleY(-1);
  z-index: 1;
  pointer-events: none;
}

.footer-column {
  flex: 1;
  margin: 0 20px;
  z-index: 2;
}

.footer-column-title {
  font-size: 14px;
  font-weight: 700;
  color: #F6D553;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.footer-link {
  display: block;
  margin-bottom: 8px;
  color: #FFFBD5;
  font-size: 16px;
}

.footer-link:hover {
  text-decoration: underline;
}

.logo-column {
  display: flex;
  justify-content: flex-start;
}

@media (max-width: 960px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .footer-column {
    margin: 12px 0;
    text-align: left;
    width: 100%;
  }

  .footer-link {
    font-size: 14px;
  }

  .footer-column-title {
    font-size: 12px;
  }
}
</style>