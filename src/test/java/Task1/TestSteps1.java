package Task1;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class TestSteps1 {

    private WebDriver driver;

    @Given("User is on SignIn page")
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication&back=my-account");
    }

    @When("User logs in with email and password")
    public void signInTest() {
        LogIn logInTest = new LogIn(driver);
        logInTest.signIn("test.email123@gmail.com", "abcd123");
    }

    @And("User clicks Addresses")
    public void clickAddresses() {
        Address address = new Address(driver);
        address.addressesClick();
    }

    @And("User chooses Create new address")
    public void createNewAddress() {
        Address address = new Address(driver);
        address.createNewAddressClick();
    }

    @And("User fills the new address form with alias (.*) address (.*) city (.*) postcode (.*) country (.*) and phone (.*)")
    public void newAddressForm(String alias, String address, String city, String postcode, String country, String phone) {

        WebElement aliasInput = driver.findElement(By.name("alias"));
        aliasInput.sendKeys(alias);

        WebElement addressInput = driver.findElement(By.name("address1"));
        addressInput.sendKeys(address);

        WebElement cityInput = driver.findElement(By.name("city"));
        cityInput.sendKeys(city);

        WebElement postcodeInput = driver.findElement(By.name("postcode"));
        postcodeInput.sendKeys(postcode);

        WebElement countryInput = driver.findElement(By.name("id_country"));
        countryInput.sendKeys(country);

        WebElement phoneInput = driver.findElement(By.name("phone"));
        phoneInput.sendKeys(phone);

        WebElement saveBtn = driver.findElement(By.cssSelector("button.btn.btn-primary.float-xs-right"));
        saveBtn.click();
    }

    @Then("User checks if address data is correct: alias (.*) address (.*) city (.*) postcode (.*) country (.*) and phone (.*)")
    public void address_check(String alias, String address, String city, String postcode, String country, String phone) {
        AddressCheck checkData = new AddressCheck(driver);
        checkData.addressCheck(alias, address, city, postcode, country, phone);
    }
    @And("User closes browser")
    public void closeBrowser() {
        driver.quit();
    }
}
