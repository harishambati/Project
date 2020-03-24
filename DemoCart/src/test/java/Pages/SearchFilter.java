package Pages;


import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class SearchFilter {

	protected WebDriver driver;
	By searchbar = By.name("search");
	By searchbutton = By.xpath("//*[@id='search']/span/button");
	By filterbutton1 = By.id("input-sort");
	String filter="Rating (Highest)";
	

	public void openBrowserAndApplication(String URL) {
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(URL);
	}
	
	public void searchItem(String searchitem) {
		driver.findElement(searchbar).sendKeys(searchitem);
	}


	public void clickOnSearchAndFilter() {
		driver.findElement(searchbutton).click();
		WebElement filterbutton = driver.findElement(By.id("input-sort"));
		driver.findElement(filterbutton1).click();
		Select select = new Select(filterbutton);
		select.selectByVisibleText("Rating (Highest)");
	}

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
	public void quit() {
		driver.close();
	}
}


