<template>
    <swiper>
      <swiper-item v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" @load="swiperImageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'
  export default {
    name: "HomeSwiper",
    props:{
      banner:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        //状态变量，用于让图片加载完成事件只发送一次
        hasLoaded:false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      swiperImageLoad(){
       if(!this.hasLoaded){
         this.$emit('swiperImageLoad')
         this.hasLoaded = true;
       }
      }
    }
  }
</script>

<style scoped>

</style>
