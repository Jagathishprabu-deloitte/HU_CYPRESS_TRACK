/// <reference types="Cypress"/>
import {signUpFunction} from '../pageObject/signUpPage'

describe('Sign Up Validation',()=>{
    let data;
    beforeEach(() =>{
        cy.visitPage(Cypress.env('url'))
        cy.fixture('signUpData').then((testdata) => {
            data = testdata
        })
    })

    it('Register with Existing Username',() =>{
        signUpFunction(data.username,data.password)
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('This user already exist.').end()
        })
    })

    it('Register with Empty Username',() =>{
        signUpFunction(data.emptyusername,data.password)
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Please fill out Username and Password.').end()
        })
    })

    it('Register with Empty Password',() =>{
        signUpFunction(data.username,data.emptypassword)
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Please fill out Username and Password.').end()
        })
    })

    it('Register with Empty Username and Password',() =>{
        signUpFunction(data.emptyusername,data.emptypassword)
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Please fill out Username and Password.').end()
        })
    })

    it('Register with Valid Username and Password',() =>{
        signUpFunction(Cypress.env('username'),Cypress.env('password'))
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Sign up successful.').end()
        })
    })
    
})