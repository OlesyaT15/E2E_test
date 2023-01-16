/// <reference types="cypress" />

context('TC12', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('Use of Arabic numerals', () => {

    cy.get('input[name="register[firstname]"]').type('1234567890').should('have.value', '1234567890')
 
    cy.get('#simpleregister_button_confirm').click()
    
  })
})