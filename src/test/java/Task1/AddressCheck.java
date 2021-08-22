package Task1;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.Objects;

public class AddressCheck {
    private static WebDriver driver;

    @FindBy(xpath = "//a[@data-link-action='edit-address']")
    private WebElement updateAddress;
    @FindBy(xpath = "//input[@value='Home']")
    private WebElement aliasInput;
    @FindBy(name = "address1")
    private WebElement addressFormInput;
    @FindBy(name = "city")
    private WebElement cityInput;
    @FindBy(name = "postcode")
    private WebElement postcodeInput;
    @FindBy(name = "id_country")
    private WebElement countryId;
    @FindBy(name = "phone")
    private WebElement phoneInput;

    public AddressCheck(WebDriver driver) {
        AddressCheck.driver = driver;
        PageFactory.initElements(AddressCheck.driver, this);
    }
    public void addressCheck (String alias, String address, String city, String postcode, String country, String phone) {
        updateAddress.click();
        System.out.println(aliasInput.getAttribute("value"));

         if (Objects.equals(aliasInput.getAttribute("value"), alias)) {
             System.out.println("Alias is correct");
         } else {
             System.out.println("Wrong data");
         }
         addressFormInput.getText();
         if (Objects.equals(addressFormInput.getAttribute("value"), address)) {
             System.out.println("Address is correct");
         } else {
             System.out.println("Wrong data");
         }
         cityInput.getText();
         if (Objects.equals(cityInput.getAttribute("value"), city)) {
             System.out.println("City is correct");
         } else {
             System.out.println("Wrong data");
         }
         postcodeInput.getText();
         if (Objects.equals(postcodeInput.getAttribute("value"), postcode)) {
             System.out.println("Postcode is correct");
         } else {
             System.out.println("Wrong data");
         }
         countryId.getText();
         if (Objects.equals(countryId.getAttribute("selected"), country)) {
             System.out.println("Country is correct");
         } else {
             System.out.println("Wrong data");
         }
         phoneInput.getText();
         if (Objects.equals(phoneInput.getAttribute("value"), phone)) {
             System.out.println("Phone is correct");
         }else {
             System.out.println("Wrong data");
         }

    }
}
