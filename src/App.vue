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
    <header>
      <div class="status error" v-if="error">
        {{errorMessage}}
        <a href="#" @click.prevent="closeStatus()">x</a>
      </div>
    </header>
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from './store/types';

export default {
  computed: {
    ...mapGetters({
      user: types.ACCOUNTS_USER,
      status: types.ACCOUNTS_LOGIN_STATUS,
      token: types.ACCOUNTS_TOKEN,
      error: types.ERROR_STATUS,
    }),
    isLoggedIn() {
      return !!this.token;
    },
    errorMessage() {
      return (this.error.response && this.error.response.data.message) || this.error.message;
    },
  },
  methods: {
    ...mapActions({
      logout: types.ACCOUNTS_LOGOUT,
    }),

    ...mapMutations({
      clearError: types.ERROR_STATUS,
    }),

    onLogout() {
      this.logout()
        .then(() => {
          this.$router.push('/');
        });
    },

    closeStatus() {
      this.clearError(null);
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
    margin: 0 auto;
    max-width: 80%;
    color: #eee;
    background: #000;
    width: 100vw;
    min-height: 100vh;
  }

  nav {
    padding: 3rem;

    a {
      color: #2c3e50;
      padding: .5rem 1rem;
      background: #ccc;
      font-weight: 400;

      &:hover {
        color: #fff;
      }

      &.router-link-exact-active {
        color: #fff;
        background: #00899E
      }
    }
  }

  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    a {
      margin-left: 1rem;
      color: red;
      text-decoration: none;
    }
  }
</style>
