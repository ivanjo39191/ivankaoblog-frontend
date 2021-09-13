<template>
  <div class="app-navbar">
    <transition name="fade">
      <keep-alive>
        <div class="container-fuild">
          <b-navbar toggleable="sm" type="dark" variant="dark">
            <b-navbar-brand>
              <router-link to="/">
                IvanKaoBlog
              </router-link>
            </b-navbar-brand>
            <b-nav-form>
              <b-form-input class="mr-sm-2" placeholder="Search" />
              <!-- <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button> -->
            </b-nav-form>
            <b-navbar-toggle target="nav-text-collapse" />
            <b-collapse id="nav-text-collapse" is-nav>
              <b-navbar-nav class="ms-auto">
                <b-nav-item>
                  <router-link to="/">
                    Home
                  </router-link>
                </b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav>
                <b-nav-item>
                  <router-link to="/profile/index">
                    profile
                  </router-link>
                </b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav>
                <b-nav-item>
                  <router-link to="/test/page1">
                    page1
                  </router-link>
                </b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav>
                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="登入登出">
                  <b-dropdown-item divided @click.native="logout">
                    登出
                  </b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  props: {
    msg: String
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout () {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* The navbar container */

/* or use fixed="top" */
.navbar {
  z-index: 1;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #282c34;
  color: white;
  font-family: 'Exo 2', sans-serif;
  padding: 2em;
}

li {
  list-style-type: none;
}
</style>
