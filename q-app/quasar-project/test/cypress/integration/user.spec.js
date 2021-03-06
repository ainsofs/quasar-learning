// La'u Kōviti tests
describe('User', () => {
  beforeEach(() => {
    cy.visit("/#/user");
    cy.get('input[aria-label="Email address"]').as("email");
  });

  // test forget password
  it("test forget password text", () => {
    cy.contains("Forgot password")
  });

  it("test forget password v login validation", () => {
    cy.get('button').contains("Login").click();
    cy.contains("Forgot password").click();

    cy.get('@email')
      .parent()
      .parent()
      .should("have.class", "text-negative");

    cy.get('input[aria-label="Password"]')
      .parent()
      .parent()
      .should("not.have.class", "text-negative");

  });

  // TODO - fix this test
  // it("test forget password error", () => {
  //   cy.get("@email").focus().type("test123@test.com");
  //   cy.contains("Forgot password").click();
  //   cy.wait(3000);
  //   cy.contains("warning");
  // });

  it("test default email", () => {
    cy.visit("/#/user?email=test@test.com");
    cy.reload();
    cy.get("@email").should('have.value', "test@test.com");
  });

  it("test not on register tab", () => {
    cy.get(".q-tab__label").contains("Register").click();
    cy.contains("Forgot password").should("not.exist");
  });
})
