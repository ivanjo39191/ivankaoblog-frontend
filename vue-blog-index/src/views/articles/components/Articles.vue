<template>
  <div class="articles">
    <p class="article-title" v-html="article.title"></p>
    <img class="article-banner" v-bind:src="article.banner"/>
    <p class="article-content" v-html="article.content"></p>
  </div>  
</template>


<script>
import { getArticleDetail } from '@/api/blog'
// import store from "@/store";

export default {
  name: "Articles",
  mounted() {
    this.getArticleDetail(this.$route.query.id)
  },
  data(){
    return{
        article : [],
        backendUrl : process.env.VUE_APP_BACKEND_SERVER,
    }
  },
  methods: {
    getArticleDetail(id) {
      return new Promise((resolve, reject) => {
        getArticleDetail(id)
          .then((response) => {
            console.log(JSON.stringify(response))
            this.article = response
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  // store,
};
</script>

<style>

.articles{
  text-align: left;
}

.article-title {
  font-size: 3.5rem;
}

.article-content {
  color:black;
}

.article-banner {
  display: flex;
  width: 65vw;
}

pre {
  background: #F0F0F0;
  border: 1px solid #CCCCCC;
  color: #333333;
  display: block;
  font-family: Courier New;
  font-size: 8pt;
  line-height: 120%;
  margin: 5px 0 0 20px;
  max-height: 200px;
  overflow: auto;
  padding: 10px 10px 10px 21px;
  width: 90%;
}

</style>