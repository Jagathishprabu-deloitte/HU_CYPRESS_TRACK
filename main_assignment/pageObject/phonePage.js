const LOCATOR = {
    phoneButton : "#itemc:nth-child(2)",
    productTable :"#tbodyid",
    productButton1 : " > div",
    addToCart : "#tbodyid > div.row > div > a",
    productButton2 : " > div > a",
    homeButton : "li.nav-item.active > a"
}

function phoneFunction(phoneName){
    cy.phoneCommand(LOCATOR.phoneButton,LOCATOR.productTable,LOCATOR.productButton1,LOCATOR.addToCart,LOCATOR.productButton2,LOCATOR.homeButton,phoneName)
}

module.exports = {
    phoneFunction
};