import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Register from './views/Register.vue';
import ShowItem from './views/items/Show.vue';
import ListItems from './views/items/List.vue';
import EditItem from './views/items/Edit.vue';
import NewItem from './views/items/New.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/items',
      name: 'items',
      component: ListItems,
      children: [{
        path: 'new',
        component: NewItem,
        meta: {
          requiresAuth: true,
        },
      }],
    },
    {
      path: '/items/:id',
      name: 'item',
      component: ShowItem,
      children: [
        {
          path: 'edit',
          name: 'EditItem',
          component: EditItem,
          meta: {
            requiresAuth: true,
          },
        }],
    },
  ],
});

function requireAuth(to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isLoggedIn = !!localStorage.getItem('token');
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
}

router.beforeEach(requireAuth);

export default router;
