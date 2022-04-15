/// <reference types="Cypress"/>
import {loginFunction} from '../pageObject/loginPage'
import {laptopFunction} from '../pageObject/laptopPage'
import {cartValidateFunction} from '../pageObject/cartPage'
import {placeOrderFunction} from '../pageObject/placeOrderPage'

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
        }
        cartValidateFunction()
        placeOrderFunction(data.name,data.country,data.city,data.card,data.month,data.year)
    })

})