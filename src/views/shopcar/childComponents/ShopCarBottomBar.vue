<template>
  <div class="bottom-menu">
    <div class="select-all">
      <CheckButton class="check-btn" :isActive="isSelectAll" @click.native="checkBtnClick"/>
      <span>全选</span>
    </div>
    <div class="total-price">合计：<span>￥{{totalPrice}}</span></div>
    <div class="buy-product">去结算({{checkedProductLength}})</div>
  </div>

</template>

<script>
  import CheckButton from './CheckButton';
  import {mapGetters} from 'vuex';
    export default {
      name: "ShopCarBottomBar",
      components: {
        CheckButton
      },
      computed: {
        ...mapGetters({
          product: 'getCartProduct'
        }),
        totalPrice() {
          let total = this.product.filter(item => item.checked == true).reduce((pre, item) =>
            pre + item.price * item.counter, 0);
          return total.toFixed(2); 
        },
        checkedProductLength() {
          return this.product.filter(item => item.checked == true).length
        },
        //查看所有的项目是否都被选中
        isSelectAll() {
          if (!this.product.length) return false;
          return !(this.product.find(item => item.checked == false));   //存在未选中项则返回false，不存在未选中返回true
        }
      },
      methods:{
        checkBtnClick(){
          if(this.isSelectAll){
            //全选中则点击变全未选中
            this.product.forEach(item=> item.checked=false);
          }else{
            //未全选中则点击变选中
            this.product.forEach(item => item.checked=true);
          }
        }
      }
    }
</script>

<style scoped>
  .bottom-menu{
    width:100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    box-shadow: 0 -2px 3px rgba(0,0,0,.2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .bottom-menu .select-all{
    display: flex;
    align-content: center;
    align-items: center;
  }
  .check-btn{
    padding-right:3px;
  }
  .bottom-menu .total-price{
    font-size: 14px;
    color: #666;
    text-align: right;
    flex: 1;
    padding-right: 5px;
  }
  .bottom-menu .total-price span{
    font-size: 12px;
    color: orangered;
  }
  .bottom-menu .buy-product{
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
