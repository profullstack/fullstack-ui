<template>
  <div class="item">
    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>Create note</legend>
        <div class="form-field">
          <input type="text" v-model="note.title" placeholder="Enter title" />
        </div>
        <div class="form-field">
          <textarea v-model="note.description" placeholder="Enter Description" />
        </div>
      </fieldset>
      <footer>
        <button>Create</button>
      </footer>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import * as types from '../../store/types';

export default {
  data() {
    return {
      note: {},
    };
  },

  methods: {
    ...mapActions({
      postNote: types.NOTES_POST,
    }),
    onSubmit() {
      this.postNote(this.note)
        .then(() => {
          this.$router.push('/dashboard');
        });
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
