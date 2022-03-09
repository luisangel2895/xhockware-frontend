//docs.cypress.io/api/introduction/api.html

describe("Change category in the application", () => {
  it("Visits the app", () => {
    cy.visit("http://localhost:8080/ ");
    cy.wait(3000);
  });
  it("Unselect All category", () => {
    cy.get(".home").find(".categories").children(".category").first().click();
    cy.wait(1000);
  });
  it("Select 'social' category", () => {
    cy.get(".home").find(".categories").children(".category").last().click();
    cy.wait(1000);
  });
});
