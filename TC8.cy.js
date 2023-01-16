/// <reference types="cypress" />

context('TC8', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru')
  })
  it('can Register', () => {
    cy.get('[class="menu_name"]').click()
    cy.get('[class="registr"]').click()
  })
})