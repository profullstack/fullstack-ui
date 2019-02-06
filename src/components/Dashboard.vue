<template>
  <div class="dashboard">
    <h1>Dashboard {{status}}</h1>

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
    </ul>

    <footer>
      <ul>
        <li><a href="http:/kodi.toru.la">Torula repo</a> (<a href="https://kodi.tv/download">Kodi v18</a> required)</li>
        <!--<li>Follow us on Twitter <a href="http://twitter.com/torulatv">@torulatv</a></li>-->
        <li>Join us on Reddit at <a href="http://reddit.com/r/Torula">r/Torula</a></li>
      </ul>
    </footer>
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
    margin: 1rem auto;
    max-width: 60rem;
  }
</style>
