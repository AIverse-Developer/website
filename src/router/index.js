import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/pages/index/Home'),
    alias: '/'
  }
]
const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
