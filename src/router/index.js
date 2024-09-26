import { createRouter, createWebHistory } from 'vue-router'
import pagUser from '@/views/userView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pagUser',
      component: pagUser
    }, 
  ]
})

export default router
