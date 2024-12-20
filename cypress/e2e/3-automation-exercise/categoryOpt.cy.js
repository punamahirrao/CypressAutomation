import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, AddToCart, RemoveUser } from "../../pages/registration";
describe('Category functionality',()=>{
    it ('verify category functionality',()=>{
        NavigateUrl();
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click();
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click();
        cy.get('.title').should('be.visible');
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click();
        cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click();
        cy.get('.title').should('be.visible');
    })
})
