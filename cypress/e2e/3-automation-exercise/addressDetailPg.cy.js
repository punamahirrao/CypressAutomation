import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, AddToCart, RemoveUser } from "../../pages/registration";
describe('Address details Page',()=>{
    it ('verify Address detail page',()=>{
        NavigateUrl();
        RemoveUser();
        RegisterUser();
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.cart_description').should('be.visible');
        cy.get('.col-sm-6 > .btn').click();
        cy.get('#address_delivery > .address_firstname').contains('Anna Moray');
        cy.get('#address_delivery > :nth-child(4)').contains('polhemsgata 8, södertalje, sweden');
        cy.get('#address_delivery > .address_city').contains('södertalje stockholm 521478');
        cy.get('#address_delivery > .address_country_name').contains('India');
        cy.get('#address_delivery > .address_phone').contains('9856321472');
        cy.get('#address_invoice > .address_firstname').contains('Anna Moray');
        cy.get('#address_invoice > :nth-child(4)').contains('polhemsgata 8, södertalje, sweden');
        cy.get('#address_invoice > .address_city').contains('södertalje stockholm 521478');
        cy.get('#address_invoice > .address_country_name').contains('India');
        cy.get('#address_invoice > .address_phone').contains('9856321472');

    })
})
