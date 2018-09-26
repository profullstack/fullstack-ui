<template>
  <span class="icon-svg" :class="[name, classes]" v-html="getSvg()"></span>
</template>
<script>
export default {
  name: 'icon',
  props: ['name', 'classes'],
  data() {
    return {
      logo: '',
      prev: '',
      next: '',
      close: '',
    };
  },
  methods: {
    getSvg() {
      return this[this.name];
    },
  },
};
</script>
<style lang="scss">
</style>
