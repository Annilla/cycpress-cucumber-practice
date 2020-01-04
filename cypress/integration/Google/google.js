import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'

Given('前往 Google 網址', () => {
  cy.visit(url)
})