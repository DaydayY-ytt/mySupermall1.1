<template>
    <div class="wrapper1" ref="wrapper">
      <div class="content1">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: "Scroll",
    data(){
      return {
        scroll:null,
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },
    mounted(){
        this.scroll = new BScroll('.wrapper1',{
          click:true,
          probeType:this.probeType,
          pullUpLoad:this.pullUpLoad
        });
        //监听滚动的位置
      if(this.probeType===3 || this.probeType===2){
        this.scroll.on('scroll',(position)=>{
          this.$emit('scroll',position);
        });
      }
        //pullUpLoad为true时才需要监听
       if (this.pullUpLoad){
          this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp');
          })
       }

    },
    methods:{
      scrollTo(x,y,time=300){
        //为确定执行函数时this.scroll和this.scroll.scrollTo已经存在
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
      },
      refresh(){
        this.scroll && this.scroll.refresh && this.scroll.refresh();
      },
    }
  }
</script>

<style scoped>


</style>
