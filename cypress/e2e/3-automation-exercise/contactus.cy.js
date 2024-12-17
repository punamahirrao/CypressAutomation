import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl } from "../../pages/registration";
describe('contact us form',()=>{
    it ('check flow of contact us form',()=>{
        NavigateUrl();
        ContactUsPage();
        cy.url().should('include', 'automationexercise.com/');

    })
})