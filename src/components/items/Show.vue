<template>
  <div class="item">
    <h1>
      <a :href="item.url" v-if="item.url">{{item.title}}</a>
      <span v-else>
        {{item.title}}
      </span>
    </h1>
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
      // confirm
      items.delete(this.item._id)
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
