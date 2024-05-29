describe("no.wikipedia.org", () => {
  it("can search for Noroff", () => {
    cy.visit("https://no.wikipedia.org");

    cy.get("#searchform input[type='search']").type("Noroff");
    cy.get("#searchform button").click();

    cy.get("h1").contains("Noroff");
  });
});
