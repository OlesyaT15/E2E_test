/// <reference types="cypress" />

context('TC14', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('Empty value in the field for entering an email address', () => {
    
    cy.get('input[name="register[firstname]"]').type('Bot').should('have.value', 'Bot')

    cy.get('input[name="register[password]"]').type('362054').should('have.value', '362054')

    cy.get('input[name="register[telephone]"]').type('79964300680').should('have.value', '79964300680') 

    //cy.get('#get_kodsms').click()
     
    cy.get('input[name="register[kodsms]"]').type('79964').should('have.value', '79964') 
  
    cy.contains ("Нет").click()
    
    // cy.get('input[name="agreement"]').click()
    
    cy.contains ("Продолжить").click()
  })
})