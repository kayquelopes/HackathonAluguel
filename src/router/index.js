import { createRouter, createWebHistory } from 'vue-router'
import headerView from '../views/headerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'header',
      component: headerView
    },
  ]
})

export default router
