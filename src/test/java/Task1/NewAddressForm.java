package Task1;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NewAddressForm {
    private static WebDriver driver;

    @FindBy(name = "alias")
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

    public NewAddressForm(WebDriver driver) {
        NewAddressForm.driver = driver;
        PageFactory.initElements(NewAddressForm.driver, this);
    }
public void formFill(String alias, String address, String city, String postcode, String country, String phone){
        aliasInput.clear();
        aliasInput.sendKeys(alias);
        addressFormInput.clear();
        addressFormInput.sendKeys(address);
        cityInput.clear();
        cityInput.sendKeys(city);
        postcodeInput.clear();
        postcodeInput.sendKeys(postcode);
        countryId.clear();
        countryId.sendKeys(country);
        phoneInput.clear();
        phoneInput.sendKeys(phone);
}
}
