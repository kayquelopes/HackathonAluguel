import { createRouter, createWebHistory } from 'vue-router'
import headerAdmView from '@/views/headerAdmView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'headerAdm',
      component: headerAdmView
    },
    
  ]
})

export default router
