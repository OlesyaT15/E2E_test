/// <reference types="cypress" />


context('TC5', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/login/')
  })

  it('Logging an incorrectly specified phone number', () => {
    cy.get('input[name="email"]')
      .type('89004300681').should('have.value', '89004300681')

    cy.get('input[name="password"]')
      .type('362054').should('have.value', '362054')

    cy.get('input[class="button"]').click()

  })
})