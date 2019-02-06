<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Free 2 hour trial. $15 USD/month $40 USD/quarter or $125 USD/year (crypto only please)</p>
    <img class="logo" src="/logo.svg" />
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

  .logo {
    width: 20rem;
  }
</style>
