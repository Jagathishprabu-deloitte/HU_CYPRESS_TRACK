/// <reference types="Cypress"/>
import {loginFunction} from '../pageObject/loginPage'

describe('Login Validation',()=>{
    let data;
    beforeEach(() =>{
        cy.visitPage(Cypress.env('url'))
        cy.fixture('loginData').then((testdata) => {
            data = testdata
        })
    })

    it('Login with Incorrect Username and Password',() =>{
        loginFunction(data.incorrectuser,data.password)
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('User does not exist.').end()
        })
    })

    it('Login with Empty Password',() =>{
        loginFunction(data.username,data.emptypassword)
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Please fill out Username and Password.').end()
        })
    })

    it('Login with Empty username',() =>{
        loginFunction(data.emptyusername,data.password)
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Please fill out Username and Password.').end()
        })
    })

    it('Login with Case Sensitive Username',() =>{
        loginFunction(data.csusername,data.password)
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('User does not exist.').end()
        })
    })

    it('Login with Case Sensitive Password',() =>{
        loginFunction(data.username,data.cspassword)
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Wrong password.').end()
        })
    })

    it('Login with Valid Username and Password',() =>{
        loginFunction(Cypress.env('username'),Cypress.env('password'))
        cy.get(data.welcomename).should('contain.text',Cypress.env('username'))
    })

})