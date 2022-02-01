
<template>
  <div class="main">
    {{ $auth.user.email }}
    {{ user }}
  </div>
</template>

<script>
import { googleUserInfo } from '@/api/user'

export default {
  layout: 'index',
  middleware: [
    'auth'
  ],
  data () {
    return {
      user: null
    }
  },
  mounted () {
    this.googleUserInfo()
  },
  methods: {
    googleUserInfo () {
      return new Promise((resolve, reject) => {
        googleUserInfo(this.$axios, this.$store.getters['domain/domain'])
          .then((response) => {
            // console.log(JSON.stringify(response))
            this.user = response
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
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
