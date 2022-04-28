/// <reference types="cypress" />
describe('tranverse method in cypress',function(){

    it('To get the first DOM element within elements, use the .first() command',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().should('have.length',4)
        cy.get('.traversal-button-states').children().first().should('have.text',"Danger")
    })

    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().last().should('have.text',"Alert")
    })

    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.pagination.traversal-pagination').children().should('have.length',7)

    })
    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().eq(0).should('have.text','Danger')
        cy.get('.traversal-button-states').children().eq(2).should('have.text','Info')
    })

    // first()  last()  eq() children() filter()

    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text',"Warning")
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.length',1)
    })

    it('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.pagination.traversal-pagination').children('li').find('a').should('have.length',7)
        cy.get('.list-group ').children().first().find('span').should('have.text',5)
    })





})