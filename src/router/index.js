import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/chord-converter/',
    name: 'home',
    component: Home
  },
  {
    path: '/chord-converter/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chord-converter/songs-manager',
    name: 'songs-manager',
    component: () => import('../views/SongsManager.vue')
  },
  {
    path: '/chord-converter/converter',
    name: 'converter',
    component: () => import('../views/Converter.vue')
  }
]

const router = new VueRouter({

  routes
})

export default router
