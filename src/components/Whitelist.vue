<template>
  <section id="whitelist">
    <p>You can whitelist up to three IP Addresses.</p>
    <p class="error" v-if="error">{{error}}</p>
    <ul class="list location">
      <li v-for="key in Object.keys(location)" :key="key">
        <b>{{key}}:</b>
        <span>{{location[key]}}</span>
      </li>
    </ul>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="ip" placeholder="Enter IP: (x.x.x.x)"/>
      <button>Add</button>
    </form>
    {{whitelist}}
    <ul class="list whitelist">
      <li v-for="(ip, index) in me.whitelist" :key="index">
        <span>{{index}}: {{ip}}</span>
        <button @click.prevent="onDelete(ip)">Delete</button>
      </li>
    </ul>
  </section>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';

export default {
  data() {
    return {
      ip: '',
      location: {},
      error: '',
    };
  },
  computed: {
    ...mapGetters({
      whitelist: types.WHITELIST_LIST,
      me: types.ACCOUNTS_USER,
    }),
  },
  methods: {
    ...mapMutations({
      setWhitelist: types.WHITELIST_LIST,
      setUser: types.ACCOUNTS_USER,
    }),
    ...mapActions({
      updateWhitelist: types.WHITELIST_POST,
      getUser: types.ACCOUNTS_USER,
    }),

    onDelete(ip) {
      const whitelist = this.me.whitelist.splice(this.me.whitelist.indexOf(ip), 1);
      this.setWhitelist(whitelist);

      if (this.whitelist.length === 0) {
        this.error = 'Whitelist must have at least 1 IP address.';
        return;
      }

      this.updateWhitelist({
        whitelist: this.whitelist,
      });

      this.me.whitelist = this.whitelist;
      this.setUser(this.me);
    },

    onSubmit() {
      if (!this.ip) {
        this.error = 'Please provide an IP address';
        return;
      }

      this.whitelist.push(this.ip);

      if (this.whitelist.length > 3) {
        this.error = 'You can only have up to 3 IP addresses.';
        return;
      }

      this.setWhitelist(this.whitelist);
      this.updateWhitelist({
        whitelist: this.whitelist,
      });
      this.me.whitelist = this.whitelist;
      this.setUser(this.me);
    },

    getLocation() {
      fetch('https://ipinfo.io/json')
        .then(res => res.json())
        .then((res) => {
          this.location = res;
        });
    },
  },
  mounted() {
    this.getLocation();
    this.setWhitelist(this.me.whitelist);
  },
};
</script>
<style lang="scss" scoped>
  ul.location {
    width: 40rem;
    margin: 0 auto;
    text-align: left;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .whitelist {
    button {
      margin-left: 1rem;
      color: #fff;
    }
  }
</style>
