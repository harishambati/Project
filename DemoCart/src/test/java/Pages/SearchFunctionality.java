package Pages;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SearchFunctionality {
	WebDriver driver;
	By searchbar = By.name("search");
	By searchbutton = By.xpath("//*[@id='search']/span/button");
	By SearchHeader = By.xpath("//*[@id='content']/h1");

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

	public boolean IsSearchDisplayed() {
		
		return driver.findElement(SearchHeader).isDisplayed();
		
	}
	public void launchDemo() {
		driver.get("www.demo.opencart.com");
	}
	public void quit() {
		driver.close();
	}

}
