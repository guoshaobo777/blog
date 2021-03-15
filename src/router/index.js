import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/article',
        component: () => import('../views/article/Article.vue')
      },
      {
        path: '/article/:id',
        component: () => import('../views/article/CheckArticle.vue'),
        props: true
      },
      {
        path: '/about',
        component: () => import('../views/About.vue')
      },
      {
        path: '/friend',
        component: () => import('../views/Friend.vue')
      },
      {
        path: '/discuss',
        component: () => import('../views/Discuss.vue')
      },
      {
        path: '/opus',
        component: () => import('../views/Opus.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
