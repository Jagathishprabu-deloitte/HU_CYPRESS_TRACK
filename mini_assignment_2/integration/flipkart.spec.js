/// <reference types="Cypress"/>
describe('Flipkart Implicit Assertion', ()=>{
    
    it('URL Validation',()=>{
    cy.visit('http://www.flipkart.com')
    cy.url().should('equal','https://www.flipkart.com/')
    })
    
    it('Product Name Validation',()=>{
    cy.visit('http://www.flipkart.com')
    cy.get('div[class*="eFQ30H"]:nth-of-type(1)').should('contain.text','Top Offers')
    cy.get('div[class*="eFQ30H"]:nth-of-type(2)').should('contain.text','Grocery')
    cy.get('div[class*="eFQ30H"]:nth-of-type(3)').should('contain.text','Mobiles')
    cy.get('div[class*="eFQ30H"]:nth-of-type(4)').should('contain.text','Fashion')
    cy.get('div[class*="eFQ30H"]:nth-of-type(5)').should('contain.text','Electronics')
    cy.get('div[class*="eFQ30H"]:nth-of-type(6)').should('contain.text','Home')
    cy.get('div[class*="eFQ30H"]:nth-of-type(7)').should('contain.text','Appliances')
    cy.get('div[class*="eFQ30H"]:nth-of-type(8)').should('contain.text','Travel')
    cy.get('div[class*="eFQ30H"]:nth-of-type(9)').should('contain.text','Beauty, Toys & More')  
    })
    
    it('Login Assertion',()=>{
    cy.visit('http://www.flipkart.com')
    cy.get('._1_3w1N').contains('Login').click()
    cy.get('._1D1L_j > ._2KpZ6l').contains('Login').click()
    cy.get('._2YULOR > span').should('contain.text','Please enter valid Email ID/Mobile number')
    })

})
