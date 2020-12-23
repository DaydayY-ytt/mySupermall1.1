import {request} from "./index";

//封装详情页的网络请求
export function getDetailImfo(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

//详情页推荐商品的网络请求
export function getRecommend() {
  return request({
    url:'/recommend'
  })
}

//数据整合
//商品数据
export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.oldPrice = itemInfo.oldPrice;
    this.price = itemInfo.price;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services= services;
    this.nowPrice = itemInfo.lowNowPrice;
  }
}
//商家数据
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
