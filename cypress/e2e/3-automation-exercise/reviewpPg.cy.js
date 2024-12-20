import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, AddToCart, RemoveUser } from "../../pages/registration";
describe('reviewPage',()=>{
    it ('verify Review functionality',()=>{
        NavigateUrl();
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.title').should('be.visible');
        cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('.active > a').should('be.visible');
        cy.get('#name').type('anna');
        cy.get('#email').type('anna.moray@example.com');
        cy.get('#review').type('this product is very good !');
        cy.get('#button-review').click();
        cy.get('.alert-success').contains('Thank you for your review.');
    })
})
