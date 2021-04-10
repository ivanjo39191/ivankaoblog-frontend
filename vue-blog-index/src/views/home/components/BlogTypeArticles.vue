


<template>
  <div class="blog-type-articles row">
    <div class="article col-md-4 col-xs-6" v-bind:key="article.id" v-for="article in articles.slice(0, 10)">
      <p>{{ article.title }}</p>
    </div>
  </div>
</template>

<script>
import { getBlogTitle } from '@/api/blog'
// import store from "@/store";

export default {
  name: "BlogTypeArticles",
  mounted() {
    this.getBlogTitle()
  },
  data(){
    return{
        articles : [],
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

.blog-type-articles {
  text-align: left;
}

</style>