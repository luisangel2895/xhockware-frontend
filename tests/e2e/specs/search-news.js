//docs.cypress.io/api/introduction/api.html

describe("Search 'he' word and enter to one news returned", () => {
  it("Visits the app", () => {
    cy.visit("http://localhost:8080/ ");
    cy.wait(3000);
  });
  it("Search other word in the search-box", () => {
    cy.get("input").type("he").type("{enter}");
    cy.wait(2000);
  });
  it("Select the last news", () => {
    cy.get(".news").find(".news__img").children("img").last().click();
    cy.wait(1000);
  });
});
