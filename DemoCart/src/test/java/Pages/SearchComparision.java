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


public class SearchComparision {

	WebDriver driver;
	By searchbar = By.name("search");
	By searchbutton = By.xpath("//*[@id='search']/span/button");
	By product1 = By.xpath("//div[@id='content']//div[1]//div[1]//div[2]//div[2]//button[3]//i[1]");
	By product2 = By.xpath("//div[@id='product-search']//div[2]//div[1]//div[2]//div[2]//button[3]//i[1]");
	By totalComparision = By.id("compare-total");

	public void launchApplication(String URL) {
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(URL);
	}

	public void searchItem(String searchitem) {
		driver.findElement(searchbar).sendKeys(searchitem);
	}

	public void clickOnSearch() {
		driver.findElement(searchbutton).click();
	}

	public void addToCompare() {
		driver.findElement(product1).click();
		driver.findElement(product2).click();
	}

	public void totalComparison() {
		driver.findElement(totalComparision).click();
	}

	public void Screenshot(String path) throws IOException{
		TakesScreenshot ts =((TakesScreenshot)driver);
		File source = ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(source,new File(path));
	}
	public void scroll() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,300)");
	}
	public void quit() {
		driver.close();
	}
	
}
