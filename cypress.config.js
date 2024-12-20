const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const fs = require('fs');
const path = require('path');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Register the 'isFileDownloaded' task
      on('task', {
        isFileDownloaded(fileName) {
          const downloadsFolder = path.resolve(__dirname, 'cypress/downloads');
          const filePath = path.join(downloadsFolder, fileName);
          // Check if the file exists
          return fs.existsSync(filePath);
        },
        // Task to clear the downloads folder
        clearDownloads() {
          const downloadsFolder = path.resolve(__dirname, 'cypress/downloads');
          fs.rmSync(downloadsFolder, { recursive: true, force: true });
          fs.mkdirSync(downloadsFolder);
          return null;
        },
      });
    },
  },
};
