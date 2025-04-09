import EmployeePage from "../../pageObject/PIM/addEmployeePage";
import addUser from "../../pageObject/RoleBasedAccess/addUserPage";
import LoginPage from "../../pageObject/Login/loginPage"
let loginObj;
let empObj;
let addUserObj;
empObj=new EmployeePage();
addUserObj =new addUser();
loginObj=new LoginPage();
describe('Role Based Access Test',()=>{
    beforeEach(() => {
      cy.session('admin-session', () => {
        cy.login()
      });
        
      });
    it('add employee',()=>{
        empObj.addEmployeeDetails();
        empObj.setUserCredentials();
        empObj.saveAddEmployeeAndCredentials();
    })
    it('add User',()=>{
        addUserObj.addUser();
        
    })
    it('logout',()=>{
        cy.logout();
        cy.url().should('include', 'auth/login');
        
    })
    it('Admin user should see Admin tab', () => {
        
      cy.login();
        // cy.reload();
        // loginObj.login();
    
        // Check for alert and retry if CSRF token validation fails
        // cy.on('window:alert', (alertText) => {
        //   if (alertText.includes('CSRF token validation failed')) {
        //     cy.log('CSRF token issue detected, retrying login...');
        //     cy.reload();
        //     loginObj.login();
        //   }
        // });
                       

    
        // Assert: Admin tab is visible
        addUserObj.elements.adminTab().contains('Admin').should('be.visible');
        cy.wait(5000)
      });
      it('logout',()=>{
        cy.logout();
        cy.url().should('include', 'auth/login');
        //cy.wait(5000)
    })
      it('ESS user should NOT see Admin tab', () => {
        loginObj.loginESS()
    
        // Assert: Admin tab is not visible
        addUserObj.elements.allMenuTabs().should('not.contain', 'Admin');
      });
})