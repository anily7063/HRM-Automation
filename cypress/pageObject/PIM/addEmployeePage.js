
class EmployeePage {
    elements={
        pimMenu:()=>cy.get(':nth-child(2) > .oxd-main-menu-item'),
addEmployeeBtn:()=>cy.get('.orangehrm-header-container > .oxd-button'),
firstNameInput:()=>cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'),
MidNameInput:()=>cy.get(':nth-child(2) > :nth-child(2) > .oxd-input'),
LastNameInput:()=>cy.get(':nth-child(3) > :nth-child(2) > .oxd-input'),
empIdInput:()=>cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'),
loginDetailsToggle:()=>cy.get('.oxd-switch-input'),
userNameInput:()=>cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
passwordInput:()=>cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
confirmPasswordInput:()=>cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
saveBtn:()=>cy.get('.oxd-button--secondary'),
searchEmployee:()=>cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'),
searchBtn:()=>cy.get('.oxd-form-actions > .oxd-button--secondary'),
empTable:()=>cy.get('.oxd-table-card > .oxd-table-row'),
employeeList:()=>cy.get('.--visited'),
deleteEmployeeBtn:()=>cy.get('.oxd-table-cell-actions > :nth-child(2)'),
confirmDeleteEmployeeBtn:()=>cy.get('.oxd-button--label-danger'),
noRecordsFoundToastMessage:()=>cy.get('.oxd-text--toast-message')

    }
    pimMenuClick=()=>{
        this.elements.pimMenu().click();
    }
    navigateToAddEmployee=()=>{
        this.elements.addEmployeeBtn().click();
    }
    clearAndType(element, text) {
        element().clear().type(text);
      }

      enterFirstName=(firstName)=>{
        this.clearAndType(this.elements.firstNameInput, firstName);
    }
    
    enterMidName=(midName)=>{
        this.clearAndType(this.elements.MidNameInput, midName);
    }
    enterLastName=(lastName)=>{
        this.clearAndType(this.elements.LastNameInput, lastName);
    }

    enterEmpId=(empid)=>{
        this.clearAndType(this.elements.empIdInput, empid);
    }
    loginDetailsToggleClick=()=>{
        this.elements.loginDetailsToggle().click();
    }

    setUserName=(userName)=>{
        this.clearAndType(this.elements.userNameInput, userName);
    }
    setUserPassword=(password)=>{
        this.clearAndType(this.elements.passwordInput, password);
    }
    userConfirmPassword=(confirmPassword)=>{
        this.clearAndType(this.elements.confirmPasswordInput, confirmPassword);
    }
    saveAddEmployeeAndCredentials=()=>{
        this.elements.saveBtn().click();
        cy.wait(5000)
    }
    employeeListClick=()=>{
        this.elements.employeeList().click();
    }
    addEmployeeDetails=()=>{
        cy.fixture('employeeData').then((data) => {
            const uniqueEmpId = Math.floor(1000 + Math.random() * 9000).toString();
             // Overwrite empId
        data.empId = uniqueEmpId;
cy.log(data.empId)
            this.pimMenuClick();
            this.navigateToAddEmployee();
            this.enterFirstName(data.empFirstName)
            this.enterMidName(data.empMiddleName)
            this.enterLastName(data.empLastName)
            this.enterEmpId(data.empId)
          });
    }
    setUserCredentials=()=>{
        cy.fixture('employeeData').then((data) => {
            const randomNum = Math.floor(Math.random() * 100000);
        const uniqueUsername = `emp_user_${randomNum}`;
        data.empUserName=uniqueUsername;
            this.loginDetailsToggleClick()
            this.setUserName(data.empUserName)
            this.setUserPassword(data.empPassword)
            this.userConfirmPassword(data.empConfirmPassword)
             
            // Save the generated username to a JSON file
    cy.writeFile('cypress/fixtures/generatedUser.json', {
        username: uniqueUsername,
      password: data.empPassword,
      confirmPassword: data.empConfirmPassword
      });
  
      // Store it in alias if needed during the same test
      cy.wrap({ username: uniqueUsername, password: data.empPassword,
        confirmPassword: data.empConfirmPassword }).as('generatedCredentials');
            
          });
    }
    searchEmployee=()=> {
        
        
        cy.fixture('employeeData').then((data) => {
           // cy.go(-1)
           this.employeeListClick();
            this.clearAndType(this.elements.searchEmployee, data.empFirstName);
            this.elements.searchBtn().scrollIntoView({ behavior: 'smooth', block: 'start' }).click();
          });
      }

      deleteEmployee=()=>{
        this.elements.deleteEmployeeBtn().each(($btn, index) => {
            // Wrap and click the delete button at the current index
            cy.wrap($btn).click();
        
            // Wait for the page/modal to be updated before clicking the confirm button
            cy.wait(1000); // Adjust time as needed for your page's re-rendering
            this.elements.confirmDeleteEmployeeBtn().as('confirmDeleteEmployeeBtn');
            // Now click the corresponding confirm button at the same index
            cy.get('@confirmDeleteEmployeeBtn').eq(index).click();
            
            // Optional: Add another wait if the page takes longer to process
            cy.wait(10000);
          });
      }

}

export default EmployeePage