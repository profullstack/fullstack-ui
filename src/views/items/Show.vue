<template>
  <ShowItem :item="item"/>
</template>
<script>
import ShowItem from '@/components/items/Show.vue';
import items from '../../store/api/items';

export default {
  components: {
    ShowItem,
  },
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
