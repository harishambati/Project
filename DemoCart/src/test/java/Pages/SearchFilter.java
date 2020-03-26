package Pages;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class SearchFilter {

	protected WebDriver driver;
	//Locators
	By searchbar = By.name("search");
	By searchbutton = By.xpath("//*[@id='search']/span/button");
	By filterbutton1 = By.id("input-sort");
	String filter = "Rating (Highest)";

	// Method to launch application in Chrome or Firefox
	public void openBrowserAndApplication(String URL, String browser) {
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

	// Method to click on search and filter results
	public void clickOnSearchAndFilter() {
		driver.findElement(searchbutton).click();
		scroll();
		WebElement filterbutton = driver.findElement(By.id("input-sort"));
		driver.findElement(filterbutton1).click();
		Select select = new Select(filterbutton);
		select.selectByVisibleText("Rating (Highest)");
	}

	// Method to check whether selected filter is applied
	public boolean validateFilter() {
		boolean Option = false;
		WebElement filterbutton = driver.findElement(By.id("input-sort"));
		Select select = new Select(filterbutton);
		String selectdfilter = select.getFirstSelectedOption().getText();
		if (filter.equalsIgnoreCase(selectdfilter)) {
			Option = true;
		}
		return Option;
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
