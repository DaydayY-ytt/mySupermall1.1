import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home'
//懒加载对象
const category = ()=>import('views/category/category')
// const home = ()=>import('../views/home/home')
const profile = ()=>import('views/profile/profile')
const shopcar = ()=>import('views/shopcar/shopcar')
const detail = ()=>import('views/detail/Detail')

//安装vue-router
Vue.use(VueRouter)

//配置路由对象
const routes=[
  //默认路由
  {
   path:'/',
   redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/profile',
    component:profile
  },
  {
    path:'/shopcar',
    component:shopcar
  },
  {
    path:'/detail/:iid',
    component:detail
  }
  ];

export default new VueRouter({
  routes,
  mode:'history'
})
