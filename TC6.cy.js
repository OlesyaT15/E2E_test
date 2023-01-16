/// <reference types="cypress" />


context('TC6', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/login/')
  })

  it('Login to incorrectly specified E-mail', () => {
    cy.get('input[name="email"]')
      .type('otokhtaeva15@jmail.com').should('have.value', 'otokhtaeva15@jmail.com')

    cy.get('input[name="password"]')
      .type('362054').should('have.value', '362054')
    cy.get('input[class="button"]').click()

  })
})