<template>
  <div class="notes">
    <ul class="list">
      <li v-for="(note, index) in notes" :key="index">
        <h2>{{note.title}}</h2>
        <p>{{note.description}}</p>
        <nav class="subnav">
          <router-link :to="`/notes/${note._id}`">show</router-link>
          <router-link :to="`/notes/${note._id}/edit`">edit</router-link>
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
