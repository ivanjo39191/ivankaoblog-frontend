<template>
  <div class="app-navbar">
    <transition name="fade">
      <keep-alive>
        <div class="navbar-main">
          <div class="logo">
            <router-link to="/">
              {{ item.blogname }}
            </router-link>
          </div>
          <div class="navbar-right">
            <div>
              <router-link :to="{ name: 'login'}">
                <v-btn class="login">
                  Login
                </v-btn>
              </router-link>
            </div>
            <div>
              <v-btn icon-left="google" @click="$auth.logout();afterLogout();">
                logout
              </v-btn>
            </div>
            <!-- <div class="userinfo">
              <router-link to="/login/userinfo">
                UserInfo
              </router-link>
            </div> -->
          </div>
        </div>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { getBlogSetting } from '@/api/blog'
import Swal from 'sweetalert2'
export default {
  name: 'AppNavbar',
  data () {
    return {
      item: []
    }
  },
  async mounted () {
    await this.getBlogSetting()
  },
  methods: {
    getBlogSetting () {
      // alert(this.$store.getters['domain/domain'])
      return new Promise((resolve, reject) => {
        getBlogSetting(this.$store.getters['domain/domain'])
          .then((response) => {
            this.item = response[0]
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    afterLogout () {
      Swal.fire({
        icon: 'success',
        title: '您已登出',
        showConfirmButton: false,
        timer: 1500
      })
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@media (max-width: 750px) {
  .navbar-main {
    display: flex;
    position: fixed;
    align-items: center;
    height: 6.6vh;
    background-color: #fff;
    width: 100%;
    padding-left: 5vw;
    padding-right: 5vw;
    z-index: 900;
  }

  .navbar-left {
    display: grid;
    // justify-items: center;
    align-items: center;
  }

  .navbar-right-top {
    display: none;
  }

  .navbar-right {
    margin-left: auto;
    display: flex;
  }

  .navbar-right > div {
    margin-right: 1vw;
  }

  .logo {
    margin-left: 1vw;
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
    padding-left: 15vw;
    padding-right: 15vw;
    z-index: 900;
  }

  .navbar-main > a {
    text-decoration: none;
    color: #000;
  }

  .navbar-right {
    margin-left: auto;
    display: flex;
  }

  .navbar-right > div {
    margin-right: 1vw;
  }

  .logo {
    margin-left: 1vw;
  }
}

</style>
