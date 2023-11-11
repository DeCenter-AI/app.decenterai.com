import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  defaultCommandTimeout: 10000,
  fileServerFolder: 'cypress/fixtures',
  fixturesFolder: 'cypress/fixtures',
})
