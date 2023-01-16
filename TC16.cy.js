/// <reference types="cypress" />

context('TC16', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('Latin characters in the field for entering an email address', () => {

    cy.get('input[name="register[email]"]').type('qwertyuiop').should('have.value', 'qwertyuiop')

    cy.get('input[name="register[firstname]"]').type(' ').should('have.value', ' ')
    
  })
})