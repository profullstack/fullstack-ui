<template>
  <div class="transaction">
    <h1>
      {{transaction.createdAt}}
    </h1>
      <p>{{transaction.amount}} {{transaction.baseCurrency}}</p>
      <ul class="list">
        <li v-for="(key, index) in Object.keys(transaction)" :key="index">
          <b>{{key}}:</b>
          <span>{{transaction[key]}}</span>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'ShowTransaction',
  props: ['transaction'],
};
</script>
<style lang="scss" scoped>

</style>
