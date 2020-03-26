package Pages;

import java.util.List;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import excelutility.SearchFunctExcel;

public class SearchToExcel {
	WebDriver driver;
	//Locators
	By searchbar = By.name("search");
	By searchbutton = By.xpath("//*[@id='search']/span/button");

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

	// Method to get all search results into list
	public void getResults() {
		List<WebElement> results = driver.findElements(By.xpath("//div[@class='caption']//h4/a"));
		for (int i = 0; i < results.size(); i++) {
			String data = results.get(i).getText();
			SearchFunctExcel utility = new SearchFunctExcel();
			utility.write_excel(i, 0, data);
		}
	}

	// Method to scroll down in application
	public void scroll() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,300)");
	}

	// Method to close browser
	public void quit() {
		driver.close();
	}

}
