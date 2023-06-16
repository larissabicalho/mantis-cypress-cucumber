
const el = {
  titleHomeText: '.label',
}


class HomePage {


 validateTitleHome(param){
   cy.get(el.titleHomeText).invoke('text').should('include', param);
}

}

export const homePage = new HomePage();

