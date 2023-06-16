/// <reference types="@cypress/xpath" />
  const el = {
    usernameField: '#username',
    passwordField:'#password',
    loginButton: '.width-40'
  }


class LoginPage {


loginToTheSite() {
    cy.visit(Cypress.config('url'))
 }

fillUser(username){
    cy.get(el.usernameField).type(username)
 } 

fillPassword(password){
    cy.get(el.passwordField).type(password)
}


clickLogin(){
    cy.get(el.loginButton).click()
}

clicarEnter(){
    cy.xpath("//input[@value='Entrar']").should("be.visible").click()
}


} 
export const loginPage = new LoginPage();
