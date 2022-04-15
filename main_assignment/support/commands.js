// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('visitPage', (url) => { 
    cy.visit(url)
})

Cypress.Commands.add('signUpCommand', (signUpButton1,usernameInput,passwordInput,signUpButton2,username,password) => { 
    cy.get(signUpButton1).click()
    if(username!=""){
        cy.get(usernameInput).type(username,{force:true})
    }
    if(password!=""){
        cy.get(passwordInput).type(password,{force:true})
    }
    cy.get(signUpButton2).click()
    cy.wait(1000)
})

Cypress.Commands.add('loginCommand', (loginButton1,usernameInput,passwordInput,loginButton2,username,password) => { 
    cy.get(loginButton1).click()
    if(username!=""){
        cy.get(usernameInput).type(username,{force:true})
    }
    if(password!=""){
        cy.get(passwordInput).type(password,{force:true})
    }
    cy.get(loginButton2).click()
    cy.wait(1000)
})

Cypress.Commands.add('laptopCommand', (laptopButton,productTable,productButton1,addToCart,productButton2,homeButton,laptopName) => { 
    cy.get(laptopButton).click()
    cy.wait(1000)
    cy.get(productTable).contains(productButton1,laptopName).then( tableRow => {
        cy.get(tableRow).find(productButton2).click({force : true})
        cy.wait(1000)
        cy.get(addToCart).click()
        cy.wait(1000)
    })
})

Cypress.Commands.add('placeOrderCommand', (placeOrderButton,nameInput,countryInput,cityInput,
    cardInput,monthInput,yearInput,purchaseButton,name,country,city,card,month,year) => { 
    cy.wait(1000)
    if(name!=""){
        cy.get(nameInput).type(name,{force:true})
    }
    if(country!=""){
        cy.get(countryInput).type(country,{force:true})
    }
    if(city!=""){
        cy.get(cityInput).type(city,{force:true})
    }
    if(card!=""){
        cy.get(cardInput).type(card,{force:true})
    }
    if(month!=""){
        cy.get(monthInput).type(month,{force:true})
    }
    if(year!=""){
        cy.get(yearInput).type(year,{force:true})
    }
    cy.wait(1000)
    cy.get(purchaseButton).click()
    cy.wait(1000)
    if(name==""|| country=="" || city=="" || card=="" || month=="" || year==""){
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Please fill out Name and Creditcard.').end()
        })
    }
    else{
        cy.get('div.sweet-alert.showSweetAlert.visible > h2')
        .should('have.text','Thank you for your purchase!')
    }
    cy.wait(1000)
})


Cypress.Commands.add('monitorCommand', (monitorButton,productTable,productButton1,addToCart,productButton2,homeButton,monitorName) => { 
    cy.get(monitorButton).click()
    cy.wait(1000)
    cy.get(productTable).contains(productButton1,monitorName).then( tableRow => {
        cy.get(tableRow).find(productButton2).click({force : true})
        cy.wait(1000)
        cy.get(addToCart).click()
        cy.wait(1000)
    })
})

Cypress.Commands.add('phoneCommand', (phoneButton,productTable,productButton1,addToCart,productButton2,homeButton,phoneName) => { 
    cy.get(phoneButton).click()
    cy.wait(1000)
    cy.get(productTable).contains(productButton1,phoneName).then( tableRow => {
        cy.get(tableRow).find(productButton2).click({force : true})
        cy.wait(1000)
        cy.get(addToCart).click()
        cy.wait(1000)
    })
})

Cypress.Commands.add('cartValidateCommand', (cartButton,addRow,total) => { 
    var amount = 0
    cy.get(cartButton).click()
    cy.wait(6000)
    cy.get(addRow).each(($ele)=>{
        cy.log($ele.text())
        amount += parseInt($ele.text())
        cy.log(amount)
    }).then(() =>{
        cy.get(total).invoke('text').then(parseInt).should('equal',amount)
    })
})


Cypress.Commands.add('deleteCommand', (productname,homeButton,table,row,data) => { 
    cy.wait(6000)
    cy.get(table).contains(row,productname).then(tableRow =>{
        cy.get(tableRow).find(data).click({force : true})
    })
    cy.wait(1000)
    cy.get(homeButton).click()
})

Cypress.Commands.add('homePageCommand', (homeButton) => { 
    cy.get(homeButton).click({force : true})
})

Cypress.Commands.add('orderCommand', (orderButton) => { 
    cy.get(orderButton).click({force : true})
})
