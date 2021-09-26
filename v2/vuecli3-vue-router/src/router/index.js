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
        meta:{
            title:'首页'
        },
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        meta:{
            title:'关于'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        children: [
            {
                path: 'news',
                name: 'AboutNews',
                component: () => import('../views/AboutNews')
            },
            {
                path: 'msg',
                name: 'AboutMsg',
                component: () => import('../views/AboutMsg')
            }
        ]
    },
    {
        path: '/user/:id',
        name: 'User',
        meta:{
            title:'用户'
        },
        component: () => import('../views/User')
    },
    {
        path: '/profile',
        name: 'Profile',
        meta:{
            title:'我的'
        },
        component: ()=>import('../views/Profile')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to,from,next)=>{
    document.title=to.matched[0].meta.title
    console.log(to);
    next()
})

// 将router传入到vue示例，导出
export default router
