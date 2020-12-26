<template>
  <div id ='category'>
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <tab-content-category :item="item" class="item"></tab-content-category>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import TabMenu from './categoryComponents/TabMenu';
  import TabContentCategory from './categoryComponents/TabContentCategory';

  export default {
    name: "category",
    components: {
      NavBar,
      TabMenu,
      TabContentCategory
    },
    data(){
      return {
        categories:['正在流行','上衣','裤子','内衣','女鞋','箱包','运动','配饰','美妆','个护','家庭'],
        item:'正在流行'
      }
    },
    methods:{
      selectItem(index){
        switch(index){
          case 0:
            this.item = '正在流行';
            break;
          case 1:
            this.item = '上衣';
            break;
          case 2:
            this.item = '裤子';
            break;
          case 3:
            this.item = '内衣';
            break;
          case 4:
            this.item = '女鞋';
            break;
          case 5:
            this.item = '箱包';
            break;
          case 6:
            this.item = '运动';
            break;
          case 7:
            this.item = '配饰';
            break;
          case 8:
            this.item = '美妆';
            break;
          case 9:
            this.item = '个护';
            break;
          case 10:
            this.item = '家庭';
            break;
        }
      }
    }
  }

</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color:#fff;
    /*font-weight:700;*/
  }
  .content{
    display: flex;
  }
  .content .item{
    font-size: 30px;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;

  }
</style>
