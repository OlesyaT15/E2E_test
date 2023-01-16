/// <reference types="cypress" />

context('TC15', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('characters in Cyrillic in the field for entering an email address', () => {

    cy.get('input[name="register[email]"]').type('йцукенгшщзх').should('have.value', 'йцукенгшщзх')

    cy.get('input[name="register[firstname]"]').type(' ').should('have.value', ' ')
    
  })
})