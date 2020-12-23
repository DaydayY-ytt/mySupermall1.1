import {ADD_CART_COUNTER, ADD_PRODUCT} from './mutation-types'
export const mutations={
  //mutation里的行为尽量单一
  [ADD_CART_COUNTER](state,oldProduct){
    oldProduct.counter++;
  },
  [ADD_PRODUCT](state,payload){
    payload.counter=1;
    payload.checked=true;
    state.cartProductList.push(payload);
  }
}
