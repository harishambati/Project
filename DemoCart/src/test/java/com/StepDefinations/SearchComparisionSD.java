package com.StepDefinations;

import Pages.SearchComparision;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchComparisionSD {
	 SearchComparision sc = new SearchComparision();
	@Given("^the user launches the opens chrome & Application$")
	public void the_user_launches_the_opens_chrome_Application() throws Throwable {
	  sc.launchApplication("https://demo.opencart.com/", "chrome");
	}

	@When("^the user searches for products on Application$")
	public void the_user_searches_for_products_on_Application() throws Throwable {
	   sc.searchItem("macbook");
	}

	@And("^Clicks on search button$")
	public void clicks_on_search_button() throws Throwable {
	   sc.clickOnSearch();
	}

	@Then("^Compares two products$")
	public void compares_two_products() throws Throwable {
	    
		sc.addToCompare();
	}

	@And("^the user should see results$")
	public void the_user_should_see_results() throws Throwable {
	   sc.totalComparison();
	   sc.scroll();
	   sc.Screenshot("Screenshots/1.png");
	   sc.quit();
	}


}
