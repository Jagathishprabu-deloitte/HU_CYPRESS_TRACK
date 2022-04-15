/// <reference types="Cypress"/>
import {loginFunction} from '../pageObject/loginPage'
import {laptopFunction} from '../pageObject/laptopPage'
import {monitorFunction} from '../pageObject/monitorPage'
import {phoneFunction} from '../pageObject/phonePage'
import {cartValidateFunction,deleteFunction,orderFuction} from '../pageObject/cartPage'
import {placeOrderFunction} from '../pageObject/placeOrderPage'
import {homePageFunction} from '../pageObject/navbarPage'

describe('Laptop and Monitor Validation',()=>{
    let data;
    beforeEach(() =>{
        cy.visitPage(Cypress.env('url'))
        cy.fixture('test5Data').then((testdata) => {
            data = testdata
        })
        loginFunction(Cypress.env('username'),Cypress.env('password'))
    })

    it('Add Laptop,Monitor and Phone',() =>{
        for(var i = 0; i < data.laptop.length;i++){
            laptopFunction(data.laptop[i])
            cy.on('window:alert',(str)=>{
                expect(str).to.equal('Product added.').end()
            })
            cy.wait(1000)
            homePageFunction()
            cy.wait(1000)
        }
        for(var j = 0; j < data.monitor.length;j++){
            monitorFunction(data.monitor[j])
            cy.on('window:alert',(str)=>{
                expect(str).to.equal('Product added.').end()
            })
            cy.wait(1000)
            homePageFunction()
            cy.wait(1000)
        }
        for(var k = 0; k < data.phone.length;k++){
            phoneFunction(data.phone[k])
            cy.on('window:alert',(str)=>{
                expect(str).to.equal('Product added.').end()
            })
            cy.wait(1000)
            homePageFunction()
            cy.wait(1000)
        }
    })

    it('Delete Product',() =>{
        cartValidateFunction()
        deleteFunction(data.laptop[1])
        cartValidateFunction()
        orderFuction()
        placeOrderFunction(data.emptyname,data.emptycountry,data.emptycity,data.emptycard,data.emptymonth,data.emptyyear)
        placeOrderFunction(data.name,data.country,data.city,data.card,data.month,data.year)
    })
    
})