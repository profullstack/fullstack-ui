<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>This project is copyright © 2018 - Anthony Ettinger</p>
    <p>
      Code is only available as a demonstration and is not to be<br />
      used in production without prior written consent.
    </p>
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
</style>
