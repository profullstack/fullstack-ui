<template>
  <div class="login">
    <form @submit.prevent="onSubmit">
      <div>
        <input type="text"
               id="username"
               placeholder="enter username"
               v-model="credentials.username">
      </div>
      <div>
        <input type="password"
               id="password"
               placeholder="enter password"
               v-model="credentials.password">
      </div>
      <div class="actions">
        <button>Login</button>
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
  name: 'login',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
      status: '',
    };
  },

  methods: {
    ...mapActions({
      login: types.ACCOUNTS_USER,
    }),
    onSubmit() {
      this.login(this.credentials)
        .then(() => {
          this.$router.push('dashboard');
        });
      //        this.api.post('/accounts/login', this.credentials)
      //          .then(res => {
      //            localStorage.setItem('token', res.data.token);
      //            this.status = res.data.message;
      //            this.$router.push('dashboard');
      //          })
      //          .catch(err => {
      //            this.status = err.message;
      //          });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
