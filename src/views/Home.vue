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

    <footer>
      <p>(We also have a 20% commission bitcoin affiliate program,
        earn free services too,
        signup for free to join)</p>
      <p>If you own a blog and write a review about our service
        or our affiliate program send a link to the
        article at <a href="mailto:hello@toru.la?subject=Torula%20review">hello@toru.la</a>
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
