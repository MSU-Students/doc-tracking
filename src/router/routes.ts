import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/Login', component: () => import('pages/Login.vue') },
      { path: '/Signingup', component: () => import('pages/Signingup.vue') },
      { path: '/HomePage', component: () => import('pages/HomePage.vue') },
      { path: '/LandingPage', component: () => import('pages/LandingPage.vue') },
      { path: '/AdminProfile', component: () => import('pages/AdminProfile.vue') },
      { path: '/EmpProfile', component: () => import('pages/EmpProfile.vue') },
      { path: '/Index', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '/AllDoc', component: () => import('pages/Admin/AllDoc.vue') },
      { path: '/TrackDoc', component: () => import('pages/Admin/TrackDoc.vue') },
      { path: '/DocType', component: () => import('pages/Admin/DocType.vue') },
      { path: '/Office', component: () => import('pages/Admin/Office.vue') },
      { path: '/Users', component: () => import('src/pages/Admin/Users.vue'),},
    ],
  },
  {
    path: '/',
    component: () => import('layouts/EmpLayout.vue'),
    children: [
      { path: '/Documents', component: () => import('pages/Employee/Documents.vue'),},
      { path: 'Incoming', component: () => import('pages/Employee/Incoming.vue'),},
      { path: '/Hold', component: () => import('pages/Employee/Hold.vue'), },
      { path: '/Received', component: () => import('pages/Employee/Received.vue'),},
      { path: '/Outgoing', component: () => import('pages/Employee/Outgoing.vue'), },
      { path: '/Returned', component: () => import('pages/Employee/Returned.vue'), },
      { path: '/TrackDocs', component: () => import('pages/Employee/TrackDocs.vue'),},
    ],
  },

  {
    path: '/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
