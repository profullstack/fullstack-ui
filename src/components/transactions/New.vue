<template>
  <div class="transaction">
    <h1>Top off your account</h1>
    <p>Select the crypto currency you have on hand to pay with then select plan duration.</p>
    <p>Your account will automatically be topped off.</p>
    <p>These prices are for early bird adopters who don't mind a little dust
while we improve our platform.</p>
    <p>You will have a limited time to complete the transaction so only
create one if you are ready to pay.</p>

    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>Create transaction</legend>
        <div class="form-field">
          <select v-model="transaction.baseCurrency">
            <option selected>Select Currency</option>
            <option v-for="(currency, index) in currencies"
                    :key="index"
                    :value="currency">{{currency}}</option>
          </select>
        </div>
        <div class="form-field">
          <input type="radio"
                 name="planType"
                 v-model="transaction.planType"
                 value="monthly"> $15 USD 1 month
        </div>
        <div class="form-field">
          <input type="radio"
                 name="planType"
                 v-model="transaction.planType"
                 value="quarterly"> $40 USD Quarterly
        </div>
        <div class="form-field">
          <input type="radio"
                 name="planType"
                 v-model="transaction.planType"
                 value="yearly"> $125 USD Yearly
        </div>
      </fieldset>
      <footer>
        <button>Create</button>
      </footer>
    </form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import * as types from '../../store/types';

export default {
  data() {
    return {
      transaction: {},
      currencies: ['btc', 'ltc', 'bch', 'doge'],
    };
  },
  computed: {
    ...mapGetters({
      pendingTx: types.TRANSACTIONS_PENDING,
    }),
  },
  methods: {
    ...mapActions({
      postTransaction: types.TRANSACTIONS_POST,
    }),
    onSubmit() {
      this.postTransaction(this.transaction);
    },
  },
  watch: {
    pendingTx(newVal) {
      if (newVal._id) {
        this.$router.push(`/transactions/${this.pendingTx._id}`);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
  .transaction {
    fieldset {
      width: 20rem;
    }
  }

</style>
