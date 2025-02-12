/// <reference types="Cypress" />

describe('Create a New Job on facility list', () => {
  beforeEach(() => { 
    cy.login()
  })


  it('New Job Creation', () => {

    cy.visit('https://app.pv-platform-qa.pointivo.com/fm/#/facilities/jobs')

    cy.get('.ptv-button.ptv-fm-button.ptv-button-primary.ng-star-inserted', { timeout: 50000 })
      .click({ force: true }) //Clicking on the New Job Button

    cy.get('#mat-input-2')
      .type('New Test Job') //Entering Job Name

    cy.get('.mat-select-search-inside-mat-option.ng-valid.ng-dirty.ng-touched')
      .click()//Selecting the Customer Dropdown

    cy.get('[placeholder="Search..."]')
      .type('test{enter}') //Selecting the Test Customer

    cy.get('.mat-select-placeholder.mat-select-min-line.ng-tns-c1701-22.ng-star-inserted')
      .click() //Selecting the Facility Dropdown

    cy.get('#mat-select-value-5.mat-select-value.ng-tns-c1701-35')
      .click()//Selecting the Test Facility
    
  cy.get('.mat-focus-indicator.ptv-fm-button-medium.mat-raised-button mat-button-base mat-primary')
    .click() //Created a new job
  
  })

  it('New Facility Creation', () => {

    cy.visit('https://app.pv-platform-qa.pointivo.com/fm/#/facilities/buildings')
   
    cy.contains('New Facility', { timeout: 50000 })
      .click({ force: true }) //Clicking on the New Facility Button

    cy.get('[data-placeholder="Name"]')
      .type({ force: true },'New Test Facility') //Entering Facility Name

    cy.get('[data-placeholder="Physical Address"]')
      .type('Sample Address')//Entering the Facility Address

    cy.get('.mat-select-placeholder.mat-select-min-line.ng-tns-c160-45.ng-star-inserted')
      .click()//Selecting the Customer Dropdown

    cy.get('[placeholder="Search..."]')
      .type('test{enter}') //Selecting the Test Customer
    
  cy.get('.mat-button-wrapper')
    .last()
    .click() //Created a new job
  
  })
})