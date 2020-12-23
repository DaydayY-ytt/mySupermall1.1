import Toast from './Toast';

const obj={}
obj.install = function (Vue) {
 //1.创建组件的构造器
  const toastConstructor = Vue.extend(Toast);

  //2.创建组件的实例
  const toast = new toastConstructor();

  //3.将实例挂载到手动创建的元素上
  toast.$mount(document.createElement('div'));

  //4.将得到的元素挂载到body上
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
}
export default obj;
