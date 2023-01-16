/// <reference types="cypress" />

context('TC35', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/login/')
  })
  it('How the My Info tab works', () => {

    cy.viewport(1054, 1268) 

    cy.get('input[name="email"]').type('otokhtaeva15@gmail.com').should('have.value', 'otokhtaeva15@gmail.com') 
    
    cy.get('input[name="password"]').type('362054').should('have.value', '362054') 
    
     cy.get('input[value="Войти"]').click()
    
  })
})