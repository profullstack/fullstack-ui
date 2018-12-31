<template>
  <div id="channels" ref="channels">
    <form>
      <input type="text" name="filter" :value="filter" />
    </form>
    <ul>
      <li v-for="(channel, index) in channels"
          :key="index"
          @click.prevent="onClickChannel(channel)">
        {{channel.channel.title}}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';

export default {
  name: 'Channels',
  data() {
    return {
      filter: '',
    };
  },
  computed: {
    ...mapGetters({
      channels: types.CHANNELS_LIST,
    }),
  },

  methods: {
    ...mapActions({
      getChannels: types.CHANNELS_LIST,
    }),
    ...mapMutations({
      resetChannels: types.CHANNELS_LIST,
    }),

    onClickChannel(channel) {
      this.$emit('onClickChannel', channel.channel);
    },
  },

  mounted() {
    this.getChannels();
  },

  beforeDestroy() {
    this.resetChannels([]);
  },
};
</script>
<style lang="scss" scoped>
  #channels {
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: calc(100vh - 10rem);
    width: 25rem;

    form {
      background: #fff;
      display: flex;

      input {
        width: 100%;
        flex-grow: 1;
      }
    }

    ul {
      overflow-y: auto;
      color: #fff;
      text-align: left;

      li {
        padding: .25rem .5rem;
      }
    }
  }
</style>
