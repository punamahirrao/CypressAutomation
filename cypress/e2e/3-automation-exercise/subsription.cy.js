import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, SubscriptionHP } from "../../pages/registration";
describe('homePage subscription',()=>{
    it ('verify subscription on homePage',()=>{
        NavigateUrl();
        SubscriptionHP();

        /* Catch the element using another way
        
        cy.get('.container') // Replace with your parent element's selector
      .invoke('prop', 'innerHTML') // Get the innerHTML of the element
      .then((htmlContent) => {
        // Log or use the extracted HTML
        cy.log(htmlContent);
      })*/

    })
  })
