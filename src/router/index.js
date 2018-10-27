import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/',
      redirect:'/layout/home',
      component: () => import('@/views/home'),
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('@/views/layout'),
      redirect: '/layout/home',
      children:[
        {
          path: 'home',
          name: 'home',
          meta:{
            title:'首页'
          },
          component: () => import('@/views/home'),
        },
        {
          path: 'user',
          name: 'user',
          meta:{
            title:'管理员列表'
          },
          component: () => import('@/views/user'),
        },
        {
          path: 'adduser',
          name: 'adduser',
          meta:{
            title:'添加管理员'
          },
          component: () => import('@/views/adduser'),
        },
        {
          path: 'news',
          name: 'news',
          meta:{
            title:'新闻管理'
          },
          component: () => import('@/views/news'),
        },
        {
          path: 'addnews',
          name: 'addnews',
          meta:{
            title:'添加新闻'
          },
          component: () => import('@/views/addnews'),
        },
        {
          path: 'swper',
          name: 'swper',
          meta:{
            title:'轮播图管理'
          },
          component: () => import('@/views/swper'),
        },
        {
          path: 'addswper',
          name: 'addswper',
          meta:{
            title:'添加轮播图'
          },
          component: () => import('@/views/addswper'),
        },
        {
          path: 'Eidtswper',
          name: 'Eidtswper',
          meta:{
            title:'修改轮播图'
          },
          component: () => import('@/views/addswper'),
        },

      ]
    },
  ]
})

router.beforeEach((to, from, next)=> {
  document.title = to.meta.title
  next()
})

export default router
