/// <reference types="Cypress"/>

describe('Text Box Validation',() => {
    before(() => {
        cy.fixture('test1').then(function(data) {
            this.data = data;
        })
        cy.visitPage()
    })
    it('Test 1 Text Box',function() {
        cy.validatePage()
        cy.visitElementsPage()
        cy.get('#item-0').click()
        cy.get('#userName').type(this.data.name)
        cy.get('#userEmail').type(this.data.email)
        cy.get('#currentAddress:nth-child(1)').type(this.data.currentaddress)
        cy.get('#permanentAddress').type(this.data.permanentaddress)
        cy.get('#submit').click()
        cy.get('#name').should('contains.text',this.data.name)
        cy.get('#email').should('contains.text',this.data.email)
        cy.get('div.border > p:nth-child(3)').should('contains.text',this.data.currentaddress)
        cy.get('div.border > p:nth-child(4)').should('contains.text',this.data.permanentaddress)
    })
})