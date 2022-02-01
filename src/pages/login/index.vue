
<template>
  <div class="main">
    <v-btn icon-left="google" @click="loginWithGoogle()">
      Sign in with Google
    </v-btn>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  layout: 'index',
  middleware: ['domain'],
  mounted () {
    this.isloggedIn()
  },
  methods: {
    loginWithGoogle () {
      if (this.$store.getters['domain/domain'] === process.env.VUE_APP_BACKEND_SERVER_1) {
        this.$auth.loginWith('google_oauth_1')
      } else if (this.$store.getters['domain/domain'] === process.env.VUE_APP_BACKEND_SERVER_2) {
        this.$auth.loginWith('google_oauth_2')
      }
    },
    isloggedIn () {
      if (this.$store.state.auth.loggedIn) {
        Swal.fire({
          icon: 'success',
          title: '您已登入成功',
          showConfirmButton: false,
          timer: 1500
        })
        this.$router.push('/')
      }
    }
  }
}
</script>
<style scoped>
@media (max-width: 979px) {
  .main {
    padding-left: 5vw;
    padding-right: 5vw;
  }
}

@media (min-width: 980px) {
  .main {
    padding-left: 23vw;
    padding-right: 23vw;
  }
}
</style>
