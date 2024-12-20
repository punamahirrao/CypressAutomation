import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, AddToCart, RemoveUser } from "../../pages/registration";
describe('Recomended product functionality',()=>{
    it ('verify recomended product functionality',()=>{
        NavigateUrl();
        cy.get('.recommended_items > .title').should('be.visible');
        cy.get('.active > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('#cart_items > :nth-child(1)').contains('Summer White Top');
    })
})