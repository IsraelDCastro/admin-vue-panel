import { createRouter, createWebHistory } from 'vue-router';

import SignIn from '@/pages/SignIn.vue';
import SignUp from '@/pages/SignUp.vue';

import Dashboard from '@/pages/Dashboard.vue';
import DashboardIndex from '@/pages/dashboard/Index.vue';

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/register',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: '/home',
        component: DashboardIndex
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router