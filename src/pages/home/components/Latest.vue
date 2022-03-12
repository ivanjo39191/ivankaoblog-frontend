<template>
  <div>
    <div v-if="loading" class="subnavbar-latest">
      <vcl-instagram />
      <vcl-instagram />
      <vcl-instagram />
      <vcl-instagram />
      <vcl-instagram />
      <vcl-instagram />
    </div>
    <div class="subnavbar-latest">
      <div v-for="item in articleItems" :key="item.id" class="subnavbar-latest-obj">
        <router-link :to="{ name: 'article', query: {id: item.id, title: item.title}}">
          <v-card
            class="mx-auto"
          >
            <v-img
              class="subnavbar-image"
              :src="backendUrl + item.banner"
            >
              <v-card-title>
                <div v-if="item.banner == null">
                  {{ item.title }}
                  <div />
                </div>
              </v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <p class="subnavbar-title">
                {{ item.title }}
              </p>
              <p class="subnavbar-subtitle">
                {{ item.subtitle }}
              </p>
            </v-card-text>
          </v-card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { VclInstagram } from 'vue-content-loading'
export default {
  name: 'Latest',
  components: {
    VclInstagram
  },
  data () {
    return {
      backendUrl: this.$store.getters['domain/domain'],
      appTitle: 'Latest',
      sidebar: false,
      loading: true
    }
  },
  computed: {
    articleItems () {
      return this.$store.getters['blog/getLatest']
    }

  },
  async mounted () {
    this.start()
    await this.getBlog()
    this.finish()
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    getBlog () {
      const obj = {
        typeName: '',
        backendUrl: this.$store.getters['domain/domain']
      }
      this.$store.dispatch('blog/switchLatest', obj)
    }
  }
}
</script>
<style>
@media (max-width: 979px) {
  .loading-page {
    display: grid;
    align-items: center;
    justify-items: center;
  }

  .subnavbar-latest {
    display: grid;
    align-items: start;
    padding-bottom: 10vh;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    min-height: 50vh;
  }

  .subnavbar-latest-obj {
    margin-bottom: 5vh;
  }

  .subnavbar-image {
    background-color: rgba(247, 247, 247);
    max-width: 100%;
    max-height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    margin-bottom: 1vh;
    width: 90vw;
  }

  .subnavbar-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5vh;
  }

  .subnavbar-subtitle {
    font-size: 1.125rem;
    color: rgba(0, 0, 0, 0.54);
    font-weight: 300;
  }
}

@media (min-width: 980px) {
  .loading-page {
    display: grid;
    align-items: center;
    justify-items: center;
  }

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

.subnavbar-image {
  background-color: rgba(247, 247, 247);
  max-width: 100%;
  max-height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-bottom: 1vh;
}

.subnavbar-title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5vh;
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
