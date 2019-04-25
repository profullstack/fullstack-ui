<template>
  <section>
    <Player :channel="channel" />
    <Channels v-on:onClickChannel="onClickChannel" />
  </section>
</template>
<script>
import Player from '@/components/Player.vue';
import Channels from '@/components/Channels.vue';

export default {
  name: 'player',
  components: {
    Player,
    Channels,
  },
  data() {
    return {
      channel: '',
    };
  },
  methods: {
    onClickChannel(channel) {
      this.channel = channel;
    },
  },
};
</script>
<style lang="scss" scoped>
  section {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>
