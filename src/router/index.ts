import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notices',
    name: 'Notices',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notices.vue')
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import(/* webpackChunkName: "about" */ '../views/Schedule.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
