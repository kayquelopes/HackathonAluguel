import { createRouter, createWebHistory } from 'vue-router'
import footerView from '@/views/footerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'footer',
      component: footerView
    }, 
  ]
})

export default router