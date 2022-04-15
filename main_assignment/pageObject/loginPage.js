const LOCATOR = {
    loginButton1 : "#login2",
    usernameInput : "#loginusername",
    passwordInput : "#loginpassword",
    loginButton2 : "#logInModal > div > div > div.modal-footer > button.btn.btn-primary"
}

function loginFunction(username,password){
    cy.log(username,password)
    cy.loginCommand(LOCATOR.loginButton1,LOCATOR.usernameInput,LOCATOR.passwordInput,LOCATOR.loginButton2,username,password)
}

module.exports = {
    loginFunction
};