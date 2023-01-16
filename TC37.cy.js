/// <reference types="cypress" />

context('TC37', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/login/')
  })
  it('Following a hyperlink from a list in My Bookmarks', () => {

    cy.viewport(1054, 1268) 

    cy.get('input[name="email"]').type('otokhtaeva15@gmail.com').should('have.value', 'otokhtaeva15@gmail.com') 
    
    cy.get('input[name="password"]').type('362054').should('have.value', '362054') 
    
    cy.get('input[value="Войти"]').click()
    
    cy.get('div[class*=box] .fa-star').click()

    cy.get('#wishlist-row11213 [class=name] [target="_blank"]').click()

  })
})