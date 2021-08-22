package Task1;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Address {
    private static WebDriver driver;

    @FindBy(linkText = "Addresses")
    private WebElement addresses;
    @FindBy(xpath = "//a[@href='https://prod-kurs.coderslab.pl/index.php?controller=address']")
    private WebElement newAddress;

    public Address(WebDriver driver) {
        Address.driver = driver;
        PageFactory.initElements(Address.driver, this);
    }
    public void addressesClick() {
        addresses.click();
    }
    public void createNewAddressClick() {
        newAddress.click();
    }
}
