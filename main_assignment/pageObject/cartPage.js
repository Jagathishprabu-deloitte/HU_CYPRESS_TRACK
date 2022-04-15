const LOCATOR = {
    cartButton : "#cartur",
    homeButton : "li.nav-item.active > a"
}

function cartValidateFunction(){
    cy.cartValidateCommand(LOCATOR.cartButton)
}

function deleteFunction(productname){
    cy.deleteCommand(productname,LOCATOR.homeButton)
}

module.exports = {
    cartValidateFunction,
    deleteFunction
};