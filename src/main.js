import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "./axios";


// 对 vue 本身进行改造 以后内部的组件可以 this.$axios 访问请求
Vue.prototype.$axios = axios;

// 1. 导入组件库
import Vant, { Toast } from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)

Vue.filter('fixImgUrl', (oldUrl) => {
  if (oldUrl.indexOf("http") > -1) {
    return oldUrl
  } else {
    return this.axios.defaults.baseURL + oldUrl
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
