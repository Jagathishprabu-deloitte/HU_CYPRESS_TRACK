/// <reference types="Cypress"/>
import {loginFunction} from '../pageObject/loginPage'
import {laptopFunction} from '../pageObject/laptopPage'
import {monitorFunction} from '../pageObject/monitorPage'
import {phoneFunction} from '../pageObject/phonePage'
import {cartValidateFunction,deleteFunction} from '../pageObject/cartPage'
import {placeOrderFunction} from '../pageObject/placeOrderPage'

describe('Laptop and Monitor Validation',()=>{
    let data;
    beforeEach(() =>{
        cy.visitPage(Cypress.env('url'))
        cy.fixture('test5Data').then((testdata) => {
            data = testdata
        })
        loginFunction(Cypress.env('username'),Cypress.env('password'))
    })

    it('Add Laptop',() =>{
        for(var i = 0; i < data.laptop.length;i++){
            laptopFunction(data.laptop[i])
        }
        for(var j = 0; j < data.monitor.length;j++){
            monitorFunction(data.monitor[j])
        }
        for(var k = 0; k < data.phone.length;k++){
            phoneFunction(data.phone[k])
        }
        cartValidateFunction()
        deleteFunction(data.laptop[1])
        cartValidateFunction()
        placeOrderFunction(data.emptyname,data.emptycountry,data.emptycity,data.emptycard,data.emptymonth,data.emptyyear)
        placeOrderFunction(data.name,data.country,data.city,data.card,data.month,data.year)
    })

})