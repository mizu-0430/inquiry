// Composables
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/MainPage.vue'),
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: () => import('@/views/home/HomePage.vue'),
        meta: {
          breadcrumbs: [
            {title: '主页', disabled: false},
          ]
        },
      },
      {
        path: '/company',
        component: () => import('@/views/company/CompanyPage.vue'),
        meta: {
          breadcrumbs: [
            {title: '主页', disabled: false},
            {title: '企业', disabled: false},
          ]
        },
      },
      {
        path: '/message',
        component: () => import('@/views/message/MessagePage.vue'),
        meta: {
          breadcrumbs: [
            {title: '主页', disabled: false},
            {title: '留言', disabled: false},
          ]
        },
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
