package com.StepDefinations;

import Pages.SearchListView;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ListViewSD {
	 SearchListView slv = new SearchListView();
	 //Method to launch application in browser
	 @Given("^the user launches the opens chrome & application$")
	public void the_user_launches_the_opens_chrome_application() throws Throwable {
	  slv.launchApplication("https://demo.opencart.com/", "chrome");
	   
	}
	 //Method to search for product
	@When("^the user searches for products on application$")
	public void the_user_searches_for_products_on_application() throws Throwable {
		slv.searchItem("macbook");
	   
	}
	//Method to click on search
	@And("^Clicks on search button and click on List View$")
	public void clicks_on_search_button_and_click_on_List_View() throws Throwable {
	  slv.clickOnSearch();
	  slv.scroll();
	  
	   
	}
	//Method to click on ListView
	@Then("^Results should be viewed in List View$")
	public void results_should_be_viewed_in_List_View() throws Throwable {
		slv.clickOnListView();
	   Thread.sleep(2000);
		slv.quit();
	}


}
