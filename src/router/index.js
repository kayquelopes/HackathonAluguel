import { createRouter, createWebHistory } from 'vue-router'
import admView from '@/views/admView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'admView',
      component: admView
    },

  ]
})

export default router
