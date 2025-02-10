Cypress.Commands.add('login',() => {
    cy.session('login', () => {

        cy.visit('https://app.pv-platform-qa.pointivo.com/fm/');
        
           
        cy.origin('https://auth.pv-platform-qa.pointivo.com/', () => {
            
            cy.get('[name="username"]').type('hammad.aslam@pointivo.com')
            cy.get('[type="password"]').type('pvpasswords123!@#')
            cy.contains('Continue').click()
        

      })  

    })

    })
