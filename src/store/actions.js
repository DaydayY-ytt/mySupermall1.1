import {ADD_CART_COUNTER, ADD_PRODUCT} from './mutation-types'
export const actions={
  //actions里面放用于判断的复杂代码和异步操作等
  addToCart(context,payload){
    return new Promise((resolve,reject)=>{
      //1.查找数组中是否具有该商品
      let oldProduct= context.state.cartProductList.find(item=>item.iid===payload.iid);
      //有该商品时
      if(oldProduct){
        context.commit(ADD_CART_COUNTER,oldProduct);
        resolve('商品数量+1');
      }else{
        //没有该商品时
        context.commit(ADD_PRODUCT,payload);
        resolve('成功添加，在购物车等亲~~')
      }
      // console.log(context.state.cartProductList);
    })
  }
}
