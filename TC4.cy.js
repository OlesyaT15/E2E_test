/// <reference types="cypress" />


context('TC4', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/login/')
  })

  it('Login by E-mail', () => {
    cy.get('input[name="email"]')
      .type('otokhtaeva15@gmail.com').should('have.value', 'otokhtaeva15@gmail.com')

    cy.get('input[name="password"]')
      .type('362054').should('have.value', '362054')

    cy.get('input[class="button"]').click()

  })
})