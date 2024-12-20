import RegisterUser, { DeleteUser, LoginUser, LogoutUser, NavigateUrl } from "../../pages/registration";
describe('Logout testsuite',()=>{
    it('logout test',()=>{
        NavigateUrl();
        LoginUser();
        LogoutUser();
        
    })
})