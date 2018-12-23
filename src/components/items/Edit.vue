<template>
  <div class="item">
    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>Edit item</legend>
        <div class="form-field">
          <input type="text" v-model="item.title" placeholder="Enter title" />
        </div>
        <div class="form-field">
          <input type="text" v-model="item.url" placeholder="Enter URL" />
        </div>
        <div class="form-field">
          <textarea v-model="item.description" placeholder="Enter Description" />
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
  name: 'EditItem',
  props: ['item'],
  methods: {
    ...mapActions({
      updateItem: types.ITEMS_PUT,
    }),
    onSubmit() {
      this.updateItem(this.item)
        .then(() => {
          this.$router.push('/dashboard');
        });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
