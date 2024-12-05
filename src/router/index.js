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
      path: '/Register',
      name: 'RegisterView',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/PagInic',
      name: 'PagInicView',
      component: () => import('../views/PagInicView.vue'),
    },
    {
      path: '/user',
      name: 'UserView',
      component: () => import('../views/UserView.vue'),
    },
    {
      path: '/adm',
      name: 'AdmView',
      component: () => import('../views/AdmView.vue'),
    },
    {
      path: '/listaUser',
      name: 'ListaUserView',
      component: () => import('../views/ListaUserView.vue'),
    },
    {
      path: '/registrarcasa',
      name: 'RegistrarCasaView',
      component: () => import('../views/RegistrarCasaView.vue'),
    },
    {
      path: '/pagedenuncias',
      name: 'PageDenunciasView',
      component: () => import('../views/PageDenunciasView.vue'),
    },
    {
      path: '/RegistrarPagamento',
      name: 'RegistrarPagamentoView',
      component: () => import('../views/RegistrarPagamentoView.vue'),
    },
    {
      path: '/EscEmail',
      name: 'EscEmailView',
      component: () => import('../views/EscEmailView.vue'),
    },
    {
      path: '/PageInfo',
      name: 'PageInfoView',
      component: () => import('../views/PageInfoView.vue'),
    },
    {
      path: '/PageFinal',
      name: 'PageFinalView',
      component: () => import('../views/PageFinalView.vue'),
    },
  ],
})

export default router
