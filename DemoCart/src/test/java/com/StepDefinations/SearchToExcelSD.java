package com.StepDefinations;

import Pages.SearchToExcel;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchToExcelSD {
	//Creating objective of SearchToExcel class
	SearchToExcel stxl = new SearchToExcel();
	 // Method to launch application in Chrome or Firefox
	 @Given("^the user launches the opens chrome and Application$")
	public void the_user_launches_the_opens_chrome_and_Application() throws Throwable {
	  stxl.launchApplication("https://demo.opencart.com/", "chrome");
	}

	// Method to search item in application
	 @When("^the user searches for products$")
	public void the_user_searches_for_products() throws Throwable {
	  stxl.searchItem("ma");
	}
	// Method to click on search
	@And("^Clicks on Search Button$")
	public void clicks_on_Search_Button() throws Throwable {
	 stxl.clickOnSearch(); 
	 stxl.scroll();
	}
	//Method to see results
	@Then("^user should see results$")
	public void user_should_see_results() throws Throwable {
	    stxl.getResults();
	    stxl.quit();
	}


}
