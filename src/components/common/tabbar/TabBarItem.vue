<template>
      <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActived"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-actived"></slot></div>
        <div class="tab-bar-item-text" :style="getStyle"><slot name="item-text"></slot></div>
      </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    computed:{
      isActived(){
        return this.$route.path == this.path;
      },
      getStyle(){
        return this.isActived? {color:this.activeColor}:{};
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
    height: 49px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
