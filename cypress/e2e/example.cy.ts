// https://on.cypress.io/api

describe("Layout setted", () => {
  it("should have a header", () => {
    cy.visit("/");
    cy.get("navbar").should("exist");
    cy.get("navbar").should("contain", "Comp Trek");
  });

  it("should have a footer", () => {
    cy.visit("/");
    cy.get("footer").should("exist");
  });
});
