/// <reference types="cypress" />
//<input name="first_name" type="text" class="feedback-input" placeholder="First Name"></input>
describe('verify the tranverse method in cypress',function(){

    it('verify the the contact us form',function(){
        // cypress - css  selector
        // id - #idvalue
        // class - .classValue
        // tagName - h2
        // common formula - tagName[attribute='value']
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')

        //selecting the element by text
        //<h2 name="contactme" class="section_header">CONTACT US</h2>
        cy.contains('CONTACT US').should('be.visible')

        // Testing the contact us form
        cy.get('input[name="first_name"]').type('chinmay')
        cy.get('input[name="last_name"]').type('deshpande')
        cy.get('input[name="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('textarea[name="message"]').type('I am new to Javascript')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")

    })

    it('verify the Contact us form with manadatory field',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')
        cy.get('input[name="first_name"]').type('chinmay')
        cy.get('input[name="last_name"]').type('deshpande')
        cy.get('textarea[name="message"]').type('I am new to Javascript')
        cy.get('input[value="SUBMIT"]').click()
        cy.contains('Error: all').should('be.visible')

    })

    it.only('verify the reset button functionality',function(){

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('be.visible')

        cy.get('input[name="first_name"]').type('chinmay')
        cy.get('input[name="last_name"]').type('deshpande')
        cy.get('input[name="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('textarea[name="message"]').type('I am new to Javascript')
        cy.get('input[value="RESET"]').click()
        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')


    })

    




})