<template>
  <div class="home">
    <HelloWorld msg="Welcome to Toru.la"/>
    <p>
      We offer over 800 channels including American and International.
      Some examples are NBA, NHL, MLB, NFL, GOLF, UFC (PPV), ESPN,
      Disney, HBO, Showtime,
      EPL (NBCSN/CNBC/BEIN), La Liga
      CNN, FOX, NBC, and many
      more.
    </p>
    <p>Signup to test it out for two hours!</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
  .home {
    max-width: 60rem;
    text-align: center;
    margin: 1rem auto;
  }
</style>
