<template>
  <div class="articles">
    <p class="article-title" v-html="article.title" />
    <img class="article-banner" :src="article.banner">
    <p class="article-content" v-html="article.content" />
  </div>
</template>

<script scoped>
import { getArticleDetail } from '@/api/blog'
// import store from "@/store";

export default {
  name: 'Articles',
  data () {
    return {
      article: [],
      backendUrl: process.env.VUE_APP_BACKEND_SERVER
    }
  },
  mounted () {
    this.getArticleDetail(this.$route.query.id)
  },
  methods: {
    getArticleDetail (id) {
      return new Promise((resolve, reject) => {
        getArticleDetail(id)
          .then((response) => {
            console.log(JSON.stringify(response))
            this.article = response
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
@import '../../../utils/prism.css';

.articles {
  padding-top: 10em;
  text-align: left;
}

.article-title {
  font-size: 3.5rem;
}

.article-content {
  padding-top: 10vh;
  color: black;
}

.article-banner {
  display: flex;
  width: 65vw;
}

.article-content >>> h1 {
  color: #7dc8ff;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 100;
}

.article-content >>> h2 {
  color: #7dc8ff;
  font-size: 2rem;
}

.article-content >>> h3 {
  color: #7dc8ff;
  font-size: 1.5rem;
}

.article-content >>> h4 {
  color: #bbb;
}

.article-content >>> p {
  color: #bbb;
  font-size: 1.3125rem;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 100;
}

.article-content >>> li {
  color: #bbb;
}

/* Code blocks */
.article-content >>> code,
.article-content >>> pre {
  color: #f8f8f2;
  background: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
.article-content >>> pre {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 0.3em;
}

.article-content >>> :not(pre) > code,
.article-content >>> pre {
  background: #272822;
}

/* Inline code */
.article-content >>> :not(pre) > code {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

</style>
