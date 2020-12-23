<template>
    <div class="detail-base-info" v-if="Object.keys(goods).length !== 0">
      <div class="base-title">{{goods.title}}</div>
      <div class="base-price">
        <span class="base-price-now">{{goods.price}}</span>
        <span class="base-price-old">{{goods.oldPrice}}</span>
        <span class="base-price-des">{{goods.discountDesc}}</span>
      </div>
      <div class="base-numbers">
        <span class="sale-number">{{goods.columns[0]}}</span>
        <span class="collect-number">{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="base-bottom">
        <div v-for="index in goods.services.length-1">
          <img :src="goods.services[index-1].icon">
          <span>{{goods.services[index-1].name}}</span>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {};
        }
      }
    },

  }
</script>

<style scoped>
  .detail-base-info{
    margin-top: 15px;
    padding: 0 8px;
    color:#999;
    border-bottom: 5px solid #f2f5f8;
  }
  .base-title{
    color:#222;
  }
  .base-price-now{
    color:var(--color-high-text);
    font-size:24px;
    margin-top: 10px;
  }
  .base-price-old{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .base-price-des{
    background-color: var(--color-high-text);
    vertical-align:middle;
    padding: 2px 5px ;
    color: #fff;
    font-size: 12px;
    border-radius: 8px;
    margin-left: 5px;
    /*让元素上移一些，使用相对定位*/
    position: relative;
    top:-8px;
  }
  .base-numbers{
    margin-top:15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .base-bottom{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .base-bottom img{
    width:14px;
    height: 14px;
    position: relative;
    top:2px;
  }
  .base-bottom span{
    font-size: 13px;
    color:#333;
  }
</style>
