import { createRouter, createWebHistory } from 'vue-router'
import RegistrarCasaView from '@/views/RegistrarCasaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'RegistrarCasa',
      component: RegistrarCasaView
    },
  ]
})

export default router
