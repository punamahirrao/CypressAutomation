import RegisterUser, { DeleteUser, LoginUser, LogoutUser, NavigateUrl } from "../../pages/registration";


describe('login-testsuite',()=>{
    it('login_test',()=>{
        // Precondition : 
        // Navigate to home page
            NavigateUrl();
        // Register a user
            RegisterUser();

        // Logout user
            LogoutUser();

        // Test started :
        // Click on Login button
            LoginUser();
            DeleteUser();

        // Verify login & CLick on logout button

        
        
        
        
        
       


    })
})