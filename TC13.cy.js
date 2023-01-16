/// <reference types="cypress" />

context('TC13', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('Using other characters a name', () => {

    cy.get('input[name="register[firstname]"]').type('*&^%$#@!±').should('have.value', '*&^%$#@!±')
 
    cy.get('#simpleregister_button_confirm').click()
    
  })
})