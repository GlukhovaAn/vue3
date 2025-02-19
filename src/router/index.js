import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


function missingToken() {
  return localStorage.getItem('token') === null
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/profile' && missingToken()) {
    next('/login')
  } else {
    next()
  }
})

export default router
