/// <reference types="cypress" />

context('TC24', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('Entering a phone number that starts with the number 8', () => {
    
    cy.get('input[name="register[telephone]"]').type('89004300681').should('have.value', '89004300681') 

    cy.contains ("Нет").click()

  })
})