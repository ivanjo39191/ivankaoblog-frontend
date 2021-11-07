<template>
  <div class="subnavbar-latest">
    <div v-for="item in articleItems" :key="item.id">
      <router-link :to="{ name: 'article', query: {id: item.id, title: item.title}}">
        <div v-if="item.banner !== null" class="subnavbar-image">
          <img :src="backendUrl + item.banner">
          <!-- <img :src="backendUrl + item.banner + '?cache=' + Date.now()"> -->
        </div>
        <div class="subnavbar-title">
          {{ item.title }}
        </div>
        <div class="subnavbar-subtitle">
          {{ item.subtitle }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Latest',
  data () {
    return {
      backendUrl: process.env.VUE_APP_BACKEND_SERVER,
      appTitle: 'Latest',
      sidebar: false
    }
  },
  computed: {
    articleItems () {
      return this.$store.getters['blog/getLatest']
    }

  },
  mounted () {
    this.getBlog()
  },
  methods: {
    getBlog () {
      this.$store.dispatch('blog/switchLatest', '')
    }
  }
}
</script>
<style>
@media (max-width: 979px) {
  .subnavbar-latest {
    display: grid;
    align-items: start;
    padding-bottom: 10vh;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    min-height: 50vh;
  }
}

@media (min-width: 980px) {
  .subnavbar-latest {
    display: grid;
    align-items: start;
    grid-template-columns: 17vw 17vw 17vw;
    gap: 3vh 1vw;
    padding-bottom: 10vh;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    min-height: 50vh;
  }
}

.subnavbar-image > img {
  /* width: 17vw;
  height: 17vh; */
  max-width: 100%;
  max-height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-bottom: 1vh;
}

.subnavbar-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.subnavbar-subtitle {
  font-size: 1.125rem;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 300;
}

a {
  color: #292929;
  text-decoration: none;
}

</style>
