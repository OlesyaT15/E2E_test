/// <reference types="cypress" />


context('TC7', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/login/')
  })

  it('Login an incorrect password', () => {
    cy.get('input[name="email"]')
      .type('otokhtaeva15@jmail.com').should('have.value', 'otokhtaeva15@jmail.com')

    cy.get('input[name="password"]')
      .type('3620').should('have.value', '3620')
    cy.get('input[class="button"]').click()

  })
})