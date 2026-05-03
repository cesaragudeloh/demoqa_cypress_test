# DemoQA Cypress Test

Cypress tests for the DemoQA practice form using the Page Object Model, Cucumber, and Allure.

## Project Specs

- Test framework: Cypress
- BDD layer: @badeball/cypress-cucumber-preprocessor
- Reporting: Allure
- Pattern: Page Object Model
- Base URL: https://demoqa.com
- Feature path: `cypress/e2e/features/**/*.feature`
- Step definitions: `cypress/e2e/step_definitions/**/*.js`
- Fixtures: `cypress/fixtures`

## Scenarios

- Happy path: fill and submit the practice form
- Sad path: validate required fields on empty submit

## Requirements

- Node.js (LTS recommended)
- npm

## Install

```sh
npm install
```

## Scripts

- `npm run cypress:open`: open Cypress UI.
- `npm run cypress:run`: run Cypress in headless mode.
- `npm run test`: alias of `cypress:run`.
- `npm run allure:generate`: generate Allure report from `reports/allure-results`.
- `npm run allure:open`: open the generated Allure report.
- `npm run report`: run the main feature spec and generate the report.
- `npm run report:open`: run the main feature spec, generate, and open the report.
- `npm run cypress:interactive`: run the main feature spec in headed Chrome, then generate and open the report.

## Run the main feature

```sh
npm run report
```

## Generate and open the report

```sh
npm run report:open
```

## Run in headed Chrome

```sh
npm run cypress:interactive
```

## Open Cypress UI

```sh
npm run cypress:open
```

## Report output

- Allure results: `reports/allure-results`
- Allure report: `reports/allure-report`

## Notes

- Allure uses Cypress env values; `allowCypressEnv: true` is required for the plugin.
- Screenshots are captured for both happy and sad paths.
