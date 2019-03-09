<template>
  <div class="register">
    <form @submit.prevent="onSubmit">
      <div>
        <input type="text"
               id="username"
               placeholder="Enter username"
               v-model="credentials.username">
      </div>
      <div>
        <input type="email"
               id="email"
               placeholder="Enter email"
               v-model="credentials.email">
      </div>
      <div>
        <input type="text"
               id="phone"
               placeholder="Enter phone"
               v-model="credentials.phone">
      </div>
      <div>
        <input type="password"
               id="password"
               placeholder="Enter password"
               v-model="credentials.password">
      </div>
      <div>
        <input type="password"
               id="passwordRepeat"
               placeholder="Enter password again"
               v-model="credentials.passwordRepeat">
      </div>
      <div class="actions">
        <button>Signup</button>
      </div>
    </form>
    <div class="status" v-if="status">
      {{status}}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import * as types from '../store/types';

export default {
  name: 'register',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
        passwordRepeat: '',
        email: '',
        phone: '',
        referred: {},
        whitelist: [],
      },
      status: '',
    };
  },

  methods: {
    ...mapActions({
      register: types.ACCOUNTS_REGISTER,
    }),
    onSubmit() {
      this.register(this.credentials)
        .then(() => {
          this.$router.push('dashboard');
        });
    },

    setReferralDetails() {
      const referred = localStorage.getItem('referred') ?
        JSON.parse(localStorage.getItem('referred')) :
        {};

      if (!referred.user && this.$route.query.referrer) {
        referred.user = this.$route.query.referrer;
      }

      if (typeof referred.reseller === 'undefined') {
        referred.reseller = Boolean(this.$route.query.reseller);
      }

      if (referred.user) {
        localStorage.setItem('referred', JSON.stringify(referred));
      }

      this.credentials.referred = referred;
    },
  },
  mounted() {
    this.setReferralDetails();
  },
};
</script>

<style lang="scss" scoped>
</style>
