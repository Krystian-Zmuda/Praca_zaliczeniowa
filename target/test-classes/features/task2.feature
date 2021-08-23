Feature: Task 2 test

  Scenario: User can order a Hummingbird Printed Sweater
    Given User is on SignIn page2
    When User logs in with email and password2
    And User goes to main page
    And User chooses a Hummingbird Printed Sweater
    And User chooses the M size
    And User chooses quantity of 5
    And User adds products to cart
    And User proceeds to checkout
    And User confirms address
    And User chooses delivery option
    And User choose payment option and agrees to the terms
    And User chooses to order with an obligation to pay
    Then User takes a screenshot with order confirmation and order price
    And User closes the browser
