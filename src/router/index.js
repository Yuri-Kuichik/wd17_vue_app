import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import CalculatorPage from '@/pages/CalculatorPage.vue'
import CounterPage from '@/pages/CounterPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import PostPage from '@/pages/PostPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/HomePage.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterPage,
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorPage,
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostPage,
    },
  ],
})

export default router
