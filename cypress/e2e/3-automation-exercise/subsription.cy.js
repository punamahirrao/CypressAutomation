import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl } from "../../pages/registration";
describe('homePage subscription',()=>{
    it ('verify subscription on homePage',()=>{
        NavigateUrl();
        cy.get('#susbscribe_email').type('punam@abc.com');
        cy.get('#subscribe').click();
        //cy.get('.alert-success').should('be.visible');

        // Catch the element using another way
        
        cy.get('.container') // Replace with your parent element's selector
      .invoke('prop', 'innerHTML') // Get the innerHTML of the element
      .then((htmlContent) => {
        // Log or use the extracted HTML
        cy.log(htmlContent);
      })

    })
})