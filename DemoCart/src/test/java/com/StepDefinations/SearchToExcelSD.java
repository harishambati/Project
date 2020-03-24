package com.StepDefinations;

import Pages.SearchToExcel;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchToExcelSD {
	 SearchToExcel stxl = new SearchToExcel();
	@Given("^the user launches the opens chrome and Application$")
	public void the_user_launches_the_opens_chrome_and_Application() throws Throwable {
	  stxl.launchApplication("https://demo.opencart.com/", "chrome");
	}

	@When("^the user searches for products$")
	public void the_user_searches_for_products() throws Throwable {
	  stxl.searchItem("ma");
	}

	@And("^Clicks on Search Button$")
	public void clicks_on_Search_Button() throws Throwable {
	 stxl.clickOnSearch(); 
	 stxl.scroll();
	}

	@Then("^user should see results$")
	public void user_should_see_results() throws Throwable {
	    stxl.getResults();
	    stxl.quit();
	}


}
