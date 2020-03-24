$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Features/DemoCartTestCase.feature");
formatter.feature({
  "line": 2,
  "name": "Open cart Search Feature",
  "description": "",
  "id": "open-cart-search-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@democart_Feature"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Search Functionality",
  "description": "",
  "id": "open-cart-search-feature;search-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc_01"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launches the chrome browser and opens application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user searches for the product",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the user should see search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_launches_the_chrome_browser_and_opens_application()"
});
formatter.result({
  "duration": 12575020700,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_searches_for_the_product()"
});
formatter.result({
  "duration": 113340500,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.clicks_on_Search_button()"
});
formatter.result({
  "duration": 1521005700,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_should_see_search_results()"
});
formatter.result({
  "duration": 138335700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Filter",
  "description": "",
  "id": "open-cart-search-feature;filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@tc_02"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "the user launches the chrome browser \u0026 opens application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user searches for the product\u0027s",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Clicks on Search button, selects the sort by filter",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user should see modified results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFilterSD.the_user_launches_the_chrome_browser_opens_application()"
});
formatter.result({
  "duration": 11302035900,
  "status": "passed"
});
formatter.match({
  "location": "SearchFilterSD.the_user_searches_the_his_product()"
});
formatter.result({
  "duration": 104557100,
  "status": "passed"
});
formatter.match({
  "location": "SearchFilterSD.clicks_on_Search_button_Selects_the_the_sort_by_filter()"
});
formatter.result({
  "duration": 3354600000,
  "status": "passed"
});
formatter.match({
  "location": "SearchFilterSD.the_user_should_see_modified_results()"
});
formatter.result({
  "duration": 189984300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Products to Excel",
  "description": "",
  "id": "open-cart-search-feature;products-to-excel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@tc_03"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "the user launches the opens chrome and Application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the user searches for products",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Clicks on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user should see results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchToExcelSD.the_user_launches_the_opens_chrome_and_Application()"
});
formatter.result({
  "duration": 13214312900,
  "status": "passed"
});
formatter.match({
  "location": "SearchToExcelSD.the_user_searches_for_products()"
});
formatter.result({
  "duration": 77835000,
  "status": "passed"
});
formatter.match({
  "location": "SearchToExcelSD.clicks_on_Search_Button()"
});
formatter.result({
  "duration": 1915720400,
  "status": "passed"
});
formatter.match({
  "location": "SearchToExcelSD.user_should_see_results()"
});
formatter.result({
  "duration": 1069851500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Comparision Screenshot",
  "description": "",
  "id": "open-cart-search-feature;comparision-screenshot",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@tc_04"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "the user launches the opens chrome \u0026 Application",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the user searches for products on Application",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Compares two products",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "the user should see results",
  "keyword": "And "
});
formatter.match({
  "location": "SearchComparisionSD.the_user_launches_the_opens_chrome_Application()"
});
formatter.result({
  "duration": 11541085500,
  "status": "passed"
});
formatter.match({
  "location": "SearchComparisionSD.the_user_searches_for_products_on_Application()"
});
formatter.result({
  "duration": 83952300,
  "status": "passed"
});
formatter.match({
  "location": "SearchComparisionSD.clicks_on_search_button()"
});
formatter.result({
  "duration": 1859190300,
  "status": "passed"
});
formatter.match({
  "location": "SearchComparisionSD.compares_two_products()"
});
formatter.result({
  "duration": 154703300,
  "status": "passed"
});
formatter.match({
  "location": "SearchComparisionSD.the_user_should_see_results()"
});
formatter.result({
  "duration": 1939035300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "List View",
  "description": "",
  "id": "open-cart-search-feature;list-view",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@tc_05"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "the user launches the opens chrome \u0026 application",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "the user searches for products on application",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Clicks on search button and click on List View",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Results should be viewed in List View",
  "keyword": "Then "
});
formatter.match({
  "location": "ListViewSD.the_user_launches_the_opens_chrome_application()"
});
formatter.result({
  "duration": 11686096600,
  "status": "passed"
});
formatter.match({
  "location": "ListViewSD.the_user_searches_for_products_on_application()"
});
formatter.result({
  "duration": 104641600,
  "status": "passed"
});
formatter.match({
  "location": "ListViewSD.clicks_on_search_button_and_click_on_List_View()"
});
formatter.result({
  "duration": 1985441400,
  "status": "passed"
});
formatter.match({
  "location": "ListViewSD.results_should_be_viewed_in_List_View()"
});
formatter.result({
  "duration": 2268077300,
  "status": "passed"
});
});