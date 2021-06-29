


<template>
  <div class="blog-type-articles row">
    <div class="article col-md-4 col-xs-6">
      <h4>Django</h4>
      <br>
      <div class="article-obj" v-bind:key="article.id" v-for="article in django.slice(0, 10)">
        <router-link :to="{ path: '/articles', query: { id: article.id }}">
          <p>{{ article.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="article col-md-4 col-xs-6">
      <h4>OS</h4>
      <br>
      <div class="article-obj" v-bind:key="article.id" v-for="article in os.slice(0, 10)">
        <router-link :to="{ path: '/articles', query: { id: article.id }}">
          <p>{{ article.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="article col-md-4 col-xs-6">
      <h4>個人記事</h4>
      <br>
      <div class="article-obj" v-bind:key="article.id" v-for="article in my.slice(0, 10)">
        <router-link :to="{ path: '/articles', query: { id: article.id }}">
          <p>{{ article.title }}</p>
        </router-link>
      </div>
    </div>
    <hr />
    <div class="article col-md-4 col-xs-6">
      <h4>Vue</h4>
      <br>
      <div class="article-obj" v-bind:key="article.id" v-for="article in vue.slice(0, 10)">
        <router-link :to="{ path: '/articles', query: { id: article.id }}">
          <p>{{ article.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="article col-md-4 col-xs-6">
      <h4>CSS</h4>
      <br>
      <div class="article-obj" v-bind:key="article.id" v-for="article in css.slice(0, 10)">
        <router-link :to="{ path: '/articles', query: { id: article.id }}">
          <p>{{ article.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="article col-md-4 col-xs-6">
      <h4>LeetCode</h4>
      <br>
      <div class="article-obj" v-bind:key="article.id" v-for="article in leetcode.slice(0, 10)">
        <router-link :to="{ path: '/articles', query: { id: article.id }}">
          <p>{{ article.title }}</p>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import { getBlogTitle, getBlogTypeTitle } from '@/api/blog'
// import store from "@/store";

export default {
  name: "BlogTypeArticles",
  mounted() {
    this.getBlogTitle();
    this.getBlogTypeTitle('個人記事').then(response => (this.my = response))
    this.getBlogTypeTitle('Django').then(response => (this.django = response))
    this.getBlogTypeTitle('Linux 相關').then(response => (this.os = response))
    this.getBlogTypeTitle('Vue').then(response => (this.vue = response))
    this.getBlogTypeTitle('CSS').then(response => (this.css = response))
    this.getBlogTypeTitle('LeetCode').then(response => (this.leetcode = response))
  },
  data(){
    return{
      articles : [],
      my: [],
      django: [],
      os: [],
      vue: [],
      css: [],
      leetcode: []
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
    getBlogTypeTitle(type) {
      return new Promise((resolve, reject) => {
        getBlogTypeTitle(type)
          .then((response) => {
            console.log(JSON.stringify(response))
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
  }
};
</script>

<style scoped>

.blog-type-articles {
  text-align: left;
}

</style>