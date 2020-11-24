import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

// 这里想要封装一个基准路径

// 方便请求,无需每次输入完整的服务器地址
// 如果要对这个 axios 库设定默认的基准路径
axios.defaults.baseURL = "http://157.122.54.189:9083"

// 写一个拦截器，不管哪个页面请求
// 只要是调用了 axios 发出的就会被拦截
axios.interceptors.request.use(config => {
  // 这里是拦截器,可以接收到请求配置作为形参

  // 1. 如果这个请求的 Headers 没有带上 Authorization
  // 2. 如果我有 token 证明我已经登录
  if (!config.headers.Authorization && localStorage.getItem('token')) {
    // 可以往config 添加上 token
    config.headers.Authorization = localStorage.getItem('token')
  }
  return config
})

// 需要添加拦截器, 无论哪个页面发请求, 响应都应该来到这里
// 先做判断处理, 再返回给页面
// 响应拦截器固定写法:
// axios.interceptors.response.use()
// 这个固定写法可以接受回调函数作为参数, 所有的响应都会被这个回调接受到进行处理
axios.interceptors.response.use(res => {
  // 拦截器可以拦截到结果 res
  // 记得需要放行
  console.log('路过拦截器, 直接将数据返回');
  // 如果获取的数据 res.data 有 statusCode 而且是 4 开头的三位数
  const errCodePattern = /^4\d{2}$/
  if (errCodePattern.test(res.data.statusCode)) {
    // 弹出错误提示
    Toast.fail(res.data.message || '系统错误')
  }

  // 另外一个独有的错误逻辑, 所有用户信息校验失败的错误
  // 都应该清理 localStorage 跳转到登录页
  if (res.data.message == "用户信息验证失败") {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.replace('/login')
  }
  return res
})

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
