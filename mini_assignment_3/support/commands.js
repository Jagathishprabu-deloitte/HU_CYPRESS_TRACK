// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visitPage', () => { 
    cy.visit('https://demoqa.com/')
    cy.url().should('equal','https://demoqa.com/')
})

Cypress.Commands.add('validatePage', () => {
    cy.get('div.category-cards').should('contains.text','Elements')
    cy.get('div.category-cards').should('contains.text','Forms')
    cy.get('div.category-cards').should('contains.text','Alerts, Frame & Windows')
    cy.get('div.category-cards').should('contains.text','Widgets')
    cy.get('div.category-cards').should('contains.text','Interactions')
    cy.get('div.category-cards').should('contains.text','Book Store Application')
})
Cypress.Commands.add('visitElementsPage', () => { 
    cy.get('div.category-cards > div:nth-child(1)').click()
    cy.url().should('equal','https://demoqa.com/elements')
})
