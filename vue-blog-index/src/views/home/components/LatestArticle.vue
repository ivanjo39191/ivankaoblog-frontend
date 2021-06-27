


<template>
  <div class="news row">
    <div class="col-md-6 col-xs-12">
      <div class="article" v-bind:key="article.id" v-for="article in articles.slice(0, 1)">
        <p class="title-first">{{ article.title }}</p>
        <div class="article-banner">
          <img v-bind:src="backendUrl + article.banner"/>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xs-12">
      <div class="article" v-bind:key="article.id" v-for="article in articles.slice(1, 8)">
        <p calss="title">{{ article.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getBlogTitle } from '@/api/blog'
// import store from "@/store";

export default {
  name: "LatestArticle",
  mounted() {
    this.getBlogTitle()
  },
  data(){
    return{
        articles : [],
        backendUrl : process.env.VUE_APP_BACKEND_SERVER,
    }
  },
  methods: {
    getBlogTitle() {
      return new Promise((resolve, reject) => {
        getBlogTitle()
          .then((response) => {
            console.log(JSON.stringify(response))
            this.articles = response
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // goUserTravel(data) {
    //   // alert(data.id)
    //   // alert(JSON.stringify(data))
    //   this.$router.push({
    //     name: "usertravel", //use name for router push
    //     params: { id:data.id, data: data }
    //   });
    // }
  },
  // store,
};
</script>

<style scoped>

.top{
  margin-top:10vh;
}
.news {
  border-right: 1px solid rgba(230, 230, 230, 1);
  padding-bottom: 1vh;
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

.article-banner {
  display: flex;
  justify-content: center;
  height: 15rem;
  width: 20rem;
}

.article-banner > img {
  display: flex;
  justify-self: center;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
}
</style>