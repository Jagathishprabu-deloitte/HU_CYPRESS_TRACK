/// <reference types="Cypress"/>

describe('Text Box Validation',() => {
    before(() => {
        cy.fixture('test5').then(function(data) {
            this.data = data;
        })
        cy.visitPage()
    })
    it('Test 5 Links',function() {
        cy.validatePage()
        cy.visitElementsPage()
        cy.get('#item-5').click()
        cy.get('#linkWrapper > p').children('a').should('have.length',this.data.length)
        cy.get('#linkWrapper > p').children('a').eq(0).should('contain.text',this.data.link1)
        cy.get('#linkWrapper > p').children('a').eq(1).should('contain.text',this.data.link2)
        cy.get('#linkWrapper > p').children('a').eq(2).should('contain.text',this.data.link3)
        cy.get('#linkWrapper > p').children('a').eq(3).should('contain.text',this.data.link4)
        cy.get('#linkWrapper > p').children('a').eq(4).should('contain.text',this.data.link5)
        cy.get('#linkWrapper > p').children('a').eq(5).should('contain.text',this.data.link6)
        cy.get('#linkWrapper > p').children('a').eq(6).should('contain.text',this.data.link7)
        cy.get('#linkWrapper > p').children('a').eq(7).should('contain.text',this.data.link8)
        cy.get('#linkWrapper > p').children('a').eq(8).should('contain.text',this.data.link9)
    })
})