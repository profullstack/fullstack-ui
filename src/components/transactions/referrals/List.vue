<template>
  <div class="referrals">
    <h1>My Referrals</h1>
    <ul class="list">
      <p class="message" v-if="!referrals.length">No referrals yet.</p>
      <li v-for="(tx, index) in referrals" :key="index">
        <h2>{{tx.createdAt}}</h2>
        <p>{{tx.amount}} {{tx.currency}}</p>
        <nav class="subnav">
          <router-link :to="`/transactions/${tx._id}`">show</router-link>
        </nav>
      </li>
    </ul>
    <form>
      <p>Refer your family and friends and start earning with our referral program.</p>
      <div class="form-field">
        <p><b>Reseller:</b> Earn 20% commission
          on each sale you bring in (paid in bitcoin on a monthly basis).</p>
        <h3>Your reseller link (earn bitcoin):</h3>
        <input type="text" :value="resellerLink" />
      </div>
      <div class="form-field">
        <p><b>Referral:</b> 1 year signup gets you a free month,
          a quarter signup gets you 2 weeks free,
          and 1 month gets you a free week of service.</p>
        <p>Your account expiration will be topped off at time of successful transaction.</p>
        <h3>Your referral link (earn free service):</h3>
        <input type="text" :value="referralLink" />
      </div>
      <p>Spamming and abuse is prohibited, your account will be
        deleted should we get complaints.</p>
    </form>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';

export default {
  computed: {
    ...mapGetters({
      referrals: types.TRANSACTIONS_REFERRALS,
      me: types.ACCOUNTS_USER,
    }),
    resellerLink() {
      // https://toru.la/#/register?referrer=rawsports&reseller=true
      return `${window.location.protocol}//${window.location.hostname}/#/register?referrer=${this.me.username}&reseller=true`;
    },
    referralLink() {
      // https://toru.la/#/register?referrer=rawsports&reseller=false
      return `${window.location.protocol}//${window.location.hostname}/#/register?referrer=${this.me.username}&reseller=false`;
    },
  },

  methods: {
    ...mapActions({
      getReferrals: types.TRANSACTIONS_REFERRALS_ME,
    }),
    ...mapMutations({
      resetReferrals: types.TRANSACTIONS_REFERRALS,
    }),
  },

  mounted() {
    this.getReferrals();
  },

  beforeDestroy() {
    this.resetReferrals([]);
  },
};
</script>
<style lang="scss" scoped>
.referrals {
  text-align: left;
  max-width: 60rem;
  margin: 1rem auto;

  .message {
    margin: 1rem auto 4rem;
    text-align: center;
  }

  .list {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    li {
      margin: 1rem;
    }
  }

  form {
    input {
      width: 90%;
    }

    p {
      margin: 1rem 0;
    }
  }
}
</style>
