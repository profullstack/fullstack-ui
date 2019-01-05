<template>
  <div class="transaction">
    {{pendingTx}}
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
                 value="quarterly"> $60 USD Quarterly
        </div>
        <div class="form-field">
          <input type="radio"
                 name="planType"
                 v-model="transaction.planType"
                 value="yearly"> $200 USD Yearly
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
