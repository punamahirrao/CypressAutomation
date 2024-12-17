import RegisterUser, { DeleteUser, FelSignupUser, LoginUser, LogoutUser, NavigateUrl } from "../../pages/registration";
describe('register with existing email',()=>{
    it ('signup with existing email but new username',()=>{
        NavigateUrl();
        FelSignupUser();
    })
})