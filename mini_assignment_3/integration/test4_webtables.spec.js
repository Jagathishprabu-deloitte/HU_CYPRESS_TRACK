/// <reference types="Cypress"/>

describe('Web Tables Validation',() => {
    before(() => {
        cy.fixture('test4').then(function(data) {
            this.data = data;
        })
        cy.visitPage()
    })
    it('Test 4 Web Tables',function() {
        cy.validatePage()
        cy.visitElementsPage()
        cy.get('#item-3').click()
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type(this.data.firstname)
        cy.get('#lastName').type(this.data.lastname)
        cy.get('#userEmail').type(this.data.email)
        cy.get('#age').type(this.data.age)
        cy.get('#salary').type(this.data.salary)
        cy.get('#department').type(this.data.department)
        cy.get('#submit').click()
        cy.get('div.rt-tbody').contains('> div',this.data.firstname).then( tableRow => {
            cy.get(tableRow).find('>div>div').eq(0).should('contain.text',this.data.firstname)
            cy.get(tableRow).find('>div>div').eq(1).should('contain.text',this.data.lastname)
            cy.get(tableRow).find('>div>div').eq(2).should('contain.text',this.data.age)
            cy.get(tableRow).find('>div>div').eq(3).should('contain.text',this.data.email)
            cy.get(tableRow).find('>div>div').eq(4).should('contain.text',this.data.salary)
            cy.get(tableRow).find('>div>div').eq(5).should('contain.text',this.data.department)
            cy.get(tableRow).find('>div>div').eq(6).find('>div>span').eq(1).click()
        })
        cy.get('div.rt-tbody').should('not.contain.text',this.data.firstname)
    })
})