<template>
  <div id="player"></div>
</template>
<script>
export default {
  name: 'player',

  mounted() {
    (function xhr(open) {
      XMLHttpRequest.prototype.open = function xhrOpen(method, url, ...args) {
        if (url.indexOf('bitmovin') > -1) {
          /* eslint-disable no-param-reassign */
          url = 'https://localhost:3443/api/1/noop';
        }
        open.apply(this, ...args);
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

    const player = window.bitmovin.player('player');

    player.setup(conf);
  },
};
</script>
<style lang="scss" scoped>
</style>
