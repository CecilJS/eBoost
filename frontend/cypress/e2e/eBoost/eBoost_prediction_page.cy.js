context("eBoost", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  //Visit the landing page and the navigate to prediction page

  it("should visit eBoost landing page", () => {
    cy.url().should("contain", "/");
    cy.get("[data-cy='landing_page_heading']");

    //Navigate to prediction page and assert the headers exist
    cy.get("[data-cy='landing_page_prediction_btn']").click();
    cy.url().should("contain", "/prediction");
    cy.get("[data-cy='check_status']");
    cy.get("[data-cy='tips']");

    // Click modal and assert that all fields exists
    cy.get("[data-cy='check_status']").click();
    cy.get("[data-cy='Modal_heading']");
    cy.get("[data-cy='Modal_description']");
    cy.get("[data-cy='Modal_UDI']");
    cy.get("[data-cy='Modal_Air_Temperature']");
    cy.get("[data-cy='Modal_Process_Temperature']");
    cy.get("[data-cy='Modal_Rotational_speed']");
    cy.get("[data-cy='Modal_Torque']");
    cy.get("[data-cy='Modal_Tool_Wear']");
    cy.get("[data-cy='Modal_TWF']");
    cy.get("[data-cy='Modal_HDF']");
    cy.get("[data-cy='Modal_PWF']");
    cy.get("[data-cy='Modal_OSF']");
    cy.get("[data-cy='Modal_RNF']");
  });
});
