import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/redirect',
    component: () => import('../views/home/index'),
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('../views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('../views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('../views/home/index'),
        name: 'home',
        meta: { requireAuth: false },
      }
    ]
  },
  {
    path: '/articles',
    component: Layout,
    redirect: '/articles',
    children: [
      {
        path: '/',
        name: 'articles',
        component: () => import('../views/articles/components/Articles'),
        meta: { requireAuth: false },
      }
    ]
  },
  {
    path: '/test',
    component: Layout,
    redirect: '/test/page1',
    children: [
      {
        path: 'page1',
        component: () => import('../views/Page1'),
        name: 'Page1',
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('../components/UserInfo'),
        name: 'Profile',
        meta: { requireAuth: true },
      }
    ]
  },
  {
    path: '/helloworld',
    component: () => import('../components/HelloWorld'),
    meta: { requireAuth: true },
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/aprofile',
    component: () => import('../components/UserInfo'),
    redirect: '/aprofile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('../components/UserInfo'),
        name: '2Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  base: '/index',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
