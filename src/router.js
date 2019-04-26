import Vue from 'vue';
import Router from 'vue-router';
import { isNil } from 'lodash';
import store from '@/store';
import Home from './views/Home.vue';
import CheckAuth from './views/CheckAuth.vue';
import Login from './views/Login.vue';
import Protected from './views/Protected.vue';
import About from './views/About.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
        authRequired: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/protected',
      name: 'protected',
      meta: {
        authRequired: true
      },
      component: Protected
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        authRequired: false
      }
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
