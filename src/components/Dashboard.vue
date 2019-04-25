<template>
  <div class="dashboard">
    <h1>Dashboard {{status}}</h1>
<<<<<<< HEAD
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
    </ul>
=======

    <p>Your account expires on {{user.expiresAt}}.</p>
    <ul>
      <li>
        <router-link to="/whitelist">My Whitelist</router-link>
      </li>
      <li>
        <router-link to="/transactions/me">My Transactions</router-link>
      </li>
      <li>
        <router-link to="/transactions/referrals/me">My Referrals</router-link>
      </li>
      <li>
        <router-link to="/account">My Account</router-link>
      </li>
    </ul>

    <footer>
      <ul>
        <li><a href="http:/kodi.toru.la">Torula repo</a> (<a href="https://kodi.tv/download">Kodi v18</a> required)</li>
        <!--<li>Follow us on Twitter <a href="http://twitter.com/torulatv">@torulatv</a></li>-->
        <li>Join us on Reddit at <a href="http://reddit.com/r/Torula">r/Torula</a></li>
      </ul>
    </footer>
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
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
<<<<<<< HEAD
  }

  a {
    text-decoration: none;
=======
    margin: 1rem auto;
    max-width: 60rem;
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
  }
</style>
