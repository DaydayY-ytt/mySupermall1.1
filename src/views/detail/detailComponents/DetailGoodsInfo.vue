<template>
    <div v-if="Object.keys(goodsInfo).length !==0" class="goods-info">
      <div class="info-desc">
        <div class="start">
        </div>
        <div class="desc">{{goodsInfo.desc}}</div>
        <div class="end"></div>
      </div>
      <div class="info-list" v-for="itt in goodsInfo.detailImage">
        <div class="info-key">{{itt.key}}</div>
        <img v-for="item in itt.list" :src="item" @load="goodsImageLoad">
      </div>
    </div>
</template>

<script>
    export default {
      name: "DetailGoodsInfo",
      props:{
          goodsInfo:{
            type:Object,
            default(){
              return {};
            }
          }
      },
      methods:{
        goodsImageLoad(){
          this.$emit('goodsImageLoad')
        }
      }
    }
</script>

<style scoped>
.goods-info{
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
  .info-desc{
    padding: 0 15px;
  }
  .info-desc .start, .info-desc .end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .info-desc .start{
    float: left;
  }
  .info-desc .end{
    float: right;
  }
  .info-desc .start::before, .info-desc .end::after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-desc .end::after{
    right: 0;
  }
  .info-desc .desc{
    padding: 15px 0;
    font-size: 14px;
  }
  .goods-info img{
    width:100%;
  }
  .info-list{
    padding: 10px 0px 0px;
  }
  .info-list .info-key{
    text-align: center;
    font-size: 20px;
  }
</style>
