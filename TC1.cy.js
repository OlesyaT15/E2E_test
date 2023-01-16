/// <reference types="cypress" />


context('TC1', () => {
    beforeEach(() => {
      cy.visit('https://zoo-zebra.ru')
    })
    it('Response Login/Register', () => {
      cy.get('[class="menu_name"]').click()
      
    })
  })