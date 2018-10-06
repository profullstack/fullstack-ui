<template>
  <div class="note">
    <h1>
      {{note.title}}
    </h1>
    <article>
      {{note.description}}
    </article>
    <footer>
      <button type="button"
              @click.prevent="onDelete">Delete</button>
    </footer>
  </div>
</template>
<script>
import notes from '../../store/api/notes';

export default {
  name: 'ShowNote',
  props: ['note'],
  data() {
    return {
      message: '',
    };
  },
  methods: {
    onDelete() {
      // confirm
      notes.delete(this.note._id)
        .then(() => {
          this.message = 'Note deleted!';
          this.$router.push('/dashboard');
        })
        .catch((err) => {
          console.error(err);
          this.message = 'Unable to delete note';
        });
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
