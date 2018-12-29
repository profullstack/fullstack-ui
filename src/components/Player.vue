<template>
  <div id="player" ref="player"></div>
</template>
<script>
export default {
  name: 'player',

  data() {
    return {
      player: null,
    };
  },

  mounted() {
    // eslint-disable-next-line
    (function (open) {
      // eslint-disable-next-line
      XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
        if (url.indexOf('bitmovin') > -1) {
          // eslint-disable-next-line
          url = 'https://localhost:3443/api/1/noop';
        }
        // eslint-disable-next-line
        open.apply(this, arguments);
      };
    }(XMLHttpRequest.prototype.open));

    const cast = { enable: true }; cast.application_id = 'EFC36863';
    const conf = {
      key: 'f5e04f00-076b-47b3-a13f-c8e731f59124',
      cast,
      playback:
          {
            autoplay: true,
            muted: false,
          },
      source: {
        dash: 'https://localhost:3443/api/1/sling/cde03261707a47c3ac3f4242765dd424.mpd?rewrite=false',
        hls: 'https://localhost:3443/api/1/sling/cde03261707a47c3ac3f4242765dd424.m3u8',
        drm:
            {
              widevine:
                {
                  LA_URL: 'https://localhost:3443/api/1/sling/yGsZQrFlUn',
                },
              playready: {
                LA_URL: 'https://localhost:3443/api/1/sling/tLnhgQIIu',
              },
              fairplay: {
                certificateURL: 'https://localhost:3443/api/1/bKIvEvxhlH',
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

    const player = new window.bitmovin.player.Player(this.$refs.player, { key: conf.key });
    player.load(conf.source)
      .then(() => {
        this.player = player;
        console.log(this.player);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>
<style lang="scss" scoped>
</style>
