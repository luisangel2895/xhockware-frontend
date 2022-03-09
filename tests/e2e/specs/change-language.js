//docs.cypress.io/api/introduction/api.html

describe("Change language of application", () => {
  it("Visits the app", () => {
    cy.visit("http://localhost:8080/ ");
    cy.wait(3000);
  });

  it("Enter to language fragment", () => {
    cy.get(".profile")
      .find(".profile__section")
      .children(".change-language-cypress")
      .last()
      .click();
    cy.wait(1000);
  });
  it("Change language to portuguese", () => {
    cy.get(".language")
      .find(".language__container")
      .children(".language__container-box")
      .last()
      .click();
    cy.wait(1000);
  });
  it("Exit to language fragment and see the app", () => {
    cy.get(".language__title")
      .find(".language__title-back")
      .children("svg")
      .last()
      .click();
    cy.wait(1000);
  });
});
