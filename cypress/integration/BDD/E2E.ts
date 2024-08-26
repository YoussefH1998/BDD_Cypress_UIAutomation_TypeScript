import {
  Given,
  When,
  Then,
  BeforeAll,
} from "@badeball/cypress-cucumber-preprocessor";

let data;

BeforeAll(() => {
  cy.fixture("example").then(function (fdata) {
    data = fdata;
  });
});
Given("User visits products page", () => {
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
});

When("User add the items to cart", () => {
  data.productName.forEach(function (element) {
    cy.addToCart(element);
  });
});

When("User click on the bag", () => {
  cy.get(".cart-icon").click();
  cy.get(".cart-preview button").click();
});

When("User validate the total price of choosen items is correct", () => {
  var sum = 0;
  cy.get("tr td:nth-child(4)")
    .each(($el, index, $list) => {
      if (index != 0) {
        const text = $el.text();
        sum += Number(text);
      }
    })
    .then(() => {
      cy.get(".totAmt").should("have.text", String(sum + " "));
    });
  cy.contains("Place Order").click();
});

When("User fill the country and checks the terms conditions", () => {
  cy.get("select").select("Egypt");
  cy.get(".chkAgree").check().should("be.checked");
  cy.get("button").click();
});

Then("The purchase is completed successfully", () => {
  cy.get(".products>.wrapperTwo>span").should(
    "have.text",
    "Thank you, your order has been placed successfully  You'll be redirected to Home page shortly!!"
  );
});
