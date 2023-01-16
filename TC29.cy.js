/// <reference types="cypress" />

context('TC29', () => {
  beforeEach(() => {
    cy.visit('https://zoo-zebra.ru/simpleregister/')
  })
  it('hyperlink terms of agreement', () => {
    
    cy.contains (" Я прочитал и принимаю ").click()
  })
})