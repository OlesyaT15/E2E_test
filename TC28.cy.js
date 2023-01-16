/// <reference types="cypress" />

context('TC28', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('Empty value in the field for the code from the SMS message', () => {
    
    cy.get('input[name="register[firstname]"]').type('Bot').should('have.value', 'Bot')

    cy.get('input[name="register[email]"]').type('otokhtaeva15@gail.com').should('have.value', 'otokhtaeva15@gail.com')

    cy.get('input[name="register[password]"]').type('362054').should('have.value', '362054')

    cy.get('input[name="register[telephone]"]').type('79964300680').should('have.value', '79964300680') 
    
    cy.get('#get_kodsms').click()
     
    cy.contains ("Нет").click()

     cy.get('input[name="agreement"]').click()

     cy.get('input[name="agreement"]').click()
    
    cy.contains ("Продолжить").click()

  })
})