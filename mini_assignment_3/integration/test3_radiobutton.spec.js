/// <reference types="Cypress"/>

describe('Radio Button Validation',() => {
    before(() => {
        cy.visitPage()
    })
    it('Test 3 Radio Button',() =>{
        cy.validatePage()
        cy.visitElementsPage()
        cy.get('#item-2').click()
        // cy.get('input[name="like"]').check('Impressive')
        // cy.get('input[name="like"]').should('have.value','Impressive').should('be.checked')
        cy.get('#impressiveRadio').check({force : true})
        cy.get('#impressiveRadio').should('be.checked')
    })
})