<template>
  <div id="goods-item" @click="itemClick">
    <img v-lazy="getImage" @load="itemLoad">
    <div class="goods-info">
      <p class="title">{{listItem.title}}</p>
      <span class="price">{{listItem.price}}</span>
      <span class="collect">{{listItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props:{
      listItem:{
        type:Object,
        default(){
          return {};
        }
      }
    },
    methods:{
      itemLoad(){
        this.$bus.$emit('itemImageLoad')
      },
      itemClick(){
        this.$router.push('/detail/'+this.listItem.iid)
      }
    },
    computed:{
      getImage(){
        if(this.listItem.show){
          return this.listItem.show.img;
        }else{
          return this.listItem.image;
        }
        // return this.listItem.image||this.listItem.show.img;
      }
    }
  }
</script>

<style scoped>
  #goods-item{
    padding-bottom: 40px;
    position: relative;
    width:48%;

  }
  #goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top:-1px;
    width:14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
