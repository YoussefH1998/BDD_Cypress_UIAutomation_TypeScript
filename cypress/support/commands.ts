import * as products from "../fixtures/products.json";
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * will vist the website but mock the proucts response from the backend
       *  @example
       * cy.mockvisit()
       *
       */
      mockvisit(): Chainable<void>;
      /**
       * will search for certain product and add it to the cart
       * @param productName that you want to search for and add to the cart
       * @example
       * cy.addToCart(productName)
       *
       */
      addToCart: typeof addToCart;
      //addToCart(productName: string): Chainable<void>;
      /**
       * will check that the text under certain product is ADDED
       * @param productName that you want to search for and add to the cart
       * @example
       * cy.checkIsAdded(productName)
       *
       */
      checkIsAdded: typeof checkIsAdded;
    }
  }
}

Cypress.Commands.add("mockvisit", () => {
  cy.intercept(
    {
      method: "GET",
      url: "https://rahulshettyacademy.com/seleniumPractise/data/products.json",
    },
    {
      statusCode: 200,
      body: products,
    }
  ).as("mockproducts");
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  cy.wait("@mockproducts");
  cy.wait(5000);
});

const addToCart = (productName: string) => {
  cy.get("div[class=product]").each(($el, index, $list) => {
    if ($el.find("h4.product-name").text().includes(productName)) {
      cy.get("div[class=product]").eq(index).contains("ADD TO CART").click();
    }
  });
};
const checkIsAdded = (productName: string) => {
  cy.get("div[class=product]").each(($el, index, $list) => {
    if ($el.find("h4.product-name").text().includes(productName)) {
      cy.get("div.product-action button")
        .eq(index)
        .should("have.text", "✔ ADDED");
    }
  });
};

Cypress.Commands.add("addToCart", addToCart);
Cypress.Commands.add("checkIsAdded", checkIsAdded);
