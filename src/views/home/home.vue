<template>
  <div id="home-wrapper">
    <nav-bar class="home-nav"><div slot="center" >大王的商城</div></nav-bar>
    <!--better-scroll框架底层使用的是css的traslateY，所以使用position:fixed定位也会被移动-->
    <tab-control :tabItem="['流行','新款','精选']"
                 @tabIsClicked="tabIsClicked"
                 ref="tabControl1"
                 class="tab-control1"
                 v-show="showTabControl"></tab-control>
    <!--Better-Scroll挂载范围-->
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            :pullUpLoad= 'true'
            @pullingUp = "upLoad"
            @scroll="contentScroll" >
      <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommend"></home-recommend-view>
      <Feature></Feature>
      <tab-control :tabItem="['流行','新款','精选']"
                   @tabIsClicked="tabIsClicked"
                   ref="tabControl"></tab-control>
      <goods-list :goods="getCurrentGoods" />
    </scroll>

    <back-top @click.native="backTop" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
  //不同类（子组件，公共组件，网络请求等）的导入可以用空行隔开
  import NavBar from 'components/common/navbar/NavBar';
  import Scroll from 'components/common/scroll/Scroll';
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import HomeSwiper from './childComponents/HomeSwiper';
  import HomeRecommendView from './childComponents/HomeRecommendView'
  import Feature from './childComponents/Feature'


  import {getHomeMultidata,getHomeGoods} from "../../network/home";

  import {debounce} from "common/utils";
  import {itemMixin,backTopMixin} from "common/mixin";


  export default {
    name: "home",
    components:{
      NavBar,Scroll,TabControl,GoodsList,HomeSwiper,HomeRecommendView,
      Feature
    },

    data(){
      return {
        banner:[],
        recommend:[],
        //设计control-bar对应的数据的结构
        goods:{
          pop:{page:1,list:[]},
          new:{page:1,list:[]},
          sell:{page:1,list:[]}
        },
        currentType:'pop',
        //记录tab-control的offset和显示状况
        tabControlOffset:0,
        showTabControl:false,
        scrollY:0,
        //itemImageLoad函数
        scrollRefresh:null
      }
    },

    mixins:[itemMixin,backTopMixin],

    created(){
      //1.请求多个数据
      this.getHomeMultidata();

      //2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

      console.log(this.$route)
    },

    activated(){
      this.$refs.scroll.scrollTo(0,this.scrollY,0);
      this.$refs.scroll.refresh();
    },

    mounted(){
      //下列代码重复，已放入mixin执行
      // //3.监听item中图片加载情况
      // const refresh = debounce(this.$refs.scroll.refresh,100);
      // this.scrollRefresh = ()=>{
      //   // this.$refs.scroll.refresh();  //这样执行过于频繁
      //   refresh();  //使用debounce
      // };
      // this.$bus.$on('itemImageLoad',this.scrollRefresh);
    },

    deactivated(){
      this.scrollY = this.$refs.scroll.scroll.y;
      this.$bus.$off('itemImageLoad',this.scrollRefresh);
    },

    computed:{
      getCurrentGoods(){
        return this.goods[this.currentType].list;
      }
    },

    methods:{
      /**
       * 监听用函数
       **/
      tabIsClicked(index){
        switch (index) {
          case 0:
            this.currentType='pop';
            break;
          case 1:
            this.currentType ='new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.tabControl1.currentIndex=index;
        this.$refs.tabControl.currentIndex = index;
      },
      //滚动回调函数
      contentScroll(position){
        this.showBackTop = (-position.y)>800;
        this.showTabControl = (-position.y)>this.tabControlOffset;
      },
      //上拉加载更多
      upLoad(){
        this.getHomeGoods(this.currentType);
        this.$refs.scroll.finishPullUp();
      },
      //监听swiper图片加载完成，完成后tabcontrol的offset的值才会准确
      swiperImageLoad(){
        this.tabControlOffset = this.$refs.tabControl.$el.offsetTop;
      },
      /**
       * 网络请求相关函数
       **/
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        let page = this.goods[type].page;
        getHomeGoods(type,page).then(res=>{
          let dataGet = res.data.list;
          //将请求得到的数据放入数组
          this.goods[type].list.push(...dataGet);
        })
        this.goods[type].page++;
      }
    }
  }
</script>
<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    text-align: center;
    color:#fff;
  }
  #home-wrapper{
    position: relative;
    height: 100vh;

  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 44px;
    left: 0px;
    right: 0px;
  }
  .tab-control1{
    position: fixed;
    top:43px;
    left: 0;
    right: 0;
    z-index: 9;
  }
  /*.content{*/
    /*height: calc(100%- 93px);*/
    /*overflow: hidden;*/
  /*}*/


</style>
