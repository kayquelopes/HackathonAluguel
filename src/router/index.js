import { createRouter, createWebHistory } from 'vue-router'
import ListaUserView from '@/views/ListaUserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ListaUser',
      component: ListaUserView
    },
  ]
})

export default router
