package Pages;

import java.util.List;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import excelutility.SearchFunctExcel;

public class SearchToExcel {
	WebDriver driver;
	By searchbar = By.name("search");
	By searchbutton = By.xpath("//*[@id='search']/span/button");
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
	
	public void getResults() {
		List<WebElement> results = driver.findElements(By.xpath("//div[@class='caption']//h4/a"));
		for(int i=0;i<results.size();i++) {
			String data=results.get(i).getText();
			SearchFunctExcel utility = new SearchFunctExcel();
			utility.write_excel(i, 0,data );
		}
	}
	public void quit() {
		driver.close();
	}

}
