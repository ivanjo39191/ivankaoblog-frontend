<template>
  <div class="article">
    <div class="article-subnavbar">
      <SubNavbar />
    </div>
    <div class="main">
      <div class="article-content">
        <h1 class="title">
          {{ article.title }}
        </h1>
        <div class="subtitle">
          {{ article.subtitle }}
        </div>
        <div class="image">
          <img :src="article.banner">
        </div>
        <div class="content" v-html="article.content" />
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleDetail } from '@/api/blog'
// import HomeCarousel from './home/components/HomeCarousel'
import SubNavbar from './components/SubNavbar'
// import Latest from './home/components/Latest'
export default {
  name: 'Article',
  components: {
    // HomeCarousel,
    SubNavbar
    // Latest
  },
  layout: 'index',
  data () {
    return {
      article: [],
      backendUrl: process.env.VUE_APP_BACKEND_SERVER
    }
  },
  mounted () {
    this.getArticleDetail(this.$route.query.id, this.$route.query.title)
  },
  methods: {
    getArticleDetail (id, title) {
      return new Promise((resolve, reject) => {
        getArticleDetail(id, title)
          .then((response) => {
            // console.log(JSON.stringify(response))
            this.article = response
            console.log(JSON.stringify(this.article))
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
@import '../../utils/prism.css';

.main {
  padding-left: 32vw;
  padding-right: 32vw;
}

.image > img {
  display: flex;
  width: 36vw;
}

.article-content >>> h1 {
  color: #292929;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 1.875rem;
  font-weight: 300;
  letter-spacing: 0.04rem;
  line-height: 1.5;
  margin: 1.5rem 0;
}

.article-content >>> h2 {
  color: #292929;
  font-size: 2rem;
}

.article-content >>> h3 {
  color: #292929;
  font-size: 1.5rem;
}

.article-content >>> h4 {
  color: #292929;
}

.article-content >>> p {
  color: #292929;
  font-size: 1.3125rem;
  font-weight: 300;
  letter-spacing: 0.04rem;
  line-height: 1.5;
  margin: 2rem 0;
}

.article-content >>> blockquote {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
}

.article-content >>> blockquote > p {
  color: rgba(117, 117, 117, 1);
  letter-spacing: -0.009em;
  line-height: 2.5rem;
  font-weight: 300;
  font-size: 1.75rem;
  margin-top: 0.75rem;
  margin-bottom: -0.46rem;
  display: block;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

.article-content >>> hr {
  margin-left: 17vw;
  width: 27px;
  border: 5px dotted #292929;
  border-style: none none dotted;
  color: #fff;
  background-color: #fff;
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
  font-size: 0.5em;
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
