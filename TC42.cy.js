/// <reference types="cypress" />

context('TC42', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/login/')
  })
  it('Opening the Order History tab', () => {

    cy.viewport(1054, 1268) 

    cy.get('input[name="email"]').type('otokhtaeva15@gmail.com').should('have.value', 'otokhtaeva15@gmail.com') 
    
    cy.get('input[name="password"]').type('362054').should('have.value', '362054') 
    
     cy.get('input[value="Войти"]').click()
    
    cy.get('div[class*=box] [href="https://zoo-zebra.ru/order-history/"]').click()
   
  })
})