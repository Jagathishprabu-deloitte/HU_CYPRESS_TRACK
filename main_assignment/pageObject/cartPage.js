const LOCATOR = {
    cartButton : "#cartur",
    homeButton : "li.nav-item.active > a",
    orderButton : "#page-wrapper > div > div.col-lg-1 > button",
    addRow : "td:nth-child(3)",
    total : "#totalp",
    table : "#tbodyid",
    row : "> tr",
    data : " > td >a"
}

function cartValidateFunction(){
    cy.cartValidateCommand(LOCATOR.cartButton,LOCATOR.addRow,LOCATOR.total)
}

function deleteFunction(productname){
    cy.deleteCommand(productname,LOCATOR.homeButton,LOCATOR.table,LOCATOR.row,LOCATOR.data)
}

function orderFuction(){
    cy.orderCommand(LOCATOR.orderButton)
}

module.exports = {
    cartValidateFunction,
    deleteFunction,
    orderFuction
};