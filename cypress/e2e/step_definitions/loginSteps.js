import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from '@pages/LoginPage';

const loginPage = new LoginPage();

Given("I have access to the Mantis website", () => {
  loginPage.loginToTheSite();
});

When("I enter the username", () => {
  loginPage.fillUser(Cypress.config('username'));
});

When("I click the login button", () => {
  loginPage.clickLogin();
});

When("I enter the password", () => {
  loginPage.fillPassword(Cypress.config('password'));
});

When("I click enter", () => {
  loginPage.clickEnter();
});