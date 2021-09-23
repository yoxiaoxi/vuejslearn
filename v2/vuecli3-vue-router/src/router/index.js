import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 安装插件
Vue.use(VueRouter)

// 创建路有对象
const routes = [
  // {
  //   path: '',
  //   redirect: '/about'
  // },

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/:id',
    name:'User',
    component: ()=>import('../views/User')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 将router传入到vue示例，导出
export default router
