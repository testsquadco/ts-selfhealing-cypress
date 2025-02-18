const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

// Get environment from command line or default to 'development'
const environment = process.env.CYPRESS_ENVIRONMENT || 'development';

// Load environment-specific configuration
const envConfig = require(`./cypress/config/environments/${environment}.json`);

module.exports = defineConfig({
  e2e: {
    ...envConfig,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 720,
    retries: {
      runMode: 2,
      openMode: 1
    },
    video: true,
    screenshotOnFailure: true,
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });
      
      // Merge environment config with base config
      return { ...config, ...envConfig };
    }
  }
}); 