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
      <a class="footer-link" :href="`${baseUrl}help/faq`">FAQ</a>
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
  background-color: #f6f6f7;
  width: 100%;
}
.has-sidebar ~ .footer {
  width: calc(100% - 264px);
  margin-left: 264px;
}
.footer-column {
  flex: 1;
  margin: 0 20px;
}
.footer-column-title {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}
.footer-link {
  display: block;
  margin-bottom: 8px;
}

.footer-link:hover {
  text-decoration: underline;
}
.logo-column {
  display: flex;
  justify-content: flex-start;
}
</style>