const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
    },
  },
});