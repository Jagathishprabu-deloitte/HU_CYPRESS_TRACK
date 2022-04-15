const LOCATOR = {
    homeButton : "li.nav-item.active > a",
    cartButton : "#cartur"
}

function homePageFunction(){
    cy.homePageCommand(LOCATOR.homeButton)
}

module.exports = {
    homePageFunction
};