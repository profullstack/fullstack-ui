import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export default new Router({
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
    },
  ],
});
