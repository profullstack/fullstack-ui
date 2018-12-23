<template>
  <section>
    <ShowNote :note="note" v-if="note" />
    <router-view></router-view>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';
import ShowNote from '@/components/notes/Show.vue';

export default {
  components: {
    ShowNote,
  },
  computed: {
    ...mapGetters({
      note: types.NOTES_NOTE,
    }),
  },

  methods: {
    ...mapActions({
      getNote: types.NOTES_GET,
    }),
    ...mapMutations({
      resetNote: types.NOTES_NOTE,
    }),
  },

  mounted() {
    this.getNote({ _id: this.$route.params.id });
  },

  beforeDestroy() {
    this.resetNote(null);
  },
};
</script>
<style lang="scss" scoped>
</style>
