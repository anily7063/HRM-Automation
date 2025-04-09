import LogoutPage from "../pageObject/UserProfile/logoutPage"
let logoutObj;
logoutObj=new LogoutPage();
Cypress.Commands.add('logout',()=>{
logoutObj.userProfileDropDownClick();
logoutObj.logoutClick();
})