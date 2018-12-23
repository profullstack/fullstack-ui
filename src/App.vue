<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">{{$t('home')}}</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/register"
                   v-if="!isLoggedIn">Register</router-link>
      <router-link to="/login"
                   v-if="!isLoggedIn">Login</router-link>
      <router-link to="/dashboard"
                   v-if="isLoggedIn">Dashboard</router-link>
      <a href="#"
         v-if="isLoggedIn"
         @click.prevent="onLogout">Logout</a>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import * as types from './store/types';

export default {
  computed: {
    ...mapGetters({
      user: types.ACCOUNTS_USER,
      status: types.ACCOUNTS_LOGIN_STATUS,
      token: types.ACCOUNTS_TOKEN,
    }),
    isLoggedIn() {
      return !!this.token;
    },
  },
  methods: {
    ...mapActions({
      logout: types.ACCOUNTS_LOGOUT,
    }),

    onLogout() {
      this.logout()
        .then(() => {
          this.$router.push('/');
        });
    },
  },
};
</script>
<style lang="scss">
  @import './src/assets/styles/base.scss';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 auto;
    max-width: 80%;
  }

  nav {
    padding: 3rem;

    a {
      font-weight: bold;
      color: #2c3e50;
      padding: .5rem 1rem;
      background: #ccc;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
