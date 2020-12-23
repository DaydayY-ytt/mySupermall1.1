<template>
<<<<<<< HEAD
  <div id ='category'>
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <tab-content-category :item="item" class="item"></tab-content-category>
    </div>
=======
  <div id = 'category'>
    <scroll class="category">
      <ul>
        <li>aa</li>
        <button @click="click1">点我！</button>
        <li @click="click2">aa</li>
        <div @click="click3">bb</div>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
        <li>aa</li>
      </ul>
    </scroll>
    <div class="aa">
      11
    </div>
    <div class="bb">22</div>
>>>>>>> e45413ac573f8f784b15c2b96a41493c129b4a0c
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
  // import BScroll from 'better-scroll';
  import Scroll from 'components/common/scroll/Scroll';
  export default {
    name: "category",
    data(){
      return {
        bscroll:null
      }
    },
    components:{
      Scroll
    },
    methods:{
      click1(){
        console.log('1呗点了');
      },
      click2(){
        console.log('2被点了');
      },
      click3(){
        console.log('3呗点了');
      }

    }

    // mounted(){
    //   this.bscroll = new BScroll('#category',{
    //     probeType:2,
    //     pullUpLoad:true
    //   })
    //   this.bscroll.on('scroll',(position)=>{
    //     // console.log(position);
    //   });
    //   this.bscroll.on('pullingUp',()=>{
    //     console.log('Upload');
    //     this.bscroll.finishPullUp();
    //   })
    // }
>>>>>>> e45413ac573f8f784b15c2b96a41493c129b4a0c
  }

</script>

<style scoped>
<<<<<<< HEAD
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

=======
  .category{
    background-color: red;
    height: 150px;
    overflow: hidden;
    /*overflow-y: scroll;*/
  }
  li{
    font-size:20px;
  }
  .aa{
    width: 100px;
    height: 100px;
    background-color: pink;
    float: left;
  }
  .bb{
    background-color: yellow;
    width: 150px;
    /*height: 100px;*/
>>>>>>> e45413ac573f8f784b15c2b96a41493c129b4a0c
  }
</style>
