import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, AddToCart, RemoveUser } from "../../pages/registration";
describe('Login before checkout',()=>{
    it ('verify that user login before checkout ',()=>{
        NavigateUrl();
        LoginUser();
        cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.active').should('be.visible');
        cy.get('.col-sm-6 > .btn').click();
        cy.get('#address_delivery').should('be.visible');
        cy.get(':nth-child(4) > .heading').should('be.visible');
        cy.get('.form-control').type('deliver it on time');
        cy.get(':nth-child(7) > .btn').click();
        cy.get('[data-qa="name-on-card"]').type('Anna');
        cy.get('[data-qa="card-number"]').type('0246875324');
        cy.get('[data-qa="cvc"]').type('1234');
        cy.get('[data-qa="expiry-month"]').type('April');
        cy.get('[data-qa="expiry-year"]').type('2030');
        cy.get('[data-qa="pay-button"]').click();
        cy.get('.col-sm-9 > p').should('be.visible');
    })
})