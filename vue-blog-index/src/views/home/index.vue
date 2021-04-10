<template>
  <div class="content-box">
    <div class="content">
      <div class="top row">
        <hr />
        <!-- <h4>Latest Articles</h4> -->
        <div class="col-md-8 col-xs-12">
          <LatestArticle/>
        </div>
        <div class="col-md-4 col-xs-12">
          <UserProfile/>
        </div>
      </div>
      <div class="middle row">
        <hr />
        <!-- <h4>Blog Type Articles</h4> -->
        <div class="col-12">
          <BlogTypeArticles/>
        </div>
      </div>
      <div class="bottom row">
        <hr />
        <div class="col-md-8 col-xs-12">
          <Articles />
        </div>
        <div class="col-md-4 col-xs-12">
          <Info />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LatestArticle from './components/LatestArticle'
import UserProfile from './components/UserProfile'
import BlogTypeArticles from './components/BlogTypeArticles'
import Articles from './components/Articles'
import Info from './components/Info'
export default {
  name: 'Home',
  components: {
    LatestArticle,
    UserProfile,
    BlogTypeArticles,
    Articles,
    Info
  },
}

</script>

<style scoped>

hr {
  margin-top: 3vh;
  margin-bottom: 3vh;
}

.top{
  margin-top: 10;
}
.middle{
  margin-top: 10;
}
.bottom{
  margin-top: 10vh;
}

h4 {
  text-align: left;
}

</style>