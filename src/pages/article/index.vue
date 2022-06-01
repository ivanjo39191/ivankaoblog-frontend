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
        <div v-if="article.banner" class="image">
          <img :src="article.banner" :alt="article.title">
        </div>
        <div class="content" v-html="article.content" />
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleDetail } from '@/api/blog'
import SubNavbar from './components/SubNavbar'
// import HomeCarousel from './home/components/HomeCarousel'
// import Latest from './home/components/Latest'
export default {
  name: 'Article',
  components: {
    // HomeCarousel,
    SubNavbar
    // Latest
  },
  layout: 'index',
  async asyncData (context) {
    const article = await getArticleDetail(context.route.query.id, encodeURI(context.route.query.title), context.store.getters['domain/domain'])
      .then((response) => {
        return response
      })
    const content = article.content.replace(/<[^>]*>?/gm, '').replace(/\r\n|\n/g, '').replace(/&nbsp;/g, ' ').substring(0, 170)
    return { article, content }
  },
  head () {
    return {
      titleTemplate: `%s | ${this.$store.getters['domain/title']}`,
      title: `${this.article.title}`,
      meta: [
        { hid: 'title', name: 'title', content: `${this.article.title}` },
        { hid: 'description', name: 'description', content: `${this.content}` },
        { hid: 'image', name: 'image', content: this.article.banner },
        { hid: 'og:title', property: 'og:title', content: `${this.article.title}` },
        { hid: 'apple-mobile-web-app-title', property: 'apple-mobile-web-app-title', content: this.$store.getters['domain/title'] },
        { hid: 'og:description', property: 'og:description', content: `${this.content}` },
        { hid: 'og:site_name', property: 'og:site_name', content: this.$store.getters['domain/title'] },
        { hid: 'og:image:secure_url', property: 'og:image', content: this.article.banner },
        { hid: 'og:locale', property: 'og:locale', content: 'zh_TW' }
      ],
      htmlAttrs: {
        lang: 'zh-TW'
      },
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-' + process.env.GOOGLE_TAG,
          innerHTML: 'window.dataLayer = window.dataLayer || [];',
          'data-ad-client': 'ca-pub-G-' + process.env.GOOGLE_TAG,
          async: true
        }
      ]
    }
  },
  mounted () {
    function gtag () { window.dataLayer.push(arguments) }
    gtag('js', new Date())

    gtag('config', 'G-' + process.env.GOOGLE_TAG)
  }
}

</script>
<style scoped>
@import '../../utils/prism.css';

@media (max-width: 979px) {
  .main {
    padding-left: 5vw;
    padding-right: 5vw;
  }

  .image > img {
    display: flex;
    width: 90vw;
  }

  /* Code blocks */
  .article-content >>> code,
  .article-content >>> pre {
    color: #f8f8f2;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1.1rem;
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

  .article-content >>> h1 {
    color: #292929;
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 1.875rem;
    font-weight: 700 !important;
    letter-spacing: 0.04rem;
    line-height: 1.5;
    margin: 3rem 0 1rem 0;
  }

  .article-content >>> h2 {
    color: #292929;
    font-size: 2rem;
    font-weight: 700 !important;
    margin: 2rem 0 1rem 0;
  }

  .article-content >>> h3 {
    color: #292929;
    font-size: 1.5rem;
    font-weight: 500 !important;
    margin: 1.5rem 0 1rem 0;
  }

  .article-content >>> h4 {
    color: #292929;
    margin: 1rem 0 1rem 0;
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
    list-style-position: inside;
    color: #262626;
    font-size: 1.3125rem;
    font-weight: 300;
    letter-spacing: 0.04rem;
    line-height: 1.5;
    margin: 1rem 0;
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
}

@media (min-width: 980px) {
  .main {
    padding-left: 25vw;
    padding-right: 25vw;
  }

  .image > img {
    display: flex;
    width: 50vw;
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
}

.article-content >>> h1 {
  color: #292929;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 1.875rem;
  font-weight: 700 !important;
  letter-spacing: 0.04rem;
  line-height: 1.5;
  margin: 3rem 0 1rem 0;
}

.article-content >>> h2 {
  color: #292929;
  font-size: 2rem;
  font-weight: 600 !important;
  margin: 2rem 0 1rem 0;
}

.article-content >>> h3 {
  color: #292929;
  font-size: 1.5rem;
  font-weight: 500 !important;
  margin: 1.5rem 0 1rem 0;
}

.article-content >>> h4 {
  color: #292929;
  margin: 1rem 0 1rem 0;
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
  list-style-position: inside;
  color: #262626;
  font-size: 1.3125rem;
  font-weight: 300;
  letter-spacing: 0.04rem;
  line-height: 1.5;
  margin: 1rem 0;
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
