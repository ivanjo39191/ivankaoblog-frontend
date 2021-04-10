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
import store from "@/store";

export default {
  name: "Info",
  data () {
      return {
      userName: store.getters.name,
      userIntroduction: store.getters.introduction,
      userRoles: store.getters.roles,
      }
  },
  store
}
</script>

<style scoped>

.top-info {
  background-color:rgb(250, 250, 250);
}

.bottom-info {
  background-color:rgb(250, 250, 250);
}
</style>