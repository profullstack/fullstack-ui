<template>
  <div class="dashboard">
    <h1>Dashboard {{status}}</h1>
    <ul>
      <li>
        <router-link to="/items">All Items</router-link>
      </li>
      <li>
        <router-link to="/items/me">My Items</router-link>
      </li>
      <li>
        <router-link to="/notes">All Notes</router-link>
      </li>
      <li>
        <router-link to="/notes/me">My Notes</router-link>
      </li>
      <li>
        <router-link to="/transactions/me">My Transactions</router-link>
      </li>
      <li>
        <router-link to="/whitelist">My Whitelist</router-link>
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
