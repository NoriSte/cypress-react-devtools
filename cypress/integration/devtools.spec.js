/// <reference types="Cypress" />

context('React devtools', () => {
  it('should allow to debug the React/Redux app', () => {
    cy.viewport(300, 600);
    cy.visit("/");
    cy.get("button").first().click();
    cy.log("Take a look at the React and Redux devtools");
  })
})
