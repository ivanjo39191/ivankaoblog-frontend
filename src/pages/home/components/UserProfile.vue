<template>
  <div>
    <h1>UserInfo</h1>
    <h3>user name:</h3>
    <p>{{ userName }}</p>
    <h3>Introduction:</h3>
    <p>{{ userIntroduction }}</p>
    <h3>Roles:</h3>
    <p>{{ userRoles }}</p>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'UserProfile',
  data () {
    return {
      userName: store.getters.name,
      userIntroduction: store.getters.introduction,
      userRoles: store.getters.roles
    }
  },
  store
}
</script>
