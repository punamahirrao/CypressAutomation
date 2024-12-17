import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, SearchProduct } from "../../pages/registration";
describe('searchProduct',()=>{
    it ('verify search functionality',()=>{
        NavigateUrl();
        SearchProduct();

    })
})