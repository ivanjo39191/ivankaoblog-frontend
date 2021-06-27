<template>
  <div>
    <h1>IvanKao技術部落格</h1>
    <div>
      <h3>作者</h3>
      <p>IvanKao</p>
    </div>
    <h3>簡介</h3>
    <p>我是IvanKao，這是我的技術部落格，正在努力邁向全端工程師，前端 Vue.js、後端 Python </p>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "BlogInfo",
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

 .left {
  float: left;
  width: 0.7em;
}


</style>