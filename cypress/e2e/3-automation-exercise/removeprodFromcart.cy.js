import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, AddToCart, RemoveUser } from "../../pages/registration";
describe('Login before checkout',()=>{
    it ('verify that user login before checkout ',()=>{
        NavigateUrl();
        cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.active').should('be.visible');
        cy.get('#product-5 > .cart_delete > .cart_quantity_delete').click();

    })
})
