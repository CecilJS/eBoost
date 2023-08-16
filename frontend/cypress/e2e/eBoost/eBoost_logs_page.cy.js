context("eBoost", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  //Visit the landing page and the navigate to logs page

  it("should visit eBoost landing page", () => {
    cy.url().should("contain", "/");
    cy.get("[data-cy='landing_page_heading']");

    //Navigate to logs page and assert the headers exist
    cy.get("[data-cy='landing_page_logs_btn']").click();
    cy.url().should("contain", "/logs");
    cy.get("[data-cy='Air Temperature']");
    cy.get("[data-cy='Process Temperature']");
    cy.get("[data-cy='Rotational Speed']");
    cy.get("[data-cy='Torque']");
    cy.get("[data-cy='Tool Wear']");
    cy.get("[data-cy='TWF']");
    cy.get("[data-cy='HDF']");
    cy.get("[data-cy='PWF']");
    cy.get("[data-cy='OSF']");
    cy.get("[data-cy='RNF']");
  });
});
