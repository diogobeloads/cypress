describe("template spec", () => {
  it("Realizar login com sucesso", () => {
    // Arrange
    cy.visit("https://www.saucedemo.com");

    // Act
    cy.get('[data-test="username"]').type("standard_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    // Assert
  });
});
