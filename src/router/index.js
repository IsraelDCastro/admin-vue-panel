import { createRouter, createWebHistory } from 'vue-router';

import SignIn from '@/pages/SignIn.vue';
import SignUp from '@/pages/SignUp.vue';

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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router