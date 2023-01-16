/// <reference types="cypress" />

context('TC22', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('Entering 20 characters in the Password field', () => {

    cy.get('input[name="register[password]"]').type('f3j46G7Kih9fI$r@j%jB').should('have.value', 'f3j46G7Kih9fI$r@j%jB')

    cy.get('input[name="register[firstname]"]').type(' ').should('have.value', ' ')
    
  })
})