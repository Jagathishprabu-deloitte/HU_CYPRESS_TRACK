const LOCATOR = {
    laptopButton : "#itemc:nth-child(3)",
    productTable :"#tbodyid",
    productButton1 : " > div",
    addToCart : "#tbodyid > div.row > div > a",
    productButton2 : " > div > a",
    homeButton : "li.nav-item.active > a"
}

function laptopFunction(laptopName){
    cy.laptopCommand(LOCATOR.laptopButton,LOCATOR.productTable,LOCATOR.productButton1,LOCATOR.addToCart,LOCATOR.productButton2,LOCATOR.homeButton,laptopName)
}

module.exports = {
    laptopFunction
};