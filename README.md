# Project Title [BDD Web Automation]

[Products](https://www.saucedemo.com/) web UI automation testing with Cypress , Typescript and gherkin.

## Prerequisites

- Knowledge of Cypress, TypeScript, gherkin & BDD
- Any source-code editor downloaded that can run typescript programs [VS Code](https://code.visualstudio.com/)

## Built With

- [Cypress](https://docs.cypress.io/guides/overview/why-cypress) - The web framework used
- [TypeScript](https://www.typescriptlang.org/docs/) - The programming languag used
- [Gherkin](https://cucumber.io/docs/gherkin/) - Programming language that is used by developers for the purpose of defining tests in the Cucumber platform
- [BDD](https://cucumber.io/docs/bdd/) - A software development process that Cucumber was built to support

## Setup up your environment

- Simply clone the project using the following command

```
git clone https://github.com/YoussefH1998/BDD_Cypress_UIAutomation_TypeScript
```

-Open the folder path in which the project was cloned in with VS code .

-Run the following command in the project terminal .

```
npm install
```

## Running the tests

- Simply in the project command line in VS code after setup up the project run

```
npx cypress open
```

- Choose E2E, Then choose the feature file that you want and it will start the script.
- Choose the browser file that scripts will run on
- Choose the feature file that you want and it will start the script.

<br>
OR
<br>

- Run the scripts directly from the command line

```
npm run cypress:run
// will run the scripts on the default browser which is electron in the headless mode

npm run cypress:run:chrome
// will run the scripts on the chrome browser in the headless mode

npm run cypress:smoke
// will run the tests that are tagged with @Smokes


npm run cypress:products
// will run the tests that are tagged with @Products
```

## Test Execution Video Link

[Test Execution Video](https://drive.google.com/file/d/1Z7ihcfkOZtiyHB_v93Ku6Gn3wNQsM3Tg/view?usp=sharing) - A video of test execution for e2e feature file in the project

## Author

**Youssef Hassan**
