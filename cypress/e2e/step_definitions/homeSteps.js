import {
  Given,
  When,
  Then
} from "@badeball/cypress-cucumber-preprocessor";
import {homePage} from '@pages/HomePage'

Then("should i view the admin", () => {
    homePage.validateTitleHome("administrador")
});