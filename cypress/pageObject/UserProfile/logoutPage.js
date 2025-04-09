class LogoutPage{
    elements={
        userProfileDropDown:()=>cy.get('.oxd-userdropdown-tab'),
        userProfileDropDownLogout:()=>cy.get(':nth-child(4) > .oxd-userdropdown-link')
    }
    userProfileDropDownClick=()=>{
        this.elements.userProfileDropDown().click();
    }
    logoutClick=()=>{
        this.elements.userProfileDropDownLogout().click();
    }
}
export default LogoutPage;