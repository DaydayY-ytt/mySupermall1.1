<template>
    <div id="detail">
      <detail-nav-bar ref="nav" @navClick="navClick"/>
      <scroll class="detail-content"
              ref="scroll"
              :probeType="3"
              @scroll="detailScroll">
        <detail-swiper :topImage="swiperImage"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :goods-info="detailInfo" @goodsImageLoad="goodsImageLoad"/>
        <detail-param-info ref="paramInfo" :itemParams ='itemParams'/>
        <detail-comment-info ref="commentInfo" :commentInfo ='commentInfo'/>
        <goods-list ref="recommendGoods" :goods="recommendGoods"/>
      </scroll>
      <detail-bottom-bar @cartClick="cartClick"/>
      <back-top v-show="showBackTop" @click.native="backTop"/>
    </div>
</template>

<script>
  import DetailNavBar from './detailComponents/DetailNavBar'
  import DetailSwiper from './detailComponents/DetailSwiper'
  import DetailBaseInfo from './detailComponents/DetailBaseInfo'
  import DetailShopInfo from './detailComponents/DetailShopInfo'
  import Scroll from 'components/common/scroll/Scroll';
  import DetailGoodsInfo from './detailComponents/DetailGoodsInfo';
  import DetailParamInfo from './detailComponents/DetailParamInfo';
  import DetailCommentInfo from './detailComponents/DetailCommentInfo';
  import GoodsList from 'components/content/goods/GoodsList';
  import DetailBottomBar from './detailComponents/DetailBottomBar';
  import Toast from 'components/common/Toast/Toast';


  import {getDetailImfo,getRecommend,Goods,Shop} from 'network/detail'
  import {debounce} from "common/utils";
  import {itemMixin,backTopMixin} from "common/mixin";

  import {mapActions} from 'vuex';

    export default {
      name: "Detail",
      data(){
        return {
          iid: null,
          swiperImage:[],
          goods:{},
          shop:{},
          detailInfo:{},
          itemParams:{},
          commentInfo:{},
          recommendGoods:[],
          //itemImageLoad函数
          scrollRefresh:null,
          itemOffsetHeight:[],
          getItemOffsetHeight:null,
          navCurrentIndex:null,
        }
      },
      components:{
        Scroll,
        DetailSwiper,
        DetailNavBar,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar,
      },
      mixins:[itemMixin,backTopMixin],
      created(){
        //保存iid
        this.iid = this.$route.params.iid;
        //获取iid对应的商品的内容
        getDetailImfo(this.iid).then((res)=>{
          // console.log(res);
          //1.获得轮播图图片
          this.swiperImage = res.result.itemInfo.topImages;
          //2.创建商品对象
          this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
          //3.取出店铺信息
          this.shop = new Shop(res.result.shopInfo);
          //4.取出详情信息
          this.detailInfo = res.result.detailInfo;
          //5.取出商品参数
          this.itemParams = res.result.itemParams;
          // console.log(Object.keys(this.itemParams));
          //6.取出评论信息
          if (res.result.rate.cRate!==0){
            this.commentInfo = res.result.rate.list[0];
          }
        });
        //获取iid对应商品的推荐内容
        getRecommend().then(res=>{
          this.recommendGoods = res.data.list;
        });
        //计算nav对应各部分高度的函数
        this.getItemOffsetHeight =debounce(()=>{
          this.itemOffsetHeight=[];
          this.itemOffsetHeight.push(0);
          this.itemOffsetHeight.push(this.$refs.paramInfo.$el.offsetTop);
          this.itemOffsetHeight.push(this.$refs.commentInfo.$el.offsetTop);
          this.itemOffsetHeight.push(this.$refs.recommendGoods.$el.offsetTop);
          this.itemOffsetHeight.push(Number.MAX_VALUE);
          // console.log(this.itemOffsetHeight);
        },100)
      },
      mounted(){
        //下列代码重复，放入mixin执行
      },
      destroyed(){
        this.$bus.$off('itemImageLoad',this.scrollRefresh);
      },
      methods:{
        ...mapActions(['addToCart']),
        detailScroll(position){
          //backTop出现
          let y = -position.y;
          this.showBackTop = y>900;
          //滚动时nav激活项发生变化
          //实现方法2（更hack方法）
          //在this.itemOffsetHeight中多加入一个js的最大值，遍历数组时遍历到length-1
          for(let i=0;i<this.itemOffsetHeight.length-1;i++){
            if((this.currentIndex!==i) && ((y>=this.itemOffsetHeight[i]) &&
               (y<this.itemOffsetHeight[i+1]))){
              this.currentIndex = i;
              this.$refs.nav.currentActive=i;
            }
          }

          //实现方法1（一般方法）
          // let length = this.itemOffsetHeight.length;
          // for(let i in this.itemOffsetHeight){
          //   let ii = parseInt(i);
          //   //第一个判断用于判断新一轮循环中当前的循环（通过验证的循环）是否与目前已保存的循环一致，实现改变才进行输出
          //   if((this.currentIndex !== ii )&&(((ii<length-1) && (this.itemOffsetHeight[ii]<=y) && (y<this.itemOffsetHeight[ii+1]))
          //     ||((ii==length-1)&&(y>=this.itemOffsetHeight[length-1])))){
          //     this.currentIndex = ii;
          //     this.$refs.nav.currentActive=ii;
          //   }
          // }
        },
        goodsImageLoad(){
          this.refresh();
          this.getItemOffsetHeight();
        },
        navClick(index){
          this.$refs.scroll.scrollTo(0,-this.itemOffsetHeight[index]);
        },
        cartClick(){
          const product={}
          product.image = this.swiperImage[0];
          product.title = this.goods.title;
          product.price = this.goods.nowPrice;
          product.iid = this.iid;
          this.addToCart(product).
          //Toast相关操作
          then(res=>this.$toast.show(res,1500));
        }
      }
    }

</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-content{
    position: absolute;
    left: 0;
    right: 0;
    top:44px;
    bottom: 0px;
    overflow: hidden;
  }
</style>
