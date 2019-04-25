<template>
  <section>
    <Nav />
    <router-view></router-view>
    <ListTransactions :transactions="transactions" />
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';
import ListTransactions from '@/components/transactions/List.vue';
import Nav from '@/components/transactions/Nav.vue';

export default {
  components: {
    ListTransactions,
    Nav,
  },

  computed: {
    ...mapGetters({
      transactions: types.TRANSACTIONS_LIST,
    }),
  },

  methods: {
    ...mapActions({
      getTransactions: types.TRANSACTIONS_LIST_ME, // ?
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
</style>
