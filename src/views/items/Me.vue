<template>
  <section>
    <Nav />
    <router-view></router-view>
    <ListItems :items="items"/>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';
import ListItems from '@/components/items/List.vue';
import Nav from '@/components/items/Nav.vue';

export default {
  components: {
    ListItems,
    Nav,
  },

  computed: {
    ...mapGetters({
      items: types.ITEMS_LIST,
    }),
  },

  methods: {
    ...mapActions({
      getItems: types.ITEMS_LIST_ME,
    }),
    ...mapMutations({
      resetItems: types.ITEMS_LIST,
    }),
  },

  mounted() {
    this.getItems();
  },

  beforeDestroy() {
    this.resetItems([]);
  },
};
</script>
<style lang="scss" scoped>
</style>
