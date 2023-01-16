/// <reference types="cypress" />

context('TC21', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('Entering more than 20 characters in the Password field', () => {

    cy.get('input[name="register[password]"]').type('f3j46G7Kih9fI$r@j%jBA ').should('have.value', 'f3j46G7Kih9fI$r@j%jBA ')

    cy.get('input[name="register[firstname]"]').type(' ').should('have.value', ' ')
    
  })
})