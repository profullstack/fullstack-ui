<template>
  <div class="item">
    <h1><a href="item.url">{{item.title}}</a></h1>
    <p class="message"
       v-if="message">{{message}}</p>
    <article>
      {{item.description}}
    </article>
    <footer>
      <button type="button"
              @click.prevent="onDelete">Delete</button>
    </footer>
  </div>
</template>
<script>
import items from '../../store/api/items';

export default {
  props: ['item'],
  data() {
    return {
      message: '',
    };
  },
  methods: {
    onDelete() {
      const { id } = this.item._id;

      items.delete(id)
        .then(() => {
          this.message = 'Item deleted!';
          this.$router.push('dashboard');
        })
        .catch((err) => {
          console.error(err);
          this.message = 'Unable to delete item';
        });
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
