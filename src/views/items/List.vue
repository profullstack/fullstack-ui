<template>
  <section>
    <Nav />
    <router-view></router-view>
    <ListItems :items="items"/>
  </section>
</template>
<script>
import ListItems from '@/components/items/List.vue';
import Nav from '@/components/items/Nav.vue';
import items from '../../store/api/items';

export default {
  components: {
    ListItems,
    Nav,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getItems();
  },
  methods: {
    getItems() {
      items.getAll()
        .then((res) => {
          this.items = res.data;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
