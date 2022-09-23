import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MealsInfo from '../views/AboutView.vue'
import Error from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/desc/:id',
    component: MealsInfo,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/:pathMatch(.*)*', 
    component: Error,
    name: 'error'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
