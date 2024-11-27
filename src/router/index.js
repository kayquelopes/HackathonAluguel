import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView,
    },
    {
      path: '/RegisterView',
      name: 'RegisterView',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/MainView',
      name: 'MainView',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/user',
      name: 'UserView',
      component: () => import('../views/UserView.vue'),
    },
    {
      path: '/ListaUserView',
      name: 'ListaUserView',
      component: () => import('../views/ListaUserView.vue'),
    },
  ],
})

export default router
