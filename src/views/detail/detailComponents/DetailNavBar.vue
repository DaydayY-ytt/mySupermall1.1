<template>
    <div id = 'DetailNavBar' >
      <nav-bar>
        <div slot="left"
             class="item-left"
             @click="leftClick">
          <img src="~assets/img/common/back.svg">
        </div>
        <div slot="center" class="title">
          <div v-for="(item,index) in title"
               class="item"
               :class="{active:currentActive===index}"
               @click="itemClick(index)">{{item}}</div>
        </div>
      </nav-bar>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
    export default {
      name: "DetailNavBar",
      components:{
        NavBar
      },
      data(){
        return {
          title:['商品','参数','评论','推荐'],
          currentActive:0
        }
      },
      methods:{
        itemClick(index){
          this.currentActive = index;
          this.$emit('navClick',index);
        },
        leftClick(){
          this.$router.back()
        }
      }
    }
</script>

<style scoped>
  .title{
    display: flex;
  }
  .item{
    flex: 1;
  }
  .item-left{
    margin-top: 6px;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
