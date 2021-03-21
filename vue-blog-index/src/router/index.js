import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/redirect',
    component: () => import('../views/Home'),
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
    path: '/index',
    component: () => import('../components/Header'),
    redirect: '/index/home',
    children: [
      {
        path: 'home',
        component: () => import('../views/Home'),
        name: 'home'
      }
    ]
  },
  {
    path: '/profile',
    component: () => import('../components/Header'),
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('../components/UserInfo'),
        name: 'Profile'
      }
    ]
  },
  {
    path: '/profile',
    component: () => import('../components/Header'),
    redirect: '/profile/hello',
    hidden: true,
    children: [
      {
        path: 'hello',
        component: () => import('../components/UserInfo'),
        name: 'hello'
      }
    ]
  },
  {
    path: '/helloworld',
    component: () => import('../components/HelloWorld'),
    meta: { requireAuth: true },
  },
  {
    path: '/test1',
    component: () => import('../components/UserInfo')
    // hidden: true,
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
