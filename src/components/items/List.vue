<template>
  <div class="items">
    <ul class="list">
      <li v-for="(item, index) in items" :key="index">
        <h2>{{item.title}}</h2>
        <p><a :href="item.url">{{item.url}}</a></p>
        <p>{{item.description}}</p>
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
      items: types.ITEMS_LIST,
    }),
  },

  methods: {
    ...mapActions({
      getItems: types.ITEMS_LIST,
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
  .list {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;

    li {
      margin: 1rem;
    }
  }
</style>
