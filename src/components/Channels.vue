<template>
  <div id="channels" ref="channels">
    <form>
      <input type="text" name="filter" v-model="filter" />
    </form>
    <ul>
      <li v-for="(channel, index) in filteredChannels"
          :key="index">
        <a href="#"
           @click.prevent="onClickChannel(channel)">
          <div class="logo"
               :style="{
                  backgroundImage: `url('${channel.channel.desc_image || '/api/1/noop?ref=logo'}')`
                }"></div>
          <div class="meta">
            <div class="title" v-html="channel.channel.title"></div>
            <div class="subtitle" v-html="channel.channel.assetTitle"></div>
          </div>
        </a>
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
      filteredChannels: [],
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
  watch: {
    filter(newVal) {
      const val = newVal.toLowerCase();
      const { channels } = this;
      this.filteredChannels = channels.filter((channel) => {
        const title = channel.channel.title.toLowerCase();
        const subtitle = channel.channel.assetTitle.toLowerCase();

        return title.indexOf(val) > -1 || subtitle.indexOf(val) > -1;
      });
    },
  },

  mounted() {
    this.getChannels()
      .then(() => {
        this.filteredChannels = this.channels;
      });
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
      z-index: 1;

      input {
        width: 100%;
        flex-grow: 1;
        margin-bottom: 0;
      }
    }

    ul {
      overflow-y: auto;
      color: #fff;
      text-align: left;

      li {
        padding: .25rem .5rem;

        a {
          text-decoration: none;
          color: #fff;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .logo {
          display: block;
          width: 5rem;
          height: 5rem;
          background-size: 5rem;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          margin: 0 1rem;
          filter: grayscale(100%);
        }

        .meta {
          display: block;
          padding: .5rem;
          width: 100%;

          .subtitle {
            font-size: .9em;
          }
        }
      }
    }
  }
</style>
