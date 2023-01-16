/// <reference types="cypress" />

context('TC19', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('Entering less than 4 characters in the Password field', () => {

    cy.get('input[name="register[password]"]').type('wta').should('have.value', 'wta')

    cy.get('input[name="register[firstname]"]').type(' ').should('have.value', ' ')
    
  })
})