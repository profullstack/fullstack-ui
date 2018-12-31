<template>
  <section>
    <ShowTransaction :transaction="transaction" v-if="transaction" />
    <!--<router-view></router-view>-->
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';
import ShowTransaction from '@/components/transactions/Show.vue';

export default {
  components: {
    ShowTransaction,
  },
  computed: {
    ...mapGetters({
      transaction: types.TRANSACTIONS_TX,
    }),
  },

  methods: {
    ...mapActions({
      getTransaction: types.TRANSACTIONS_GET,
    }),
    ...mapMutations({
      resetTransaction: types.TRANSACTIONS_TX,
    }),
  },

  mounted() {
    this.getTransaction({ _id: this.$route.params.id });
  },

  beforeDestroy() {
    this.resetTransaction(null);
  },
};
</script>
<style lang="scss" scoped>
</style>
