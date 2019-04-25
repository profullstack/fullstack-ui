<template>
  <div class="home">
    <HelloWorld msg="Welcome to fullstack-ui"/>
    <p>Signup to test it out free for 5 days! (no payment required)</p>

    <footer>
      <p>(We also have a 20% commission bitcoin affiliate program,
        earn free services too,
        signup for free to join)</p>
      <p>If you own a blog and write a review about our service
        or our affiliate program send a link to the
        article at <a href="mailto:hello@fullstack.style?subject=Review">hello@fullstack.style</a>
        and if we approve you'll get a free year of service!</p>
    </footer>
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

    footer {
      margin-top: 5rem;

      font-size: .8em;
    }
  }
</style>
