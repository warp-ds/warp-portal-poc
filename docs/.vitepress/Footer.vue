<template>
  <footer class="footer">
    <div class="footer-column logo-column">
      <img src="/warp-logo.svg" alt="Warp Logo" width="122" />
    </div>
    <div class="footer-column">
      <h3 class='footer-column-title'>Collaborate</h3>
      <ul>
        <li class='footer-link'><a :href="`${$base}/collaborate/contribute/#adding-a-new-component`">Request new component</a></li>
        <li class='footer-link'><a :href="`${$base}/collaborate/contribute/#requesting-changes-to-an-existing-component`">Request changes to a component</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h3 class='footer-column-title'>Help</h3>
      <ul>
        <li class='footer-link'><a :href="`${$base}/help/support`">Support</a></li>
        <li class='footer-link'><a :href="`${$base}/help/report-bugs`">Report bugs/errors</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
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
.footer-link:hover {
  text-decoration: underline;
}
.logo-column {
  display: flex;
  justify-content: flex-start;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 8px;
}
h3 {
  margin-bottom: 12px;
}
</style>
