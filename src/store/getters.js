export const getters={
  getCartProductLength(state){
    return state.cartProductList.length
  },
  getCartProduct(state){
    return state.cartProductList;
  }
}
