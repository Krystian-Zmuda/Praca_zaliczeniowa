$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("task1.feature");
formatter.feature({
  "line": 1,
  "name": "Task 1 test",
  "description": "",
  "id": "task-1-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User can add new address to account",
  "description": "",
  "id": "task-1-test;user-can-add-new-address-to-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on SignIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User logs in with email and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks Addresses",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User chooses Create new address",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User fills the new address form with alias \u003calias\u003e address \u003caddress\u003e city \u003ccity\u003e postcode \u003cpostcode\u003e country \u003ccountry\u003e and phone \u003cphone\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User checks if address data is correct: alias \u003calias\u003e address \u003caddress\u003e city \u003ccity\u003e postcode \u003cpostcode\u003e country \u003ccountry\u003e and phone \u003cphone\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User closes browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "task-1-test;user-can-add-new-address-to-account;",
  "rows": [
    {
      "cells": [
        "alias",
        "address",
        "city",
        "postcode",
        "country",
        "phone"
      ],
      "line": 13,
      "id": "task-1-test;user-can-add-new-address-to-account;;1"
    },
    {
      "cells": [
        "Home",
        "ul. Ekielskiego",
        "Krakow",
        "30-376",
        "United Kingdom",
        "123456789"
      ],
      "line": 14,
      "id": "task-1-test;user-can-add-new-address-to-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "User can add new address to account",
  "description": "",
  "id": "task-1-test;user-can-add-new-address-to-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on SignIn page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User logs in with email and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks Addresses",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User chooses Create new address",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User fills the new address form with alias Home address ul. Ekielskiego city Krakow postcode 30-376 country United Kingdom and phone 123456789",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User checks if address data is correct: alias Home address ul. Ekielskiego city Krakow postcode 30-376 country United Kingdom and phone 123456789",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps1.setup()"
});
formatter.result({
  "duration": 2493756100,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps1.signInTest()"
});
formatter.result({
  "duration": 692122500,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps1.clickAddresses()"
});
formatter.result({
  "duration": 217992000,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps1.createNewAddress()"
});
formatter.result({
  "duration": 227219300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 43
    },
    {
      "val": "ul. Ekielskiego",
      "offset": 56
    },
    {
      "val": "Krakow",
      "offset": 77
    },
    {
      "val": "30-376",
      "offset": 93
    },
    {
      "val": "United Kingdom",
      "offset": 108
    },
    {
      "val": "123456789",
      "offset": 133
    }
  ],
  "location": "TestSteps1.newAddressForm(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 601185500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 46
    },
    {
      "val": "ul. Ekielskiego",
      "offset": 59
    },
    {
      "val": "Krakow",
      "offset": 80
    },
    {
      "val": "30-376",
      "offset": 96
    },
    {
      "val": "United Kingdom",
      "offset": 111
    },
    {
      "val": "123456789",
      "offset": 136
    }
  ],
  "location": "TestSteps1.address_check(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 427174000,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps1.closeBrowser()"
});
formatter.result({
  "duration": 619620700,
  "status": "passed"
});
formatter.uri("task2.feature");
formatter.feature({
  "line": 1,
  "name": "Task 2 test",
  "description": "",
  "id": "task-2-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User can order a Hummingbird Printed Sweater",
  "description": "",
  "id": "task-2-test;user-can-order-a-hummingbird-printed-sweater",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User logs in using email and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User goes to main page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User chooses a Hummingbird Printed Sweater",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User chooses the M size",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User chooses quantity of 5",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User adds products to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User proceeds to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User confirms address",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User chooses delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User choose payment option and agrees to the terms",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User chooses to order with an obligation to pay",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User takes a screenshot with order confirmation and order price",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "TaskSteps2.setup2()"
});
formatter.result({
  "duration": 1571941000,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps2.signInTest2()"
});
formatter.result({
  "duration": 669346200,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps2.goMainPage()"
});
formatter.result({
  "duration": 327458400,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps2.chooseSweater()"
});
formatter.result({
  "duration": 292378500,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps2.sizeChoice()"
});
formatter.result({
  "duration": 52957100,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps2.quantityChoice()"
});
formatter.result({
  "duration": 70113200,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps2.addToCart()"
});
formatter.result({
  "duration": 38561500,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps2.goToCheckout()"
});
formatter.result({
  "duration": 1140538600,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps2.addressConfirm()"
});
formatter.result({
  "duration": 462699600,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps2.deliveryOption()"
});
formatter.result({
  "duration": 466122300,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps2.paymentOption()"
});
formatter.result({
  "duration": 92577700,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps2.orderClick()"
});
formatter.result({
  "duration": 500470000,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps2.screenshot()"
});
formatter.result({
  "duration": 168972200,
  "status": "passed"
});
formatter.match({
  "location": "TaskSteps2.browserQuit()"
});
formatter.result({
  "duration": 625468500,
  "status": "passed"
});
});