// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'default e2e tests': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('.hello')
      .assert.elementPresent('.title')
      .assert.cssProperty("h2", "color", "rgba(255, 0, 0, 1)") 
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.titleContains('tes2')
      .assert.elementCount('img', 1)
      .end()
  },

  'example e2e test using a custom command': browser => {
    browser
      .openHomepage()
      .assert.elementPresent('.hello')
      .assert.elementPresent('.title')

      .end()
  }
}
