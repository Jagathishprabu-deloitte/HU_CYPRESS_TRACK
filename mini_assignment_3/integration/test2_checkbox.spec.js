/// <reference types="Cypress"/>

describe('Check Box Validation',() => {
    before(() => {
        cy.visitPage()
    })
    it('Test 2 Check Box',() =>{
        cy.validatePage()
        cy.visitElementsPage()
        cy.get('#item-1').click()
        cy.get('span > button > svg').click()
        // cy.get('li:nth-child(2) > span > label > span.rct-checkbox > svg').click()
        // cy.get('#tree-node-documents').should('not.be.visible').check({force : true})
        cy.get('#tree-node-documents').check({force : true})
        cy.get('#tree-node-documents').should('be.checked')
    })
})