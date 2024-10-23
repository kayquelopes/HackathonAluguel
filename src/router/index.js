import { createRouter, createWebHistory } from 'vue-router'
import denuciasPageView from '@/views/denuciasPageView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'denuciasPage',
      component: denuciasPageView
    },
  ]
})

export default router
