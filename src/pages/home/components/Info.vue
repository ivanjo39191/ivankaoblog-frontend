<template>
  <div class="info">
    <div class="top-info">
      <h1>UserInfo</h1>
      <h5>user name:</h5>
      <p>{{ userName }}</p>
      <h5>Introduction:</h5>
      <p>{{ userIntroduction }}</p>
      <h5>Roles:</h5>
      <p>{{ userRoles }}</p>
    </div>
    <div class="bottom-info">
      <h1>UserInfo</h1>
      <h5>user name:</h5>
      <p>{{ userName }}</p>
      <h5>Introduction:</h5>
      <p>{{ userIntroduction }}</p>
      <h5>Roles:</h5>
      <p>{{ userRoles }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      userName: this.$store.getters['user/name'],
      userIntroduction: this.$store.getters['user/introduction'],
      userRoles: this.$store.getters['user/roles']
    }
  }
}
</script>

<style scoped>

.top-info {
  background-color: rgb(250, 250, 250);
}

.bottom-info {
  background-color: rgb(250, 250, 250);
}
</style>
