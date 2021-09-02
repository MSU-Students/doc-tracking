import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'Index', component: () => import('pages/Index.vue') },
      { path: 'Login', component: () => import('pages/Login.vue') },
      
      { path: 'Signingup', component: () => import('pages/Signingup.vue') },
      { path: 'HomePage', component: () => import('pages/HomePage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
