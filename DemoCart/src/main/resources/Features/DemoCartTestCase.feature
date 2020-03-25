@democart_Feature
Feature: Open cart Search Feature

@tc_01
Scenario Outline: Search Functionality
Given the user launches the chrome browser and opens application
When the user searches for the "<product>"
And Clicks on Search button
Then the user should see search results

Examples:

		|product|
		|mac	|
		|1233556|
		|!@#$%^	|
		|ma12@#$|


@tc_02
Scenario: Filter
Given the user launches the chrome browser & opens application
When the user searches for the product's 
And Clicks on Search button, selects the sort by filter
Then the user should see modified results

@tc_03
Scenario: Products to Excel
Given the user launches the opens chrome and Application
When the user searches for products
And Clicks on Search Button
Then user should see results

@tc_04
Scenario: Comparision Screenshot
Given the user launches the opens chrome & Application
When the user searches for products on Application
And Clicks on search button
Then Compares two products
And the user should see results

@tc_05
Scenario: List View
Given the user launches the opens chrome & application
When the user searches for products on application
And Clicks on search button and click on List View
Then Results should be viewed in List View
