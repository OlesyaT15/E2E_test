/// <reference types="cypress" />

context('TC30', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru')
  })
  it('Forgot password tab', () => {
  
    cy.get('[class="menu_name"]').click()
 
    cy.contains ("Войти в кабинет").click()

    cy.viewport(1054, 1268) 
    
    cy.get('div[class*=box] .fa-question').click()
    
    cy.get('input[name="email"]').type('otokhtaeva15@gmail.com').should('have.value', 'otokhtaeva15@gmail.com')

    cy.get('div[class="g-recaptcha"]').click(30, 30) 

     cy.get('input[type="submit"]').click()
   
    
  })
})