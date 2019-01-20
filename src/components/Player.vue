<template>
  <section>
    <div id="player" ref="player"></div>
  </section>
</template>
<script>
export default {
  name: 'player',
  props: ['channel'],
  data() {
    return {
      player: null,
      playerConfig: {
        key: 'f5e04f00-076b-47b3-a13f-c8e731f59124',
        cast: {
          enable: true
        },
        network: {
          preprocessHttpRequest: (type, request) => {
            console.log('type:', type);

            if (type && (
              // type === window.bitmovin.player.HttpRequestType.DRM_CERTIFICATE_FAIRPLAY ||
              type === window.bitmovin.player.HttpRequestType.DRM_LICENSE_CLEARKEY ||
              type === window.bitmovin.player.HttpRequestType.DRM_LICENSE_FAIRPLAY ||
              type === window.bitmovin.player.HttpRequestType.DRM_LICENSE_PLAYREADY ||
              type === window.bitmovin.player.HttpRequestType.DRM_LICENSE_PRIMETIME ||
              type === window.bitmovin.player.HttpRequestType.DRM_LICENSE_WIDEVINE ||
              type === window.bitmovin.player.HttpRequestType.MANIFEST_DASH ||
              type === window.bitmovin.player.HttpRequestType.MANIFEST_HLS_MASTER ||
              type === window.bitmovin.player.HttpRequestType.MANIFEST_HLS_VARIANT ||
              type === window.bitmovin.player.HttpRequestType.MANIFEST_SMOOTH
            )) {
              request.credentials = 'include';
              request.headers.Authorization = `Bearer ${this.token}`;
            }

            return Promise.resolve(request);
          },
        },
      },
      source: {
        dash: '/api/1/sling/ca0cad8dbb4a4e68962810d8a6aa8b6a.mpd?rewrite=false',
        hls: '/api/1/sling/ca0cad8dbb4a4e68962810d8a6aa8b6a.m3u8',
        drm: {
          widevine: {
            LA_URL: '/api/1/sling/yGsZQrFlUn',
          },
          playready: {
            LA_URL: '/api/1/sling/tLnhgQIIu',
          },
          fairplay: {
            // certificateURL: 'https://p-drmfp.movetv.com/fairplay/certificate',
            certificateURL: '/api/1/sling/bKIvEvxhlH',
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
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        },
        // poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg',
      },
    };
  },
  computed: {
    token() {
      return localStorage.getItem('token');
    },
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
  watch: {
    channel(newChannel) {
      const channel = newChannel;
      const streamUrl = channel.hls_url || channel.stream_url;
      const isHls = Boolean(channel.hls_url);

      this.source.dash = `${streamUrl}?rewrite=false`;
      this.source.hls = streamUrl.replace('.mpd', '.m3u8');

      if (isHls) {
        this.source.hls = streamUrl;
        delete this.source.drm;
        delete this.source.dash;
      }

      console.log('loading....', this.source);

      this.player.load(this.source).then(() => {
        console.log('Successfully loaded source', this.source.title);
        this.player.play();
      }, () => {
        // eslint-disable-next-line
        console.error('Error while loading source', arguments);
      });
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
  section {
    display: flex;
    align-items: center;
    width: calc(100vw - 25rem);
    height: calc(100vh - 10rem);

    #player {
      width: 100%;
      height: auto;
    }
  }
</style>
<style lang="scss">
  .bmpui-ui-watermark {
    display: none;
  }
</style>
