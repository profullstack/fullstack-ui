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
    <p><b>Status:</b> {{status.status_text}}</p>
    <p v-if="status.recv_confirms"><b>Confirmations Received:</b> {{status.recv_confirms}}</p>
    <p v-if="status.send_tx"><b>Explorer:</b>&nbsp;<a :href="explorer">view transaction</a></p>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import * as types from '../../store/types';

export default {
  name: 'ShowTransaction',
  props: ['transaction'],
  data() {
    return {
      polling: null,
    };
  },
  computed: {
    qrcode() {
      return `data:image/png;base64,${this.transaction.qrcode}`;
    },
    explorer() {
      return `https://www.blockchain.com/${this.transaction.baseCurrency}/tx/${this.status.send_tx}`;
    },
    ...mapGetters({
      status: types.TRANSACTIONS_STATUS,
    }),
  },
  methods: {
    ...mapActions({
      getStatus: types.TRANSACTIONS_STATUS,
    }),
  },
  mounted() {
    this.polling = setInterval(() => {
      const id = this.transaction.txn_id;
      this.getStatus({ id });
    }, 1000);
  },

  beforeDestroy() {
    clearInterval(this.polling);
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
