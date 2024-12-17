import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, ProductsPage } from "../../pages/registration";
describe('view all products page',()=>{
    it ('verify Products page',()=>{
        NavigateUrl();
        ProductsPage();
    })
})