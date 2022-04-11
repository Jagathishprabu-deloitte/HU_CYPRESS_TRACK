/// <reference types="Cypress" />
describe('Flipkart Explicit Assertion', ()=>{
 
    it('URL Validation',()=>{
        cy.visit('http://www.flipkart.com')
        cy.url().then($url =>(
            expect('https://www.flipkart.com/').to.be.equal($url)
        ))
    })
 
    it('Product Name Validation with Chai',()=>{
        cy.visit('http://www.flipkart.com')
        cy.get('div[class*="eFQ30H"]:nth-of-type(1)').invoke('text').then($text=>{
            expect('Top Offers').to.be.equal($text)
       
        })
        cy.get('div[class*="eFQ30H"]:nth-of-type(2)').invoke('text').then($text=>{
            expect('Grocery').to.be.equal($text)
       
        })
        cy.get('div[class*="eFQ30H"]:nth-of-type(3)').invoke('text').then($text=>{
            expect('Mobiles').to.be.equal($text)
       
        })
        cy.get('div[class*="eFQ30H"]:nth-of-type(4)').invoke('text').then($text=>{
            expect('Fashion').to.be.equal($text)
       
        })
        cy.get('div[class*="eFQ30H"]:nth-of-type(5)').invoke('text').then($text=>{
            expect('Electronics').to.be.equal($text)
       
        })
        cy.get('div[class*="eFQ30H"]:nth-of-type(6)').invoke('text').then($text=>{
            expect('Home').to.be.equal($text)
       
        })
        cy.get('div[class*="eFQ30H"]:nth-of-type(7)').invoke('text').then($text=>{
            expect('Appliances').to.be.equal($text)
       
        })
        cy.get('div[class*="eFQ30H"]:nth-of-type(8)').invoke('text').then($text=>{
            expect('Travel').to.be.equal($text)
       
        })
        cy.get('div[class*="eFQ30H"]:nth-of-type(9)').invoke('text').then($text=>{
            expect('Beauty, Toys & More').to.be.equal($text)
       
        })
    })
 
    it('Login Assertion',()=>{
        cy.visit('http://www.flipkart.com')
        cy.get('._1_3w1N').click()
        cy.get('._1D1L_j > ._2KpZ6l').click()
        cy.get('._2YULOR > span').invoke('text').then($text=>{
            expect('Please enter valid Email ID/Mobile number').to.be.equal($text)
        })
    })
})