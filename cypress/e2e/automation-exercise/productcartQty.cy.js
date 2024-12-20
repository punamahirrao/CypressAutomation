import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, AddToCart } from "../../pages/registration";
describe('add to cart functionality',()=>{
    it ('verify add to cart functionality',()=>{
        NavigateUrl();
        cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('#quantity').trigger('mouseover');
        cy.wait(2000);
    })
})