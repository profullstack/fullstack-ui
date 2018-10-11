<template>
  <section class="edit">
    <h1>Edit</h1>
    <EditItem :item="item"/>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';
import EditItem from '@/components/items/Edit.vue';

export default {
  components: {
    EditItem,
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
  .edit {
    margin: 1rem;
  }
</style>
