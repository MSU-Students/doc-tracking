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
      { path: 'LandingPage', component: () => import('pages/LandingPage.vue') },
    ],
  },
  {
    path: '',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: 'AllDoc', component: () => import('pages/Admin/AllDoc.vue') },
      { path: 'TrackDoc', component: () => import('pages/Admin/TrackDoc.vue') },
      { path: 'DocType', component: () => import('pages/Admin/DocType.vue') },
      { path: 'Office', component: () => import('pages/Admin/Office.vue') },
      {
        path: 'ManageAccount',
        component: () => import('pages/Admin/ManageAccount.vue'),
      },
    ],
  },
  {
    path: '',
    component: () => import('layouts/EmpLayout.vue'),
    children: [
      {
        path: 'Documents',
        component: () => import('pages/Employee/Documents.vue'),
      },
      {
        path: 'Incoming',
        component: () => import('pages/Employee/Incoming.vue'),
      },
      {
        path: 'Received',
        component: () => import('pages/Employee/Received.vue'),
      },
      {
        path: 'Outcoming',
        component: () => import('pages/Employee/Outcoming.vue'),
      },
      {
        path: 'Returned',
        component: () => import('pages/Employee/Returned.vue'),
      },
      {
        path: 'TrackDocs',
        component: () => import('pages/Employee/TrackDocs.vue'),
      },
    ],
  },

  {
    path: '',
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
