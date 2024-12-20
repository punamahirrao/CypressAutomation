import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, AddToCart, RemoveUser } from "../../pages/registration";
describe('Address details Page',()=>{
    it ('verify Address detail page',()=>{
        NavigateUrl();
        cy.get("#footer").scrollIntoView();
        cy.get('.single-widget > h2').should('be.visible');
        cy.wait(2000);
        cy.scrollTo("top");

       // cy.get('#scrollUp').click();
        cy.get('.active > :nth-child(1) > h2').should('be.visible');
    })
})