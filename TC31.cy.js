/// <reference types="cypress" />

context('TC31', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/forgot-password/')
  })
  it('Unchecked Im not a robot', () => {

    cy.get('input[name="email"]').type('otokhtaeva15@gmail.com').should('have.value', 'otokhtaeva15@gmail.com')

    cy.get('input[type="submit"]').click()
   
  })
})