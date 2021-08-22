$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/zadanie1.feature");
formatter.feature({
  "line": 1,
  "name": "New address creation",
  "description": "",
  "id": "new-address-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User adds new address",
  "description": "",
  "id": "new-address-creation;user-adds-new-address",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on https://prod-kurs.coderslab.pl/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User goes to Sign In page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User logs in using email (.*) and password (.*)",
  "keyword": "And "
});
formatter.match({
  "location": "Task1Steps.userOnMainPage()"
});
formatter.result({
  "duration": 2728505300,
  "status": "passed"
});
formatter.match({
  "location": "Task1Steps.clickSignIn()"
});
formatter.result({
  "duration": 548700,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebElement.click()\" because \"this.signInBtn\" is null\r\n\tat zadanie1.MainPage.signInClick(MainPage.java:29)\r\n\tat zadanie1.Task1Steps.clickSignIn(Task1Steps.java:27)\r\n\tat ✽.When User goes to Sign In page(src/main/resources/features/zadanie1.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "(.*)",
      "offset": 25
    },
    {
      "val": "(.*)",
      "offset": 43
    }
  ],
  "location": "Task1Steps.signIn(String,String)"
});
formatter.result({
  "status": "skipped"
});
});