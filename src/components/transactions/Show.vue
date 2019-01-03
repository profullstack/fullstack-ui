<template>
  <div class="transaction">
      <!--<ul class="list">-->
        <!--<li v-for="(key, index) in Object.keys(transaction)" :key="index">-->
          <!--<b>{{key}}:</b>-->
          <!--<span>{{transaction[key]}}</span>-->
        <!--</li>-->
      <!--</ul>-->

    <p>Please send <b>{{transaction.amount}}</b>
      in <b>{{transaction.baseCurrency}}</b> to address <b>{{transaction.address}}</b>
      within the next <b>{{transaction.timeout/60/60}}</b> hours.
    </p>
    <img :src="qrcode" class="qrcode" />
    <p><b>Created at:</b> {{transaction.createdAt}}</p>
    <p><b>Payment Address:</b> {{transaction.address}}</p>
    <p><b>Pay Amount:</b> {{transaction.amount}} in {{transaction.baseCurrency}}</p>
    <p><b>Confirmations needed:</b> {{transaction.confirms_needed}}</p>
    <p><b>Transaction id:</b> {{transaction._id}}</p>
    <p><b>Status:</b> {{status}}</p>
  </div>
</template>
<script>
export default {
  name: 'ShowTransaction',
  props: ['transaction'],
  data() {
    return {
      status: 'Waiting for payment...',
    };
  },
  computed: {
    qrcode() {
      return `data:image/png;base64,${this.transaction.qrcode}`;
    },
  },
};
</script>
<style lang="scss" scoped>
  .transaction {
    p {
      margin: .5rem 0;
    }
  }
</style>
