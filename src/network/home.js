import {request} from './index'

//封装首页的每一个请求
export function getHomeMultidata() {
  return request({
    url:'home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url:'home/data',
    params:{
      type,
      page
    }
  })

}
