
<template>
  <div>
    <div v-if="loading" class="loading-page">
      <v-progress-circular
        indeterminate
        color="primary"
      />
    </div>
    <v-carousel
      v-if="items.length && loading !== true"
      cycle
      height="75vh"
      hide-delimiter-background
      :show-arrows="false"
    >
      <v-carousel-item v-for="item in items" :key="item.id" :src="item.banner">
        <div class="carousel-text">
          <div class="carousel-title">
            {{ item.title }}
          </div>
          <div class="carousel-subtitle">
            {{ item.subtitle }}
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { getHomeCarousel } from '@/api/blog'

export default {
  name: 'HomeCarousel',
  data () {
    return {
      items: [],
      loading: true
    }
  },
  async mounted () {
    this.start()
    await this.getHomeCarousel()
    this.finish()
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    getHomeCarousel () {
      return new Promise((resolve, reject) => {
        getHomeCarousel(this.$store.getters['domain/domain'])
          .then((response) => {
            // console.log(JSON.stringify(response))
            this.items = response
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
  .loading-page {
    display: grid;
    height: 75vh;
    align-items: center;
    justify-items: center;
  }

  .carousel-height {
    margin-bottom: 0;
  }

  .carousel-text {
    display: grid;
    justify-items: center;
    margin-top: 30vh;
    margin-left: -50vw;
    color: #fff;
    text-shadow: 0.1em 0.1em 0.05em #333;
  }

  .carousel-title {
    font-size: 2.5rem;
  }

  .carousel-subtitle {
    font-size: 1.5rem;
    margin-top: 5vh;
    margin-left: 15vw;
    margin-right: 15vw;
    text-align: center;
  }

</style>
