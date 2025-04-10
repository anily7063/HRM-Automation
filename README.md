md
# 🧪 OrangeHRM QA Automation (Cypress)

This repository contains automated test cases for the OrangeHRM demo application using the **Cypress** testing framework. It demonstrates a senior-level QA approach including test strategy, page object model, session management, role-based testing, data-driven tests, and more.

---

## 🚀 Tech Stack

- **Test Framework**: [Cypress](https://www.cypress.io/)
- **Language**: JavaScript (ES6+)
- **Design Pattern**: Page Object Model (POM)
- **Assertion Library**: Chai (Built-in with Cypress)
- **Reporting**: Allure Report / Custom Reports
- **Test Runner**: Cypress GUI & CLI

---

## 🔑 Credentials (Demo App)

- URL: [https://opensource-demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/)
- Username: `Admin`
- Password: `admin123`

---

## 🏗️ Project Structure

cypress/ ├── e2e/ │ ├── Login/ │ │ └── login.cy.js │ ├── PIM/ │ │ └── addEmployee.cy.js| ├── RoleBasedAccess/ │ │ └── roleBasedAccess.cy.js ├── support/ │ ├── pages/ │ │ ├── Login/ │ │ │ └── loginPage.js │ │ ├── PIM/ │ │ │ └── addEmployee.js │ ├── commands.js ├── fixtures/ │ └── employeeData.json

yaml
---

## 🧪 Test Coverage

- ✅ Login & Logout
- ✅ Add / Edit / Search Employee
- ✅ Role-Based Access Control (Admin vs ESS)
- ✅ Data-Driven Testing (via fixtures)
- ✅ Robust Assertions & Error Handling

---

## 📦 Installation & Setup

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-username/orangehrm-cypress-automation.git
   cd orangehrm-cypress-automation
Install dependencies

bash
npm install
Run tests (choose one)

Open Cypress UI:

bash
npx cypress open
Run headlessly in CLI:

bash
npx cypress run
🛠️ Custom Commands
Reusable login and other commands are defined in cypress/support/commands.js.

📊 Reporting
Screenshots & videos are automatically generated on failure.

Custom HTML/JUnit reports can be added using mochawesome or plugins.

🤝 Contribution
This repo was created for demo purposes to showcase advanced QA automation strategy. PRs are welcome for enhancements or extending the test coverage.

