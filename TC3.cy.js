/// <reference types="cypress" />


context('TC3', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/login/')
  })

  it('Login by phone number', () => {
    cy.get('input[name="email"]')
      .type('89004300680').should('have.value', '89004300680')

    cy.get('input[name="password"]')
      .type('362054').should('have.value', '362054')

    cy.get('input[class="button"]').click()

  })
})