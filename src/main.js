import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

// 这里想要封装一个基准路径

// 方便请求,无需每次输入完整的服务器地址
// 如果要对这个 axios 库设定默认的基准路径
axios.defaults.baseURL = "http://157.122.54.189:9083"

// 对 vue 本身进行改造 以后内部的组件可以 this.$axios 访问请求
Vue.prototype.$axios = axios;

// 1. 导入组件库
import Vant from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
