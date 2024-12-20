import { pgObj } from "../support/ae-pageobject";
const RegisterUser = () => {

    cy.get(pgObj.signup).contains(' Signup / Login').click();
    cy.get(pgObj.name).type('Anna');
    cy.get(pgObj.email).type('anna.moray@example.com');
    cy.get(pgObj.button).click();
    cy.get(pgObj.gender).click();
    cy.get(pgObj.password).type('anam1234');
    cy.get(pgObj.day).select('10');
    cy.get(pgObj.month).select('December');
    cy.get(pgObj.checkbox).check();
    cy.get(pgObj.fname).type('Anna');
    cy.get(pgObj.lname).type('Moray');
    cy.get(pgObj.compName).type('scania');
    cy.get(pgObj.adress).type('polhemsgata 8, södertalje, sweden');
    cy.get(pgObj.country).select('India');
    cy.get(pgObj.state).type('stockholm');
    cy.get(pgObj.city).type('södertalje');
    cy.get(pgObj.zipcode).type('521478');
    cy.get(pgObj.mobnumber).type('9856321472');
    cy.get(pgObj.crAccBtm).click();
    cy.get(pgObj.heading1).should('be.visible');
    cy.get(pgObj.contbtn).click();
    cy.get(pgObj.pgassertion).should('be.visible');

    
}
export default RegisterUser;

export const LogoutUser = ()=>{
    cy.get(pgObj.logout).click();
    cy.get(pgObj.logoutassert).should('be.visible');
}

export const DeleteUser = ()=>{
    cy.get(pgObj.deletbtn).click();
    cy.get(pgObj.delpgasser).should('be.visible');
    cy.get(pgObj.btn).click();
}

export const NavigateUrl = () =>{
    cy.visit('https://automationexercise.com/');
        cy.get(pgObj.imagelogo).should('be.visible');

} 
export const LoginUser = ()=>{
        cy.get(pgObj.loginbtn).click();
        cy.get(pgObj.loginemail).type('anna.moray@example.com');
        cy.get(pgObj.loginpassword).type('anam1234');
        cy.get(pgObj.loginbutton).click();
        cy.get(pgObj.loginassertion).should('be.visible');
}

export const RemoveUser = () => {
    NavigateUrl();
    cy.get(pgObj.loginbtn).click();
    cy.get(pgObj.loginemail).type('anna.moray@example.com');
    cy.get(pgObj.loginpassword).type('anam1234');
    cy.get(pgObj.loginbutton).click();

    cy.get(pgObj.loginassertion,{timeout:2000}) 
    .then(($el)=> {
            if($el.length > 0)
                {
                    console.log("element found");
                    DeleteUser();
                }
            else {
                console.log("element not found");
            }
    })
}

export const FelSignupUser = ()=>{
    cy.get(pgObj.signup).contains(' Signup / Login').click();
        cy.get(pgObj.name).type('jenny');
        cy.get(pgObj.email).type('anna.moray@example.com');
        cy.get(pgObj.button).click();
        cy.get(pgObj.signupassertion).should('be.visible');
}

export const ContactUsPage = ()=>{
    cy.get(pgObj.contactusBtn).click();
        cy.get(pgObj.conpgVerify).should('be.visible');
        cy.get(pgObj.conpgName).type('jenny');
        cy.get(pgObj.conpgemail).type('jen@xyz.com');
        cy.get(pgObj.conSubj).type('product feedback');
        cy.get(pgObj.conMsg).type('product is good!');
        cy.get(pgObj.conSubBtn).click();
        cy.get(pgObj.conStatuMsg).should('be.visible');
        cy.get(pgObj.homeBtn).click();
}

export const ProductsPage = ()=>{
    cy.get(pgObj.productsBtn).click();
    cy.get(pgObj.prodPgAssert).should('be.visible');
    cy.get(pgObj.viewProdBtn).click();
    cy.url().should('include','automationexercise.com/product_details/1');
    cy.get(pgObj.prodName).should('be.visible');
    cy.get(pgObj.prodCatagry).should('be.visible');
    cy.get(pgObj.prodPrice).should('be.visible');
    cy.get(pgObj.prodAvail).should('be.visible');
    cy.get(pgObj.prodCondi).should('be.visible');
    cy.get(pgObj.prodBrand).should('be.visible');
}

export const SearchProduct = ()=>{
    cy.get(pgObj.productsBtn).click();
        cy.get(pgObj.seachBar).type('Men Tshirt');
        cy.get(pgObj.searchBtn).click();
        cy.get(pgObj.searchAssert).should('be.visible');
        cy.get(pgObj.searchProdtAssert).should('be.visible');
}

export const SubscriptionHP = ()=>{
    cy.get(pgObj.subscripHpemail).type('punam@abc.com');
        cy.get(pgObj.subcriphpArrowbtn).click();
        cy.get(pgObj.subcriphpalertmsg).should('be.visible');
}

export const SubcripCartPage = ()=>{
    cy.get(pgObj.cartBtn).click();
    cy.get(pgObj.cartpgsubcriHeading).should('be.visible');
    cy.get(pgObj.subCartPgemail).type('punam@abc.com');
    cy.get(pgObj.subcartArrowBtn).click();
    cy.get(pgObj.subCartAlertMsg).should('be.visible');  

}

export const AddToCart = ()=>{
    cy.get(pgObj.productsBtn).click();
    cy.get(pgObj.addtocartBtnp1).click();
    cy.get(pgObj.adtctBtn).click();
    cy.get(pgObj.addtocartBtnp2).click();
    cy.get(pgObj.atcViewProd).click();
    cy.get(pgObj.prod1name).should('contain', 'Blue Top');
    cy.get(pgObj.prod2name).should('contain', 'Men Tshirt');
    cy.get(pgObj.prod1price).should('contain','Rs. 500');
    cy.get(pgObj.prod2price).should('contain','Rs. 400');
    cy.get(pgObj.prod1quant).should('contain','1');
    cy.get(pgObj.prod2quant).should('contain','1');
}  