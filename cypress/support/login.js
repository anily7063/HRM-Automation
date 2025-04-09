import LoginPage from "../pageObject/Login/loginPage";

let loginObj;
loginObj=new LoginPage();
Cypress.Commands.add('login',()=>{
    loginObj.visit();
    loginObj.login();
})