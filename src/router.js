import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';
import Whitelist from '@/components/Whitelist.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Register from './views/Register.vue';
import ShowItem from './views/items/Show.vue';
import ListItems from './views/items/List.vue';
import EditItem from './views/items/Edit.vue';
import NewItem from './views/items/New.vue';
import MyItems from './views/items/Me.vue';
import ShowNote from './views/notes/Show.vue';
import ListNotes from './views/notes/List.vue';
import EditNote from './views/notes/Edit.vue';
import NewNote from './views/notes/New.vue';
import MyNotes from './views/notes/Me.vue';
import Player from './views/Player.vue';
import MyTransactions from './views/transactions/Me.vue';
import NewTransaction from './views/transactions/New.vue';
import ShowTransaction from './views/transactions/Show.vue';

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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/items/new',
      component: NewItem,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/items/me',
      name: 'my-items',
      component: MyItems,
      meta: {
        requiresAuth: true,
      },
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
    {
      path: '/notes',
      name: 'notes',
      component: ListNotes,
    },
    {
      path: '/notes/new',
      component: NewNote,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/notes/me',
      name: 'MyNotes',
      component: MyNotes,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/notes/:id',
      name: 'note',
      component: ShowNote,
      children: [
        {
          path: 'edit',
          name: 'EditNote',
          component: EditNote,
          meta: {
            requiresAuth: true,
          },
        }],
    },
    {
      path: '/player',
      name: 'player',
      component: Player,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/transactions/new',
      component: NewTransaction,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/transactions/me',
      name: 'MyTransactions',
      component: MyTransactions,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/transactions/:id',
      name: 'transaction',
      component: ShowTransaction,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/whitelist',
      name: 'whitelist',
      component: Whitelist,
      meta: {
        requiresAuth: true,
      },
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
