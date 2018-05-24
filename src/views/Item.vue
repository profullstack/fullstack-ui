<template>
  <Item :item="item" />
</template>
<script>
import items from '../store/api/items';

export default {
  data() {
    return {
      item: {},
    };
  },
  mounted() {
    this.getItem();
  },
  methods: {
    getItem() {
      const { id } = this.$route.params.id;

      items.getItem(id)
        .then((res) => {
          this.item = res.data;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
