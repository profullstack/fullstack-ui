<template>
  <section>
    <ShowItem :item="item" v-if="item" />
    <router-view></router-view>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';
import ShowItem from '@/components/items/Show.vue';

export default {
  components: {
    ShowItem,
  },
  computed: {
    ...mapGetters({
      item: types.ITEMS_ITEM,
    }),
  },

  methods: {
    ...mapActions({
      getItem: types.ITEMS_GET,
    }),
    ...mapMutations({
      resetItem: types.ITEMS_ITEM,
    }),
  },

  mounted() {
    this.getItem({ _id: this.$route.params.id });
  },

  beforeDestroy() {
    this.resetItem(null);
  },
};
</script>
<style lang="scss" scoped>
</style>
