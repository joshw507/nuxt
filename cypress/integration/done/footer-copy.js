/* eslint-disable no-undef */
/// <reference types="cypress" />

it('should navigate to the contact us page using the link in the footer.', () => {
  cy.visit('http://localhost:3000/');
  cy.get('h1[class="tee"]')
});

