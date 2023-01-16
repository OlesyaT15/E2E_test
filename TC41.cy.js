/// <reference types="cypress" />

context('TC41', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/login/')
  })
  it('Adding a bookmark', () => {

    cy.viewport(1054, 1268) 

    cy.get('input[name="email"]').type('otokhtaeva15@gmail.com').should('have.value', 'otokhtaeva15@gmail.com') 
    
    cy.get('input[name="password"]').type('362054').should('have.value', '362054') 
    
    cy.get('input[value="Войти"]').click()

    cy.get('li[class="cid-1"] .fm-parent').click()

    cy.get('div[class*="category-list"] [href="https://zoo-zebra.ru/tovary-dlya-koshek/igrushki-dlya-koshek/"]').click()
    
    cy.get('div[class="wishlist"] [onclick*="44174"]').click()
    
  })
})