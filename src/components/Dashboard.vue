<template>
  <div class="dashboard">
    <h1>Dashboard {{status}}</h1>
    <ul>
      <li>
        <router-link to="keywords">Keywords</router-link>
      </li>
      <li>
        <router-link to="search">Search</router-link>
      </li>
      <li>
        <router-link to="parse">Parse</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as types from '../store/types';

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters({
      user: types.ACCOUNTS_USER,
      status: types.ACCOUNTS_LOGIN_STATUS,
    }),
  },
  methods: {
    ...mapActions({
      login: types.ACCOUNTS_USER,
    }),
  },
};
</script>

<style lang="scss" scoped>
  .dashboard {
    text-align: left;
  }

  a {
    text-decoration: none;
  }
</style>
