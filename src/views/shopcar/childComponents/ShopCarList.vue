<template>
    <div class="shop-car-list">
      <scroll class="content" ref="scroll">
<<<<<<< HEAD
        <div v-show="product.length===0" class="nothing">购物车里空空如也哦~~</div>
=======
>>>>>>> e45413ac573f8f784b15c2b96a41493c129b4a0c
        <shop-car-item v-for="item in product"
                       :product="item"
                       class="shop-car-item"/>
      </scroll>
    </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll';
  import {mapGetters} from 'vuex';
  import ShopCarItem from './ShopCarItem';
    export default {
      name: "shopCarList",
      components:{
        Scroll,
        ShopCarItem
      },
      computed:{
        ...mapGetters({
          product:'getCartProduct'
        })
      },
      activated(){
        this.$refs.scroll.refresh();
      }
    }
</script>

<style scoped>
  .shop-car-list{
    height: calc(100% - 44px - 49px - 44px);
  }
  .content{
    height: 100%;
    /*height: 100%;*/
    overflow: hidden;
  }
<<<<<<< HEAD
  .content .nothing{
    width: 100%;
    text-align: center;
    position: relative;
    top:200px;
  }
=======
>>>>>>> e45413ac573f8f784b15c2b96a41493c129b4a0c
</style>
