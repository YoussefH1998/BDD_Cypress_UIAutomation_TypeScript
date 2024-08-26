Feature: E2E
Testing the E2E flow
@Smoke
Scenario: User sumbits order
    Given User visits products page
    When User add the items to cart
    And User click on the bag
    And User validate the total price of choosen items is correct
    And User fill the country and checks the terms conditions
    Then The purchase is completed successfully 

