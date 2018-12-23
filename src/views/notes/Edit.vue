<template>
  <section class="edit">
    <h1>Edit</h1>
    <EditNote :note="note"/>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';
import EditNote from '@/components/notes/Edit.vue';

export default {
  components: {
    EditNote,
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
  .edit {
    margin: 1rem;
  }
</style>
