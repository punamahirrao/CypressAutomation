import RegisterUser, { DeleteUser, LoginUser, LogoutUser, NavigateUrl } from "../../pages/registration";
import { pgObj } from "../../support/ae-pageobject";
describe('login-testsuite',()=>{
    it('login_test',()=>{
        // Precondition : 
        // Navigate to home page
            NavigateUrl();  

        //Login with incorrect cerdential 
        cy.get(pgObj.loginbtn).click();
        cy.get(pgObj.loginemail).type('abd@vgh.vhj');
        cy.get(pgObj.loginpassword).type('gvhb16166');
        cy.get(pgObj.loginbutton).click();   
        cy.get('.login-form > form > p').should('be.visible');


    })
})