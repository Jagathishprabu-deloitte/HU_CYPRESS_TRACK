const LOCATOR = {
    signUpButton1 : "#signin2",
    usernameInput : "#sign-username",
    passwordInput : "#sign-password",
    signUpButton2 : "#signInModal > div > div > div.modal-footer > button.btn.btn-primary"
}

function signUpFunction(username,password){
    cy.log(username,password)
    cy.signUpCommand(LOCATOR.signUpButton1,LOCATOR.usernameInput,LOCATOR.passwordInput,LOCATOR.signUpButton2,username,password)
}

module.exports = {
    signUpFunction
};