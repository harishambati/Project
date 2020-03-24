package Pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SearchComparision {

	WebDriver driver;
	By searchbar = By.name("search");
	By searchbutton = By.xpath("//*[@id='search']/span/button");
	By product1 = By.xpath("//div[@id='content']//div[1]//div[1]//div[2]//div[2]//button[3]//i[1]");
	By product2 = By.xpath("//div[@id='product-search']//div[2]//div[1]//div[2]//div[2]//button[3]//i[1]");
	By totalComparision = By.id("compare-total");

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

	// Method to click on Search and Get Results
	public void clickOnSearch() {
		driver.findElement(searchbutton).click();
	}

	// Method to add products to compare
	public void addToCompare() {
		driver.findElement(product1).click();
		driver.findElement(product2).click();
	}

	// Method to see compared products
	public void totalComparison() {
		driver.findElement(totalComparision).click();
	}

	// Method to get screenshot
	public void Screenshot(String path) throws IOException {
		TakesScreenshot ts = ((TakesScreenshot) driver);
		File source = ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(source, new File(path));
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
