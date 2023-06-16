import {
  Given,
  When,
  Then
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'

 Given("access to mantis website", () => {
  loginPage.loginToTheSite()
 });


When("enter with the user",() => { 
  loginPage.fillUser(Cypress.config('username')) 
});

When("click log in", () => {
     loginPage.clickLogin()
});

When("enter the password", () => {
   loginPage.fillPassword(Cypress.config('password'))
});

When("click enter", () => {
  loginPage.clicarEnter()
});
