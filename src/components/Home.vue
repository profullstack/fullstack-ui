<template>
  <div class="home">
    <router-link to="login" class="button">continue</router-link>
    <h1>{{ tagline }}</h1>
    <h2>{{launch}}</h2>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      tagline: 'upgrade your digital marketing',
      launch: 'january 2018 launch',
    };
  },
};
</script>

<style lang="scss" scoped>
  .home {
    margin-top: 2rem;
    text-align: center;
  }
</style>
