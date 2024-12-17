import RegisterUser, { DeleteUser, LogoutUser, NavigateUrl } from "../../pages/registration";
describe('Test Case 1: Register User',()=>{
    it('Launch browser and verify the home page',()=>{
        NavigateUrl();
        RegisterUser();
        LogoutUser();
        DeleteUser();
    })
    
    })
