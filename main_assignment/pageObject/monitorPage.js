const LOCATOR = {
    monitorButton : "#itemc:nth-child(4)",
    productTable :"#tbodyid",
    productButton1 : " > div",
    addToCart : "#tbodyid > div.row > div > a",
    productButton2 : " > div > a",
    homeButton : "li.nav-item.active > a"
}

function monitorFunction(monitorName){
    cy.monitorCommand(LOCATOR.monitorButton,LOCATOR.productTable,LOCATOR.productButton1,LOCATOR.addToCart,LOCATOR.productButton2,LOCATOR.homeButton,monitorName)
}

module.exports = {
    monitorFunction
};