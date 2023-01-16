/// <reference types="cypress" />

context('TC24', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('phone number that starts with the number 7 and contains more than 11 characters', () => {
    
    cy.get('input[name="register[telephone]"]').type('790043006811').should('have.value', '790043006811') 

    cy.get('#get_kodsms').click()

  })
})