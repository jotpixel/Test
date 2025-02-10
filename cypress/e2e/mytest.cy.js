/// <reference types="Cypress" />

describe('Ali Express Order', () => {
  it('Adding to Cart', () => {
    cy.visit('https://www.aliexpress.com/') // visiting Ali Express site
    cy.get('[type="text"]').first().type('logitech mx master 3 {enter}') // Adding a search term
    // cy.get('[type="button"]') // Searching
    cy.get('.image--icon--HQGC-D_').eq(0).click({force:true})

    cy.contains('Add to cart').click()

    cy.get('.shop-cart--responsive--NnGUleD').click({force:true})
 
    cy.contains('Checkout').click()


  
  })
})