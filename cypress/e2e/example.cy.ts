// https://on.cypress.io/api

describe("Layout setted", () => {
  it("should have a header", () => {
    cy.visit("/");
    cy.get("header").should("exist");
  });

  it("should have a footer", () => {
    cy.visit("/");
    cy.get("footer").should("exist");
  });
});
