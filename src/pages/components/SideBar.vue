
<template>
  <div class="sidebar">
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
        <router-link to="/news">
          最新活動
        </router-link>
      </b-nav-item>
      <b-nav-item class="dark">
        <router-link to="/travel">
          推薦旅程
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/place">
          熱門景點
        </router-link>
      </b-nav-item>
      <b-nav-item class="dark">
        <router-link to="/expert">
          旅遊達人
        </router-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    msg: String
  }
}
</script>
<style>

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-item {
  padding: 1vh;
}

.dark {
  background-color: #e6e6e6;
}

.sidebar {
  height: 100%;
  width: 15vw;
  background-color: #fff;
  border-style: solid;
  border-color: #fff #f2f2f2 #fff #fff;
  text-align: center;
}

</style>
