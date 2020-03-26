package com.StepDefinations;

import Pages.SearchFunctionality;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SearchFunctionalitySD {
	//Creating objective of SearchFunctionality class
	SearchFunctionality search = new SearchFunctionality();

	// Method to launch application in Chrome or Firefox
	@Given("^the user launches the chrome browser and opens application$")
	public void the_user_launches_the_chrome_browser_and_opens_application() throws Throwable {
		search.launchApplication("https://demo.opencart.com/", "chrome");

	}
	// Method to search item in application
	@When("^the user searches for the \"([^\"]*)\"$")
	public void the_user_searches_for_the(String arg1) throws Throwable {
		search.searchItem(arg1);
	}
	// Method to click on search
	@And("^Clicks on Search button$")
	public void clicks_on_Search_button() throws Throwable {
		search.clickOnSearch();

	}
	// Method to check whether the search results are displayed
	@Then("^the user should see search results$")
	public void the_user_should_see_search_results() throws Throwable {

		Assert.assertTrue(search.IsSearchDisplayed());
		search.quit();

	}

}
