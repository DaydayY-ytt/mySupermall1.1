<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length!==0">
    <div class="detail-shop-title">
      <img :src="shop.logo">
      <span>{{shop.name}}</span>
    </div>
    <div class="detail-shop-detail">
      <div class="detail-shop-detail-item detail-shop-des">
        <div class="detail-shop-numbers">
          <div class="detail-shop-sale">{{shop.sells}}</div>
          <div class="detail-shop-des-word">总销量</div>
        </div>
        <div class=detail-shop-things>
          <div class="detail-shop-sale">{{shop.goodsCount}}</div>
          <div class="detail-shop-des-word">全部宝贝</div>
        </div>
      </div>
      <table class="detail-shop-detail-item detail-shop-score">
        <tr v-for="item in shop.score">
          <td class="detail-shop-score-title">{{item.name}}</td>
          <td :class="{better:item.isBetter}" class="detail-shop-score-conclusion">{{item.score}}</td>
          <td :class="{better:item.isBetter}" class="detail-shop-score-conclusion">
            <span>{{item.isBetter? '高':'低'}}</span></td>
        </tr>
      </table>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      getIsBetter(i){
        return function () {
          console.log(i)
          if(i){
            return '高'
          }else{
            return '低'
          }
        }
      }
    },
  }
</script>

<style scoped>
.detail-shop-info{
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
  .detail-shop-title{
    line-height: 45px;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-items: center;
  }
  .detail-shop-title img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .detail-shop-title span{
    margin-left: 10px;
    vertical-align: center;
  }
  .detail-shop-detail{
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }
  .detail-shop-detail-item{
    flex: 1;
  }
  .detail-shop-des{
    display: flex;
    justify-content: space-evenly;
    color:#333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,0.1);
    align-items: center;
  }
  .detail-shop-sale{
    font-size: 18px;
  }
   .detail-shop-des-word{
     margin-top:10px;
     font-size: 12px;
   }
  .detail-shop-score{
    width: 120px;
    margin-left: 30px;
  }
  .detail-shop-score td{
    padding: 5px 0;
  }
  .detail-shop-score-conclusion{
    color: #5ea732;
  }
  .detail-shop-score-conclusion span{
    color: #fff;
    background-color: #5ea732;
  }
  .better{
    color:#f13e3a;
  }
  .better span{
    background-color: #f13e3a;
  }
  .shop-bottom{
    text-align: center;
    margin-top: 10px;
  }
  .enter-shop{
    margin: 0 auto;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    /*text-align: center;*/
    line-height: 30px;
    border-radius: 10px;
  }
</style>
