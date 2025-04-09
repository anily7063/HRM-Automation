import LoginPage from "../../pageObject/Login/loginPage"
let loginObj;
loginObj=new LoginPage();
describe('Login Test',()=>{
    it('should login successfully with valid credentials',()=>{

loginObj.visit();                     //arrange

loginObj.login();                     //act
//assert
loginObj.elements.dashboard().should('contain','Dashboard')

    })
    it('logout',()=>{
        cy.logout();
        cy.url().should('include', 'auth/login');
    })
})