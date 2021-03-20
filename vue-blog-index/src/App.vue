<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <transition name="fade">
      <keep-alive>
      <div>
        <router-link to="/index">Home</router-link><br>
        <router-link to="/index/home">index/Home</router-link><br>
        <router-link to="/profile/index">profile</router-link><br>
        <router-link to="/aprofile/index">aprofile</router-link><br>
        <router-link to="/profile/hello">pofilehello</router-link><br>
        <router-link to="/test1">test1</router-link><br>
        <router-view></router-view>
        <el-dropdown-item divided @click.native="logout">
          <span style="display:block;">Log Out</span>
        </el-dropdown-item>
      </div>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
