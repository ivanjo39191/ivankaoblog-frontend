<template>
  <div class="home-carousel">
    <carousel :per-page="1" :mouse-drag="true" :autoplay="true" :autoplayTimeout="5000" 
              :loop="true">
      <slide v-for="(item,index) in imgArray" :key="index">
        <div class="background-img" :style="{backgroundImage: 'url(' + item + ')' }"></div>
      </slide>
    </carousel>
  </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'HomeCarousel',
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

.background-img{
  max-width: 100%;
  background-size:cover;
  padding-top: 30vh;
}

.VueCarousel-inner{
  z-index: 1;
}
</style>
