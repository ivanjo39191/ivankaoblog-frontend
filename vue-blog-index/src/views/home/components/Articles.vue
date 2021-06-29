<template>
  <div class="articles content-box">
    <div class="row d-flex justify-content-left">
      <div class="col-12" v-bind:key="article.id" v-for="article in articles.slice(0,8)">
        <router-link :to="{ path: '/articles', query: { id: article.id }}">
          <p class="text title">{{ article.title }}</p>
          <p class="text content">{{ article.content|strippedContent|truncate(100, '...') }}</p>
        </router-link>
      </div>
    </div>
  </div>  
</template>


<script>
import { getBlog } from '@/api/blog'
// import store from "@/store";

export default {
  name: "Articles",
  mounted() {
    this.getBlog()
  },
  data(){
    return{
        articles : [],
    }
  },
  methods: {
    getBlog() {
      return new Promise((resolve, reject) => {
        getBlog()
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
    // strippedString(originalString) {
    //   originalString = originalString.replace(/(<([^>]+)>)/gi, "");
    // }
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

.articles{
  text-align: left;
}


.text, a:link, a:visited {
  color:#000000;
  text-decoration:none;
  text-align: left;
}


.title {
  font-size: 22px;
}

.content {
  color:gray;
}

</style>