Cypress.Commands.add('login',() => {

  cy.session( 'login', () => {
    cy.visit('https://app.pv-platform-qa.pointivo.com/fm/#/facilities/jobs')
    cy.origin('https://auth.pv-platform-qa.pointivo.com/', () => {
      cy.get('[name="username"]').type('cypress@pointivo-test.com')
      cy.get('[type="password"]').type('pvtest123!@#')
      cy.contains('Continue').click()
    })
  })  

})
