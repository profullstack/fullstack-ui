<template>
  <nav class="navbar" :class="{ home: partial === 'Home' }">
    <router-link :to="logoLink" class="logo"><img src="../assets/logo.svg"></router-link>
    <div class="controls">
      <span v-if="user">{{user.username}}</span>
      <a href="#" v-if="user" @click.prevent="onLogout">logout</a>
      <router-link to="login" v-if="!user">login</router-link>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as types from '../store/types';

export default {
  name: 'navbar',

  data() {
    return {
      partial: this.$route.name,
    };
  },

  computed: {
    ...mapGetters({
      user: types.ACCOUNTS_USER,
    }),

    logoLink() {
      return this.user ? 'dashboard' : '/';
    },
  },

  watch: {
    $route: 'getPartial',
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

    getPartial() {
      this.partial = this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
  .navbar {
    padding: .4rem 1rem;
    text-align: left;
    background: #282928;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a.logo {
      display: block;
      width: 2.75rem;
      height: 2.75rem;
    }

    img {
      width: 2.75rem;
      height: 2.75rem;
    }
  }
</style>
