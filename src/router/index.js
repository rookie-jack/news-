import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Test from '../views/Test.vue'
import User from '../views/profile/user.vue'
import Useredit from '../views/profile/useredit.vue'
import Follow from '../views/profile/Follow.vue'
import Star from '../views/profile/star.vue'
import Stardetails from '../views/profile/stardetails.vue'
import MoreComment from '../views/MoreComment.vue'
import Comment from '../views/profile/Comment.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/Register',
    component: Register
  },
  {
    path: '/test',
    component: Test
  },
  {
    name: 'user',
    path: '/user',
    component: User,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/useredit',
    component: Useredit,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/follow',
    component: Follow,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/star',
    component: Star,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/comment',
    component: Comment,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/stardetails',
    component: Stardetails,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/morecomment/:id',
    component: MoreComment,
  },
  {
    path: '/search',
    component: Search,
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  console.log("看看当前路由源信息是什么");
  console.log(to.meta);
  // if (to.path == '/user' || to.path == 'useredit') {
  // const pagesNeedAuth = [
  //   '/user',
  //   '/useredit'
  // ]
  // if (pagesNeedAuth.indexOf(to.path) > -1) {
  if (to.meta.needAuth) {
    if (localStorage.getItem('token')) {
      return next();
    } else {
      return router.push('/login').catch(err => { })
    }
  }
  return next();
})

export default router
