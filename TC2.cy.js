/// <reference types="cypress" />


context('TC2', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru')
  })

  it('Login tab in the Personal Account', () => {
    cy.get('[class="menu_name"]').click()
    cy.get('[class="li_menu_account alt"]').click()
    
  })
})