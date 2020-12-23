<template>
  <div>
    <ul class="recommend">
      <li v-for="item in recommends" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image">
          <div>{{item.title}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend img{
    width: 70px;
    height: 70px;
  }
</style>
