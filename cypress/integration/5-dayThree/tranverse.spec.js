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

    // first()  last()  eq() children() filter() find()
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


    //// first()  last()  eq() children() filter() find()
    // siblings method

    // next()

    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').next().should('have.text','Milk')
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').prev().should('have.text','Coffee')
    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').nextAll().should('have.length',3)
        cy.get('#tea').nextAll().eq(2).should('have.id','sugar')
    })


    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevAll().should('have.length',4)
        cy.get('#sugar').prevAll().eq(2).should('have.id','tea')

    })


    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevAll().should('have.length',4)
        cy.get('#sugar').prevAll().eq(2).should('have.id','tea')

    })
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevUntil('#tea').should('have.length',2)
        cy.get('#sugar').prevUntil('#tea').eq(1).should('have.id','milk')

    })


    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').nextUntil('#sugar').should('have.length',2)
        cy.get('#tea').nextUntil('#sugar').eq(1).should('have.id','espresso')

    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').siblings().should('have.length',4)
    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.contains("button[type='button']",'Button-1').nextUntil('body > div > div:nth-child(7) > div > div.traversal-button-other-states > div > button:nth-child(4)').should('have.length',2)

    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    })

    it('To get the closest ancestor DOM element, use the .closest() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Home').closest('nav').should('have.attr','aria-label','breadcrumb')

    })

    it('To get parent DOM element of elements, use the .parent() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parent().should('have.class','traversal-drinks-list')

    })

    it('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parents().should('have.class','thumbnail').should('be.visible')

    })

    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parentsUntil('[class="col-sm-12"]').should('have.length',2)

    })













})