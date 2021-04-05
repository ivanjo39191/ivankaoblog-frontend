<template>
  <div class="app-wrapper">
    <div class="container-fuild">
      <app-navbar />
      <app-header />
      <app-main />
      <app-footer />
    </div>
  </div>
</template>

<script>
import { AppMain, AppHeader, AppNavbar, AppFooter } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    AppHeader,
    AppNavbar,
    AppFooter
  },

}
</script>

<style lang="scss" scoped>

</style>
