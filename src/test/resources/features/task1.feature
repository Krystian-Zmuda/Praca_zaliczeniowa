Feature: Task 1 test

  Scenario Outline: User can add new address to account
    Given User is on SignIn page
    When User logs in with email and password
    And User clicks Addresses
    And User chooses Create new address
    And User fills the new address form with alias <alias> address <address> city <city> postcode <postcode> country <country> and phone <phone>
    Then User checks if address data is correct: alias <alias> address <address> city <city> postcode <postcode> country <country> and phone <phone>
    And User closes browser

    Examples:
      | alias | address         | city   | postcode | country        | phone     |
      | Home  | ul. Ekielskiego | Krakow | 30-376   | United Kingdom | 123456789 |
