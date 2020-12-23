import {request} from "./index";

export function getCategory() {
  return request({
    url:'/category1'
  })
}

export function getSubCategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey,type) {
  return request({
    url:'/subcateogry/detail',
    params:{
      miniWallkey,
      type
    }
  })
}
