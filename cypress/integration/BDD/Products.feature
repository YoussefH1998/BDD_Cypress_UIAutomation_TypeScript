Feature: Products Page functionality
Testing the Products Page Functionality
@Products
Scenario: User can add products to card correctly
    Given User visits products page
    When User add the items to cart
    Then The items are marked added
    And The items are present in the bag     