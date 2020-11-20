import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/profile/user.vue'
import Useredit from '../views/profile/useredit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Register',
    component: Register
  },
  {
    name: 'user',
    path: '/user',
    component: User
  },
  {
    path: '/useredit',
    component: Useredit
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  if (to.path == '/user') {
    if (localStorage.getItem('token')) {
      return next();
    } else {
      return next('/login').catch(err => { })
    }
  }
  return next();
})

export default router
