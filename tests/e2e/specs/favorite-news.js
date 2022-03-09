//docs.cypress.io/api/introduction/api.html

describe("Add and remove to favorite one news", () => {
  it("Visits the app", () => {
    cy.visit("http://localhost:8080/ ");
    cy.wait(3000);
  });
  it("Add to favorites the last news", () => {
    cy.get(".news")
      .find(".news__title-heart")
      .children(".news__title-heart-void")
      .last()
      .click();
    cy.wait(1000);
  });
  it("Remove to favorites the last news", () => {
    cy.get(".news")
      .find(".news__title-heart")
      .children(".news__title-heart-filled")
      .last()
      .click();
    cy.wait(1000);
  });
});
