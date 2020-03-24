package Pages;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SearchFunctionality {
	WebDriver driver;
	By searchbar = By.name("search");
	By searchbutton = By.xpath("//*[@id='search']/span/button");
	By SearchHeader = By.xpath("//*[@id='content']/h1");

	// Method to launch application in Chrome or Firefox
	public void launchApplication(String URL, String browser) {
		if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver.exe");
			driver = new ChromeDriver();
		}

		else if (browser.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", "Drivers/geckodriver.exe");
			driver = new FirefoxDriver();
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(URL);
	}

	// Method to search item in application
	public void searchItem(String searchitem) {
		driver.findElement(searchbar).sendKeys(searchitem);
	}

	// Method to click on search
	public void clickOnSearch() {
		driver.findElement(searchbutton).click();
	}

	// Method to check whether the search results are displayed
	public boolean IsSearchDisplayed() {

		return driver.findElement(SearchHeader).isDisplayed();

	}

	// Method to close browser
	public void quit() {
		driver.close();
	}

}
