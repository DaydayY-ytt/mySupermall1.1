<template>
  <div class="menu-list">
      <div class="menu-list-item"
           :class="{active:activeIndex==index}"
           v-for="(item,index) in categories"
           :key="index"
           @click="itemClick(index)">
        {{item}}
      </div>

  </div>
</template>

<script>
  export default {
    name: "TabMenu",
    props:{
      categories:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    data(){
      return {
        activeIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.activeIndex = index;
        this.$emit('selectItem',index);
      }
    }
  }
</script>

<style scoped>
  .menu-list{
    width:100px;
    background-color: #f6f6f6;
    height: calc(100vh - 93px);
    display: flex;
    flex-direction: column;
  }
  .menu-list-item{
    height: 45px;
    flex: 1 1 auto;
    text-align: center;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .menu-list-item.active{
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
</style>
