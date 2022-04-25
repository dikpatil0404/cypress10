
describe('verify the login functionality',function(){

    it('check the login with valid credentials',function(){

        // every testcase should have assertion
        cy.visit('https://www.zoomin.com/sign-in?%2F')
        cy.get('input[name="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('input[name="password"]').type('chinmay010')
        cy.contains('LOG IN').click()
        // -- LOGIN SUCCESSFUL VALIDATE THE DASHBOARD ELEMENT


    })

    it('check login with invalid credentials', function(){

        cy.visit('https://www.zoomin.com/sign-in?%2F')
        cy.get('input[name="email"]').type('chinmaydeshpande010@gmail.com')
        cy.get('input[name="password"]').type('chinmay0')
        cy.contains('LOG IN').click()
        
        // FOR NOT SUCCESSFUL CHECK VCALIDATION MSG 


    })




})


















// Maximum testcases 10
// test scenario 

// what to test ?

//Test scenario --- To test the login functionality 

// testcase

//How to test case
//1) Check with valid credentials 
//2) check with invalid credentials

