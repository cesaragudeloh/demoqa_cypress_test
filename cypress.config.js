const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    baseUrl: "https://demoqa.com",
    specPattern: "cypress/e2e/features/**/*.feature",
    env: {
      allure: true,
      allureResultsPath: "reports/allure-results",
      allureLogCypress: false,
      allureLogGherkin: true,
    },
  },
});
