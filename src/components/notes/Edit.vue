<template>
  <div class="note">
    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>Edit note</legend>
        <div class="form-field">
          <input type="text" v-model="note.title" placeholder="Enter title" />
        </div>
        <div class="form-field">
          <textarea v-model="note.description" placeholder="Enter Description" />
        </div>
      </fieldset>
      <footer>
        <button>Update</button>
      </footer>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import * as types from '../../store/types';

export default {
  name: 'EditNote',
  props: ['note'],
  methods: {
    ...mapActions({
      updateNote: types.NOTES_PUT,
    }),
    onSubmit() {
      this.updateNote(this.note)
        .then(() => {
          this.$router.push('/dashboard');
        });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
