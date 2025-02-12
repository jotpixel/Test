/// <reference types="Cypress" />

describe('Browser download', () => {
  it('Search result', () => {
    cy.visit('https://duckduckgo.com/')
    cy.get('#searchbox_input').should('exist')
    cy.get('.homepage-cta-section_title__Lovig').should('exist')
    cy.get('.homepage-cta-section_title__Lovig').contains('Switch to DuckDuckGo. It’s private and free!')
    cy.get('.cta-cards_green__LcSUR > .cta-cards_button___d1sm').click()
  
  })

  it.only('Drop down selection', () => {
    cy.visit('https://www.airblue.com/')
    cy.get('[type="text"]').first().click().type('ISB')
 

  })
})