import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, AddToCart, RemoveUser } from "../../pages/registration";
describe('Category functionality',()=>{
    it ('verify category functionality',()=>{
        NavigateUrl();
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.brands-name > .nav > :nth-child(2) > a').click();
        cy.get('.title').should('be.visible');
        cy.get('.brands-name > .nav > :nth-child(8) > a').click();
        cy.get('.title').should('be.visible');

    })
})
