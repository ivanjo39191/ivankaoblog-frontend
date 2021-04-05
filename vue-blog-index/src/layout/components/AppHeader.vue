<template>
  <div class="app-header">
    <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true" :autoplay="true" :autoplayTimeout="5000" :loop="true">
      <slide v-for="(item,index) in imgArray" :key="index">
        <div class="background-img" :style="{backgroundImage: 'url(' + item + ')' }"></div>
      </slide>
    </carousel>
  </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'AppHeader',
  components: {
    Carousel,
    Slide
  },
  props: {
    msg: String
  },
  data(){
    return {
      imgArray:[
        require('@/assets/banner4.jpg'),
        require('@/assets/banner3.jpg'),
        require('@/assets/banner2.jpg'),
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.app-header{
  margin:0px;
  padding:0px;
  margin-top: 8vh;
  max-width: 100%;
}
.background-img{
  max-width: 100%;
  background-size:cover;
  padding-top: 30vh;
}
</style>
