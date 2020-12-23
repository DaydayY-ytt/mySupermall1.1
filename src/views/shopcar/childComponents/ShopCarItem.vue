<template>
    <div class="shop-car-item">
      <div class="check-button">
        <check-button :isActive="product.checked" @click.native="btnClick"/>
      </div>
      <div class="car-image">
        <img :src="product.image">
      </div>
      <div class="car-detail">
        <div class="car-title">{{product.title}}</div>
        <div class="car-numbers">
          <div class="car-price">{{'￥'+product.price}}</div>
          <div class="car-count">{{'×'+product.counter}}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import CheckButton from './CheckButton'
    export default {
      name: "ShopCarItem",
      props:{
        product:{
          type:Object,
          default(){
            return {};
          }
        }
      },
      components:{
        CheckButton
      },
      methods:{
        btnClick(){
          this.product.checked= !this.product.checked;
        }
      }
    }
</script>

<style scoped>
  .shop-car-item{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  .check-button{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .car-image{
    padding: 5px;
  }
  .car-image img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .car-detail{
    font-size: 14px;
    color: #666;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .car-title{
    font-size: 17px;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .car-numbers{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content: space-between;
  }
  .car-price{
    color: orangered;
  }
</style>

