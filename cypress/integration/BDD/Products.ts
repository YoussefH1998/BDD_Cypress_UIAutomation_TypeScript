import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let productNames = ["Cucumber", "Carrot"];

Given("User visits products page", () => {
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
});

When("User add the items to cart", () => {
  productNames.forEach(function (element) {
    cy.addToCart(element);
  });
});

Then("The items are marked added", () => {
  productNames.forEach(function (element) {
    cy.checkIsAdded(element);
  });
});

Then("The items are present in the bag", () => {
  cy.get(".cart-icon").click();
  cy.get(".cart-preview .cart-item .product-name").each(($el, index, $list) => {
    const text = $el.text().split(" ")[0];
    if (!productNames.includes(text)) {
      expect(false).to.be.true;
    }
  });
  cy.get(".cart-icon").click();
});
