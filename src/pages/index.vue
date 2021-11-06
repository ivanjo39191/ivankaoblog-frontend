<template>
  <div class="home">
    <div class="home-carousel">
      <HomeCarousel />
    </div>
    <div class="main">
      <div class="home-subnavbar">
        <SubNavbar />
      </div>
      <div class="home-latest">
        <Latest />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from './home/components/HomeCarousel'
import SubNavbar from './home/components/SubNavbar'
import Latest from './home/components/Latest'
export default {
  name: 'Home',
  components: {
    HomeCarousel,
    SubNavbar,
    Latest
  },
  layout: 'index'
}

</script>
<style scoped>
.main {
  padding-left: 23vw;
  padding-right: 23vw;
}
</style>
