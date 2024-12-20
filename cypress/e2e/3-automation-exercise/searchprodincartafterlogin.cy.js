import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, AddToCart, RemoveUser } from "../../pages/registration";
describe('Category functionality',()=>{
    it ('verify category functionality',()=>{
        NavigateUrl();
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('#search_product').type('Blue Top');
        cy.get('#submit_search').click();
        cy.get('.title').should('be.visible');
        cy.get('.features_items').contains('Blue Top');
        cy.get('.productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.cart_description').contains('Blue Top');
        LoginUser();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.cart_description').contains('Blue Top');

    })
})
