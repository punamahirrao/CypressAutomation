import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl } from "../../pages/registration";
describe('testcase page',()=>{
    it ('Verify testcase page',()=>{
        NavigateUrl();
        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').click();
        cy.get('b').should('be.visible');
    })
})