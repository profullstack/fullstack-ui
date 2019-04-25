<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<<<<<<< HEAD
    <p>This project is copyright © 2018 - Anthony Ettinger</p>
    <p>
      Code is only available as a demonstration and is not to be<br />
      used in production without prior written consent.
    </p>
=======
    <p>Free 5 day trial. $6 USD/month $15 USD/quarter or $50 USD/year (crypto only)</p>
    <img class="logo" src="/logo.svg" />
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
<<<<<<< HEAD
=======

  .logo {
    width: 20rem;
  }
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
</style>
