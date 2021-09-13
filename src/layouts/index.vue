<template>
  <div class="app-wrapper">
    <div class="header">
      <app-navbar />
      <app-header />
    </div>
    <div class="main">
      <app-main />
    </div>
    <div class="footer">
      <app-footer />
    </div>
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'Layout',
  components: {
    AppMain,
    AppHeader,
    AppNavbar,
    AppFooter
  }

}
</script>

<style lang="scss" scoped>
@media (max-width: 750px) {
  .app-wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 10vh auto  15vh;
  }

  .header {
    grid-column: span 12;
  }

  .main {
    grid-column: span 12;
  }

  .footer {
    grid-column: span 12;
  }
}

@media (min-width: 750px) {
  .app-wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 12.6vh auto  15vh;
  }

  .header {
    grid-column: span 12;
  }

  .main {
    grid-column: span 12;
  }

  .footer {
    grid-column: span 12;
  }
}

</style>
