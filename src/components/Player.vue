<template>
  <div id="player" ref="player"></div>
</template>
<script>
export default {
  name: 'player',

  data() {
    return {
      player: null,
      playerConfig: {
        key: 'f5e04f00-076b-47b3-a13f-c8e731f59124',
      },
      source: {
        dash: 'https://watch.torula.com/api/1/sling/cde03261707a47c3ac3f4242765dd424.mpd?rewrite=false',
        hls: 'https://watch.torula.com/api/1/sling/cde03261707a47c3ac3f4242765dd424.m3u8',
        drm:
          {
            widevine:
              {
                LA_URL: 'https://watch.torula.com/api/1/sling/yGsZQrFlUn',
              },
            playready: {
              LA_URL: 'https://watch.torula.com/api/1/sling/tLnhgQIIu',
            },
            fairplay: {
              certificateURL: 'https://p-drmfp.movetv.com/fairplay/certificate',
              getLicenseServerUrl(contentId) {
                return contentId.replace('skd://', 'https://');
              },
              prepareContentId(contentId) {
                return contentId;
              },
              prepareMessage(event) {
                return new Uint8Array(event.message);
              },
              prepareLicense(license) {
                return new Uint8Array(license);
              },
              licenseResponseType: 'arraybuffer',
            },
          },
      },
    };
  },
  computed: {
    api() {
      return process.env.NODE_ENV === 'production' ? '/api/1' : 'https://localhost:3443/api/1';
    },
  },
  methods: {
    setupPlayer() {
      const player = new window.bitmovin.player.Player(this.$refs.player, this.playerConfig);
      player.load(this.source).then(() => {
        this.player = player;
        console.log('Successfully loaded source');
      }, () => {
        // eslint-disable-next-line
        console.error('Error while loading source', arguments);
      });
    },
    destroyPlayer() {
      if (this.player) {
        this.player.destroy();
        this.player = null;
      }
    },
  },
  mounted() {
    this.setupPlayer();
  },
  destroyed() {
    this.destroyPlayer();
  },
};
</script>
<style lang="scss" scoped>
</style>
