/// <reference types="cypress" />

context('TC24', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('phone number on which the user has already been registered', () => {
    
    cy.get('input[name="register[telephone]"]').type('79004300680').should('have.value', '79004300680') 

    cy.contains ("Нет").click()

  })
})