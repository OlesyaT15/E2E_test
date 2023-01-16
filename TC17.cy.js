/// <reference types="cypress" />

context('TC17', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('Entering an invalid email address without a Latin character between @ and a dot during registration', () => {

    cy.get('input[name="register[email]"]').type('poiuytr@.ru').should('have.value', 'poiuytr@.ru')

    cy.get('input[name="register[firstname]"]').type(' ').should('have.value', ' ')
    
  })
})