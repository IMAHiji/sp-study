import Vue from 'vue';
import Router from 'vue-router';
import { isNil } from 'lodash';
import store from '@/store';
import Home from './views/Home.vue';
import CheckAuth from './views/CheckAuth.vue';
import About from './views/About.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/' || '/home',
      name: 'home',
      component: Home,
      meta: {
        authRequired: false
      }
    },
    {
      path: '/check-auth',
      name: 'check-auth',
      component: CheckAuth,
      meta: {
        authRequired: false
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        authRequired: false
      },
      component: About
    },
    {
      path: '/protected',
      name: 'protected',
      meta: {
        authRequired: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "client-chunk-protected" */ '@/views/Protected.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        authRequired: false
      },
      component: () => import(/* webpackChunkName: "client-chunk-login" */ '@/views/Login.vue')
    },
    {
      path: '/account',
      name: 'account',
      meta: {
        authRequired: true
      },
      component: () => import(/* webpackChunkName: "client-chunk-account" */ '@/views/Account.vue'),
      children: [
        {
          path: 'characters',
          component: () =>
            import(/* webpackChunkName: "client-chunk-account-characters" */ '@/views/Account-Characters.vue')
        }
      ]
    },
    {
      path: '/study',
      name: 'study',
      meta: {
        authRequired: true
      },
      component: () => import(/* webpackChunkName: "client-chunk-study"*/ '@/views/Study.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.authRequired && isNil(store.state.auth.user)) {
    const path = store.state.auth.user === null ? '/login' : '/check-auth';
    return next(`${path}?redirectUrl=${to.path}`);
  }
  next();
});

export default router;
