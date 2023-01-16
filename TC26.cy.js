/// <reference types="cypress" />

context('TC24', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('phone number that starts with a value other than 7 and 8', () => {
    
    cy.get('input[name="register[telephone]"]').type('29004300681').should('have.value', '29004300681') 

    cy.get('#get_kodsms').click()

  })
})