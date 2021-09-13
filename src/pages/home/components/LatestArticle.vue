
<template>
  <div class="news row">
    <h2>最新文章</h2>
    <div class="col-md-12 col-xs-12">
      <div v-for="article in articles.slice(0, 1)" :key="article.id" class="article">
        <router-link :to="{ path: '/articles', query: { id: article.id }}">
          <p class="title-first">
            {{ article.title }}
          </p>
          <div class="latest-banner">
            <img :src="backendUrl + article.banner + '?cache=' + Date.now()">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getBlogTitle } from '@/api/blog'
// import store from "@/store";

export default {
  name: 'LatestArticle',
  data () {
    return {
      articles: [],
      backendUrl: process.env.VUE_APP_BACKEND_SERVER
    }
  },
  mounted () {
    this.getBlogTitle()
  },
  methods: {
    getBlogTitle () {
      return new Promise((resolve, reject) => {
        getBlogTitle()
          .then((response) => {
            console.log(JSON.stringify(response))
            this.articles = response
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
    // goUserTravel(data) {
    //   // alert(data.id)
    //   // alert(JSON.stringify(data))
    //   this.$router.push({
    //     name: "usertravel", //use name for router push
    //     params: { id:data.id, data: data }
    //   });
    // }
  }
  // store,
}
</script>

<style scoped>

.top {
  margin-top: 10vh;
}

.news {
  border-right: 1px solid rgba(230, 230, 230, 1);
  padding-bottom: 1vh;
  text-align: left;
}

.article {
  text-align: left;
  padding-left: 1vw;
}

.title-first {
  font-size: 22px;
}

.title {
  font-size: 12px;
}

.latest-banner {
  display: flex;

  /* justify-content: center; */

  /* height: 15rem; */

  /* width: 20rem; */
}

.latest-banner > img {
  display: flex;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
}
</style>
