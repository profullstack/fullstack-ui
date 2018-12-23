<template>
  <div class="item">
    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>Create item</legend>
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
      item: {},
    };
  },

  methods: {
    ...mapActions({
      postItem: types.ITEMS_POST,
    }),
    onSubmit() {
      this.postItem(this.item)
        .then(() => {
          this.$router.push('/dashboard');
        });
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
