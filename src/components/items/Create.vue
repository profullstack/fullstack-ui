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
export default {
  data() {
    return {
      item: {},
    };
  },
};
</script>
<style lang="scss" scoped>

</style>
