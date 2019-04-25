<template>
  <div id="app">
<<<<<<< HEAD
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
=======
    <header>
      <nav id="nav">
        <router-link to="/">{{$t('home')}}</router-link>
        <router-link to="/player">Player</router-link>
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
      <div class="status error" v-if="error">
        {{errorMessage}}
        <a href="#" @click.prevent="closeStatus()">x</a>
      </div>
    </header>
    <section>
      <router-view/>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
import * as types from './store/types';

export default {
  computed: {
    ...mapGetters({
      user: types.ACCOUNTS_USER,
      status: types.ACCOUNTS_LOGIN_STATUS,
      token: types.ACCOUNTS_TOKEN,
<<<<<<< HEAD
=======
      error: types.ERROR_STATUS,
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
    }),
    isLoggedIn() {
      return !!this.token;
    },
<<<<<<< HEAD
=======

    errorMessage() {
      return (this.error.response && this.error.response.data.message) || this.error.message;
    },
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
  },
  methods: {
    ...mapActions({
      logout: types.ACCOUNTS_LOGOUT,
    }),

<<<<<<< HEAD
=======
    ...mapMutations({
      clearError: types.ERROR_STATUS,
    }),

>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
    onLogout() {
      this.logout()
        .then(() => {
          this.$router.push('/');
        });
    },
<<<<<<< HEAD
=======

    closeStatus() {
      this.clearError(null);
    },
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
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
<<<<<<< HEAD
    color: #2c3e50;
    margin: 0 auto;
    max-width: 80%;
=======
    color: #eee;
    margin: 0 auto;
    background: #000;
    width: 100vw;
    min-height: 100vh;
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
  }

  nav {
    padding: 3rem;

    a {
<<<<<<< HEAD
      font-weight: bold;
      color: #2c3e50;
      padding: .5rem 1rem;
      background: #ccc;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
=======
      font-weight: 400;
      padding: .5rem 1.25rem;
      background: #000;
      color: #00899E;
      text-decoration: none;

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
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
</style>
