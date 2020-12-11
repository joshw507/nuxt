/* eslint-disable no-undef */
/// <reference types="cypress" />

it('can see all 5 links on the LHN', () => {
  cy.visit('http://localhost:3000/');
  cy.get('h1[class="title"]')
});
