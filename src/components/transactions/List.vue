<template>
  <div class="transactions">
    <ul class="list">
      {{transactions}}
      <li v-for="(tx, index) in transactions" :key="index">
        <h2>{{tx.createdAt}}</h2>
        <p>{{tx.amount}} {{tx.currency}}</p>
        <nav class="subnav">
          <router-link :to="`/transactions/${tx._id}`">show</router-link>
        </nav>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';

export default {
  computed: {
    ...mapGetters({
      transactions: types.TRANSACTIONS_LIST,
    }),
  },

  methods: {
    ...mapActions({
      getTransactions: types.TRANSACTIONS_LIST_ME,
    }),
    ...mapMutations({
      resetTransactions: types.TRANSACTIONS_LIST,
    }),
  },

  mounted() {
    this.getTransactions();
  },

  beforeDestroy() {
    this.resetTransactions([]);
  },
};
</script>
<style lang="scss" scoped>
  .list {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    li {
      margin: 1rem;
    }
  }
</style>
