import EmployeePage from "../PIM/addEmployeePage";
class addUser{
    elements={
        adminTab:()=>cy.get(':nth-child(1) > .oxd-main-menu-item'),
        addUserBtn:()=>cy.get('.orangehrm-header-container > .oxd-button'),
        userRole:()=>cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        empNameInput:()=>cy.get('.oxd-autocomplete-text-input > input'),
        status:()=>cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        userNameInput:()=>cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        passwordInput:()=>cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
        confirmPasswordInput:()=>cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        saveUserBtn:()=>cy.get('.oxd-button--secondary'),
        allMenuTabs:()=>cy.get('.oxd-sidepanel-body')
    }

    addEmpObj=new EmployeePage();
    navigateToAddUser=()=>{
        this.elements.adminTab().click();
        this.elements.addUserBtn().click()
    }
    selectUserRole=()=>{
        this.elements.userRole().click();
        cy.contains('.oxd-select-dropdown .oxd-select-option', 'ESS').click();
    }
    clearAndType(element, text) {
        element().clear().type(text);
      }
      enterEmpName=(empName)=>{
        this.clearAndType(this.elements.empNameInput, empName);
    }
    enterUserName=(userName)=>{
        this.clearAndType(this.elements.userNameInput, userName);
    }
    enterUserPassword=(password)=>{
        this.clearAndType(this.elements.passwordInput, password);
    }
    enterConfirmPassword=(confirmPassword)=>{
        this.clearAndType(this.elements.confirmPasswordInput, confirmPassword);
    }
    selectStatus=()=>{
        this.elements.status().click();
        cy.contains('.oxd-select-dropdown .oxd-select-option', 'Enabled').click();
    }
    addUser=()=>{
        this.navigateToAddUser();
        this.selectUserRole();
        cy.fixture('employeeData').then((empData) => {
            const fullName = `${empData.empFirstName} ${empData.empMiddleName} ${empData.empLastName}`;
            this.enterEmpName(fullName)
            cy.contains('.oxd-autocomplete-option', fullName).click();
            this.selectStatus();
            cy.fixture('generatedUser').then((data) => {
                const randomNum = Math.floor(Math.random() * 100000);
                const uniqueUsername = `user_${randomNum}`;
                data.username=uniqueUsername;
                this.enterUserName(data.username)
                this.enterUserPassword(data.password);
                this.enterConfirmPassword(data.confirmPassword)
                cy.writeFile('cypress/fixtures/generatedUser.json', {
                    username: uniqueUsername,
                    password: data.password,
      confirmPassword: data.confirmPassword
                  });
              
               });

          });
          this.elements.saveUserBtn().click();
        
    }

}
export default addUser;