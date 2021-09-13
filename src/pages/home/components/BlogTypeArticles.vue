


<template>
  <div class="blog-type-articles row">
    <div class="article col-md-4 col-xs-6">
      <h4>Django</h4>
      <br>
      <div class="article-obj" v-bind:key="article.id" v-for="article in django.slice(0, 5)">
        <router-link :to="{ path: '/articles', query: { id: article.id }}">
          <p>{{ article.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="article col-md-4 col-xs-6">
      <h4>Linux</h4>
      <br>
      <div class="article-obj" v-bind:key="article.id" v-for="article in linux.slice(0, 5)">
        <router-link :to="{ path: '/articles', query: { id: article.id }}">
          <p>{{ article.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="article col-md-4 col-xs-6">
      <h4>開發日記</h4>
      <br>
      <div class="article-obj" v-bind:key="article.id" v-for="article in my.slice(0, 5)">
        <router-link :to="{ path: '/articles', query: { id: article.id }}">
          <p>{{ article.title }}</p>
        </router-link>
      </div>
    </div>
    <hr />
    <div class="article col-md-4 col-xs-6">
      <h4>Vue</h4>
      <br>
      <div class="article-obj" v-bind:key="article.id" v-for="article in vue.slice(0, 5)">
        <router-link :to="{ path: '/articles', query: { id: article.id }}">
          <p>{{ article.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="article col-md-4 col-xs-6">
      <h4>CSS</h4>
      <br>
      <div class="article-obj" v-bind:key="article.id" v-for="article in css.slice(0, 5)">
        <router-link :to="{ path: '/articles', query: { id: article.id }}">
          <p>{{ article.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="article col-md-4 col-xs-6">
      <h4>做題記錄</h4>
      <br>
      <div class="article-obj" v-bind:key="article.id" v-for="article in leetcode.slice(0, 5)">
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
    this.getBlogTypeTitle('開發日記', '日記').then(response => (this.my = response))
    this.getBlogTypeTitle('Django', 'Django 筆記').then(response => (this.django = response))
    this.getBlogTypeTitle('Linux', 'Linux 筆記').then(response => (this.linux = response))
    this.getBlogTypeTitle('Vue', 'Vue 筆記').then(response => (this.vue = response))
    this.getBlogTypeTitle('CSS', 'CSS 筆記').then(response => (this.css = response))
    this.getBlogTypeTitle('算法解題', 'LeetCode').then(response => (this.leetcode = response))
  },
  data(){
    return{
      articles : [],
      my: [],
      django: [],
      linux: [],
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