import RegisterUser, { ContactUsPage, DeleteUser, LoginUser, LogoutUser, NavigateUrl, AddToCart } from "../../pages/registration";
describe('add to cart functionality',()=>{
    it ('verify add to cart functionality',() => {
        NavigateUrl();
        AddToCart();
    })
})