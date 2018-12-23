<template>
  <section>
    <Nav />
    <router-view></router-view>
    <ListNotes :notes="notes"/>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';
import ListNotes from '@/components/notes/List.vue';
import Nav from '@/components/notes/Nav.vue';

export default {
  components: {
    ListNotes,
    Nav,
  },

  computed: {
    ...mapGetters({
      notes: types.NOTES_LIST,
    }),
  },

  methods: {
    ...mapActions({
      getNotes: types.NOTES_LIST,
    }),
    ...mapMutations({
      resetNotes: types.NOTES_LIST,
    }),
  },

  mounted() {
    this.getNotes();
  },

  beforeDestroy() {
    this.resetNotes([]);
  },
};
</script>
<style lang="scss" scoped>
</style>
