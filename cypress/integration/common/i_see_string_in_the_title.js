import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`看到標題包含 {string}`, (title) => {
  cy.title().should('include', title)
})