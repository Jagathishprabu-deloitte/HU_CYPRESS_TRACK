/// <reference types="Cypress"/>
import {loginFunction} from '../pageObject/loginPage'
import {laptopFunction} from '../pageObject/laptopPage'
import {cartValidateFunction,orderFuction} from '../pageObject/cartPage'
import {placeOrderFunction} from '../pageObject/placeOrderPage'
import {homePageFunction} from '../pageObject/navbarPage'

describe('Laptop Validation',()=>{
    let data;
    beforeEach(() =>{
        cy.visitPage(Cypress.env('url'))
        cy.fixture('test3Data').then((testdata) => {
            data = testdata
        })
        loginFunction(Cypress.env('username'),Cypress.env('password'))
    })

    it('Add Laptop',() =>{
        for(var i = 0; i < data.laptop.length;i++){
            laptopFunction(data.laptop[i])
            cy.on('window:alert',(str)=>{
                expect(str).to.equal('Product added.').end()
            })
            cy.wait(1000)
            homePageFunction()
            cy.wait(1000)
        }
        cartValidateFunction()
        orderFuction()
        placeOrderFunction(data.name,data.country,data.city,data.card,data.month,data.year)
    })

})