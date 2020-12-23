<template>
  <div class="shopcar">
    <nav-bar class="nav-bar">
      <div slot="center" >购物车({{getCartProductLength}})</div>
    </nav-bar>
    <shop-car-list/>
    <shop-car-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import {mapGetters} from 'vuex';
  import ShopCarList from './childComponents/ShopCarList';
  import ShopCarBottomBar from './childComponents/ShopCarBottomBar'

  export default {
    name: "shopcar",
    components:{
      NavBar,
      ShopCarList,
      ShopCarBottomBar
    },
    computed:{
      ...mapGetters(['getCartProductLength']),
    },
  }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .shopcar{
    height: 100vh;
  }

</style>
