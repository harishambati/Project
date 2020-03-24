package Pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SearchListView {
	WebDriver driver;
	By searchbar = By.name("search");
	By searchbutton = By.xpath("//*[@id='search']/span/button");
	By listview = By.id("list-view");

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

	public void clickOnListView() {
		driver.findElement(listview).click();
	}

	public void scroll() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,300)");
	}

	public void quit() {
		driver.close();
	}
}
