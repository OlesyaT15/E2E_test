/// <reference types="cypress" />

context('TC20', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('Entering 4 characters in the Password field during registration', () => {

    cy.get('input[name="register[password]"]').type('wopa').should('have.value', 'wopa')

    cy.get('input[name="register[firstname]"]').type(' ').should('have.value', ' ')
    
  })
})