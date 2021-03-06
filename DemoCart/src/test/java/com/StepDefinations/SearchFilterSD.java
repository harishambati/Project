package com.StepDefinations;


import org.junit.Assert;
import Pages.SearchFilter;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchFilterSD {
	//Creating objective of SearchFilter class
	SearchFilter scfilter = new SearchFilter();
	// Method to launch application in Chrome or Firefox
	@Given("^the user launches the chrome browser & opens application$")
	public void the_user_launches_the_chrome_browser_opens_application() throws Throwable {
		scfilter.openBrowserAndApplication("https://demo.opencart.com/", "chrome");
	    
	}
	// Method to search product in application
	@When("^the user searches for the product's$")
	public void the_user_searches_the_his_product() throws Throwable {
	scfilter.searchItem("macbook");
	  
	}
	// Method to click on search and filter results
	@When("^Clicks on Search button, selects the sort by filter$")
	public void clicks_on_Search_button_Selects_the_the_sort_by_filter() throws Throwable {
	scfilter.clickOnSearchAndFilter();
	    
	}
	// Method to check whether selected filter is applied
	@Then("^the user should see modified results$")
	public void the_user_should_see_modified_results() throws Throwable {
		Assert.assertTrue(scfilter.validateFilter());
		scfilter.quit();
	 }



}
