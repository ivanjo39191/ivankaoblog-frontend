<template>
  <div class="slidebar">
    <b-navbar-brand id="title">
      <b-icon v-b-toggle.sidebar-1 icon="list" />TTime
    </b-navbar-brand>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow no-header>
      <b-navbar-brand id="title">
        <b-icon v-b-toggle.sidebar-1 icon="list" />TTime
      </b-navbar-brand>
      <b-nav id="nav" vertical tag="h5">
        <b-nav-item>
          <router-link to="/">
            首頁
          </router-link>
        </b-nav-item>
        <b-nav-item class="dark">
          <router-link to="/gotravel">
            建立旅程
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/">
            最新活動
          </router-link>
        </b-nav-item>
        <b-nav-item class="dark">
          <router-link to="/">
            推薦旅程
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/place">
            熱門景點
          </router-link>
        </b-nav-item>
        <b-nav-item class="dark">
          <router-link to="/">
            旅遊達人
          </router-link>
        </b-nav-item>
      </b-nav>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'SlideBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#title {
  color: #b3b3b3;
  padding-top: 2vh;
  font-weight: bold;
  font-size: 5vh;
}

</style>
