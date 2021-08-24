package Task2;

import Task1.LogIn;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class TaskSteps2 {
    private WebDriver driver;

    @Given("User is on login page")
    public void setup2() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication&back=my-account");

    }

    @When("User logs in using email and password")
    public void signInTest2() {
        LogIn logInTest = new LogIn(driver);
        logInTest.signIn("test.email123@gmail.com", "abcd123");
    }

    @And("User goes to main page")
    public void goMainPage() {
        WebElement logo = driver.findElement(By.className("logo"));
        logo.click();
    }

    @And("User chooses a Hummingbird Printed Sweater")
    public void chooseSweater() {
        WebElement sweater = driver.findElement(By.xpath("//a//img[@alt='Brown bear printed sweater']"));
        sweater.click();
    }

    @And("User chooses the M size")
    public void sizeChoice() {
        WebElement size = driver.findElement(By.id("group_1"));
        size.sendKeys("m");

    }

    @And("User chooses quantity of 5")
    public void quantityChoice() {
        WebElement quantity = driver.findElement(By.id("quantity_wanted"));
        quantity.clear();
        quantity.sendKeys("5");

    }

    @And("User adds products to cart")
    public void addToCart() {
        WebElement cart = driver.findElement(By.className("add-to-cart"));
        cart.click();
    }

    @And("User proceeds to checkout")
    public  void goToCheckout() {
        WebElement checkout = driver.findElement(By.xpath("//a[@class='btn btn-primary']"));
        checkout.click();
        WebElement checkout2 = driver.findElement(By.xpath("//a[@class='btn btn-primary']"));
        checkout2.click();
    }

    @And("User confirms address")
    public void addressConfirm() {
        WebElement address = driver.findElement(By.name("confirm-addresses"));
        address.click();
    }
    @And("User chooses delivery option")
    public void deliveryOption() {
        WebElement delivery = driver.findElement(By.name("confirmDeliveryOption"));
        delivery.click();

    }

    @And("User choose payment option and agrees to the terms")
    public void paymentOption() {
        WebElement payment = driver.findElement(By.id("payment-option-1"));
        payment.click();
        WebElement terms = driver.findElement(By.id("conditions_to_approve[terms-and-conditions]"));
        terms.click();
    }

    @And("User chooses to order with an obligation to pay")
    public void orderClick() {
        WebElement order = driver.findElement(By.xpath("/html/body/section/div/section/div/div[1]/section[4]/div/div[3]/div[1]/button"));
        order.click();
    }

    @Then("User takes a screenshot with order confirmation and order price")
     public void screenshot() throws IOException {
        File screenshotFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(screenshotFile , new File("C:\\screenshot.png"));
    }

    @And("User closes the browser")
    public void browserQuit() {
        driver.quit();
    }
}


