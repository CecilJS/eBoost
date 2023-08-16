context("eBoost", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  //Visit the landing page and assert that all buttons exist

  it("should visit eBoost landing page", () => {
    cy.url().should("contain", "/");
    cy.get("[data-cy='landing_page_heading']");
    cy.get("[data-cy='landing_page_prediction_btn']");
    cy.get("[data-cy='landing_page_logs_btn']");
  });
});
