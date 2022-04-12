/// <reference types="Cypress"/>
describe('Dropdown Validation',()=>{
    let inputdata;
    before(()=>{
        cy.fixture('inputdata').then(function (testdata) {
            inputdata = testdata;
        })
        cy.visit("http://demo.automationtesting.in/Register.html")
    })
    
    it('Language Dropdown Validation',()=>{
        var i = 0
        cy.get('#msdd').click()
        cy.get('multi-select > div:nth-child(2) > ul > li').each(($ele1,index)=>{
            const langText = $ele1.text().trim()
            if(langText.includes(inputdata.Language1) || langText.includes(inputdata.Language2)){
                cy.get('multi-select > div:nth-child(2) > ul > li').eq(index).click()
                cy.get('#msdd > div').eq(i).should('have.text',langText)
                i = i + 1
            }
        })
        cy.get('body').click(0,0);
    })

    it('Skills Dropdown Validation',()=>{
        cy.get('#Skills').select(inputdata.Skill).should('have.value',inputdata.Skill)
    })

    it('Country Dropdown Validation',()=>{
        cy.get('.select2-selection').click()
        cy.get('.select2-search__field').type(inputdata.Type)
        cy.get('#select2-country-results').each(($ele2,index)=>{
            const nameText = $ele2.text().trim()
            if(nameText.includes(inputdata.Country)){
                cy.get('#select2-country-results').eq(index).click()
                cy.get('#select2-country-container').should('have.text',inputdata.Country)
            }
        })
    })
})