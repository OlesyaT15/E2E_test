/// <reference types="cypress" />

context('TC18', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('Entering an incorrect email address with a Latin character between @ and a dot during registration', () => {

    cy.get('input[name="register[email]"]').type('poiuytr@m.ru').should('have.value', 'poiuytr@m.ru')

    cy.get('input[name="register[firstname]"]').type(' ').should('have.value', ' ')
    
  })
})