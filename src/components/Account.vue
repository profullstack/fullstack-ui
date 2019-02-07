<template>
  <div class="account">
    <form @submit.prevent="onSubmit()">
      <fieldset>
        <legend>Account settings</legend>
      <div>
        <input type="email"
               id="email"
               placeholder="Enter email"
               v-model="user.email">
      </div>
      <div>
        <input type="text"
               id="phone"
               placeholder="Enter phone"
               v-model="user.phone">
      </div>
        <fieldset>
          <legend>Referral program</legend>
          <div>
            <input type="text"
                   placeholder="Deposit Address"
                   v-model="user.deposit.address">
          </div>
          <div class="form-field">
            <select v-model="user.deposit.currency">
              <option v-for="(currency, index) in currencies"
                      :key="index"
                      :value="currency">{{currency}}</option>
            </select>
          </div>
        </fieldset>
      <div class="actions">
        <button>Save</button>
      </div>
      </fieldset>
    </form>
    <div class="status" v-if="status">
      {{status}}
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import * as types from '@/store/types';

export default {
  data() {
    return {
      status: '',
      currencies: ['btc', 'ltc', 'bch', 'doge'],
    };
  },
  computed: {
    ...mapState({
      user: state => state.accounts.user,
    }),
  },
  methods: {
    ...mapActions({
      getUser: types.ACCOUNTS_ME,
      update: types.ACCOUNTS_ME_UPDATE,
    }),
    onSubmit() {
      const { email, phone, deposit } = this.user;
      this.update({
        email,
        phone,
        deposit,
      })
        .then(() => {
          this.$router.push('dashboard');
        });
    },
  },
  created() {
    this.getUser();
  },
};
</script>
<style lang="scss" scoped>
</style>
