import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import DetailTask from '../views/DetailTask'
import NewTask from '../views/NewTask'
import Profile from '../views/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task/:task',
    name: 'DetailTask',
    component: DetailTask
  },
  {
    path: '/new',
    name: 'NewTask',
    component: NewTask
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
