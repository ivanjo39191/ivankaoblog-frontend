<template>
  <div class="app-navbar">
    <transition name="fade">
      <keep-alive>
        <div class="navbar-main">
          <router-link to="/">
            <div class="logo">
              Logo
            </div>
          </router-link>
          <div class="login">
            <Login />
          </div>
        </div>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Login from '@/pages/login/index.vue'

export default {
  name: 'AppNavbar',
  components: {
    Login
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@media (max-width: 750px) {
  .navbar-main {
    display: grid;
    position: fixed;
    height: 3vh;
    width: 100%;
    background-color: #fff;
    z-index: 900;
  }

  .navbar-left {
    display: grid;
    justify-items: center;
    align-items: center;
  }

  .navbar-right-top {
    display: none;
  }

  .navbar-right {
    display: none;
  }
}

@media (min-width: 750px) {
  .navbar-main {
    display: flex;
    position: fixed;
    align-items: center;
    height: 6.6vh;
    background-color: #fff;
    width: 100%;
    padding-left: 23vw;
    padding-right: 23vw;
    z-index: 900;
  }

  .navbar-main > a {
    text-decoration: none;
    color: #000;
  }

  .login {
    margin-left: auto;
  }

  .login > div {
    margin-right: 1vw;
  }

  .logo {
    margin-left: 1vw;
  }
}

</style>
