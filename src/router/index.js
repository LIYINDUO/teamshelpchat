// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ProvideHelp from '@/views/ProvideHelp.vue'
import GetHelp from '@/views/GetHelp.vue'
import Team from '@/views/Team.vue'

// const routes = [
//   {
//     path: '/',
//     component: () => import('@/layouts/default/Default.vue'),
//     children: [
//       {
//         path: '/',
//         name: 'dashboard',
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: Dashboard,
//       },
//       {
//         path: '/projects',
//         name: 'projects',
//         component: Projects,
//       },
//       {
//         path: '/team',
//         name: 'team',
//         component: Team,
//       },
//     ],
//   },
//   {
//     path: '/:catchAll(.*)',
//     name: '404Name',
//     component: () => import('@/views/NotFound.vue'),
//   },
// ]

const routes = [
  
  {
    path: '/',
    name: 'ProvideHelp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProvideHelp,
  },
  {
    path: '/gethelp',
    name: 'gethelp',
    component: GetHelp,
  },
  {
    path: '/team',
    name: 'team',
    component: Team,
  },
  {
    path: '/:catchAll(.*)',
    name: '404Name',
    component: () => import('@/views/NotFound.vue'),
  },
]

// const routes = [
//   {
//     path: '/',
//     name: 'dashboard',
//     component: Dashboard
//   },
//   {
//     path: '/projects',
//     name: 'projects',
//     component: Projects
//   },
//   {
//     path: '/team',
//     name: 'team',
//     component: Team
//   }
// ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
