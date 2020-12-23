import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload';

import toast from 'components/common/Toast';


Vue.config.productionTip = false;
//添加事件总线对象
Vue.prototype.$bus = new Vue();
//安装Toast插件(安装时自动调用Toast的install方法)
Vue.use(toast);

//使用fastclick插件
FastClick.attach(document.body);

Vue.use(VueLazyLoad,{
  loading:require('assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
