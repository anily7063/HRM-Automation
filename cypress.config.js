const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

require('dotenv').config()

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  
  e2e: {
    watchForFileChanges: false,
    env:{
      BASE_URL:process.env.BASE_URL,
      ADMIN_USERNAME:process.env.ADMIN_USERNAME,
      ADMIN_PASSWORD:process.env.ADMIN_PASSWORD
          },
      
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    defaultCommandTimeout: 10000,
            testIsolation: false,
  },
});
