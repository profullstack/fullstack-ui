// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': (browser) => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to fullstack-ui')
      .assert.elementCount('h1', 1)
      .assert.elementCount('p', 2)
      .end();
  },
};
