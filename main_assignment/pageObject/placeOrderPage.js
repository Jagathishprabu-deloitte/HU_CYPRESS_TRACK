const LOCATOR = {
    placeOrderButton : "div.col-lg-1 > button",
    nameInput :"#name",
    countryInput : "#country",
    cityInput : "#city",
    cardInput : "#card",
    monthInput : "#month",
    yearInput : "#year",
    purchaseButton : "#orderModal > div > div > div.modal-footer > button.btn.btn-primary"
}

function placeOrderFunction(name,country,city,card,month,year){
    cy.placeOrderCommand(LOCATOR.placeOrderButton,LOCATOR.nameInput,LOCATOR.countryInput,LOCATOR.cityInput,
        LOCATOR.cardInput,LOCATOR.monthInput,LOCATOR.yearInput,LOCATOR.purchaseButton,name,country,city,card,month,year)
}

module.exports = {
    placeOrderFunction
};