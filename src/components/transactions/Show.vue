<template>
  <div class="transaction">
    <h1>
      {{transaction.createdAt}}
    </h1>
    <article>
      {{transaction.amount}} {{transaction.baseCurrency}}
    </article>
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
