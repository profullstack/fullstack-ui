<template>
  <form class="edit">
    <input type="text" v-model="item.title" placeholder="Enter title" />
  </form>
</template>
<script>
export default {
  props: ['item'],
};
</script>
<style lang="scss" scoped>
</style>
