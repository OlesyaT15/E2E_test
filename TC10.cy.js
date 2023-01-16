/// <reference types="cypress" />

context('TC10', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('email address with which the user has already registered', () => {

    cy.get('input[name="register[email]"]').type('otokhtaeva15@gmail.com').should('have.value', 'otokhtaeva15@gmail.com')

    cy.get('input[name="register[password]"]').type('362054').should('have.value', '362054')
    
  })
})