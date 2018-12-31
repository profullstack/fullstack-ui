<template>
  <div class="transaction">
    {{pendingTx}}
    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>Create transaction</legend>
        <div class="form-field">
          <input type="text"
                 v-model="transaction.currency"
                 placeholder="Enter currency" />
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
        // todo: show iframe for payments from coinpayments.net
        this.$router.push(`/transactions/${this.pendingTx._id}`);
      }
    }
  },
};
</script>
<style lang="scss" scoped>

</style>
