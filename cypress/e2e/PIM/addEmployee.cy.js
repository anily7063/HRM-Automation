import EmployeePage from "../../pageObject/PIM/addEmployeePage";
let addEmpObj;
addEmpObj= new EmployeePage();
describe('add employee details',()=>{
    before(() => {
        cy.session('admin-session', () => {
            cy.login()
          });
      });
    it('should add the employe details and his credentials successfully',()=>{
    addEmpObj.addEmployeeDetails();
    addEmpObj.setUserCredentials();
    addEmpObj.saveAddEmployeeAndCredentials();
//Assert
addEmpObj.searchEmployee();
cy.fixture('employeeData').then((data) => {
    
    addEmpObj.elements.empTable().should('contain',data.empFirstName)
  });

    })
    it('delete the added employee',()=>{
        addEmpObj.deleteEmployee();
        //addEmpObj.searchEmployee();
        //addEmpObj.elements.noRecordsFoundToastMessage().should('contain','No Records Found')

    })

    it('logout',()=>{
        cy.logout();
        cy.url().should('include', 'auth/login');
    })
})