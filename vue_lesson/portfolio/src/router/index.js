import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../components/Courses.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../components/Projects.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../components/Skills.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../components/Contacts.vue')
    }

  ]
})

export default router
