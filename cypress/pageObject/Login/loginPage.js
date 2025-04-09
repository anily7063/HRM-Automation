class LoginPage{
    elements={
        userName:()=>cy.xpath("//input[@placeholder='Username']"),
        password:()=>cy.xpath("//input[@placeholder='Password']"),
        loginBtn:()=>cy.xpath("//button[normalize-space()='Login']"),
        dashboard:()=>cy.get(':nth-child(8) > .oxd-main-menu-item'),
        

    }

    clearAndType(element, text) {
        element().clear().type(text);
      }

      visit=()=>{
        cy.visit(Cypress.env("BASE_URL"));
      }
    enterUserName=(usrName)=>{
        this.clearAndType(this.elements.userName, usrName);
    }
    
    enterPassword=(pswrd)=>{
        this.clearAndType(this.elements.password, pswrd);
    }
    login=()=>{
        this.enterUserName(Cypress.env("ADMIN_USERNAME"));
        this.enterPassword(Cypress.env("ADMIN_PASSWORD"));
        this.elements.loginBtn().click();
    }
    loginESS=()=>{
        cy.fixture('generatedUser').then((data) => {
            this.enterUserName(data.username);
            this.enterPassword(data.password);
            this.elements.loginBtn().click();
              });
          
           
        
    }
}

export default LoginPage;