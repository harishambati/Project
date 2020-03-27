$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Features/TestCase.feature");
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
  "name": "Valid Login",
  "description": "",
  "id": "open-cart-search-feature;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc01_Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the application opens in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user gives valid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSD.the_application_opens_in_browser()"
});
formatter.result({
  "duration": 10675673000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.the_user_clicks_on_Login()"
});
formatter.result({
  "duration": 2924035100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.the_user_gives_valid_credentials()"
});
formatter.result({
  "duration": 41836735900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Search Functionality",
  "description": "",
  "id": "open-cart-search-feature;search-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@tc_02"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the chrome browser and opens application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user searches for the \"\u003cproduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user should see search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "open-cart-search-feature;search-functionality;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 19,
      "id": "open-cart-search-feature;search-functionality;;1"
    },
    {
      "cells": [
        "mac"
      ],
      "line": 20,
      "id": "open-cart-search-feature;search-functionality;;2"
    },
    {
      "cells": [
        "1233556"
      ],
      "line": 21,
      "id": "open-cart-search-feature;search-functionality;;3"
    },
    {
      "cells": [
        "!@#$%^"
      ],
      "line": 22,
      "id": "open-cart-search-feature;search-functionality;;4"
    },
    {
      "cells": [
        "ma12@#$"
      ],
      "line": 23,
      "id": "open-cart-search-feature;search-functionality;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Search Functionality",
  "description": "",
  "id": "open-cart-search-feature;search-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@tc_02"
    },
    {
      "line": 1,
      "name": "@democart_Feature"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the chrome browser and opens application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user searches for the \"mac\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user should see search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_launches_the_chrome_browser_and_opens_application()"
});
formatter.result({
  "duration": 11353569700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mac",
      "offset": 27
    }
  ],
  "location": "SearchFunctionalitySD.the_user_searches_for_the(String)"
});
formatter.result({
  "duration": 80188200,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.clicks_on_Search_button()"
});
formatter.result({
  "duration": 2103130000,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_should_see_search_results()"
});
formatter.result({
  "duration": 108791200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search Functionality",
  "description": "",
  "id": "open-cart-search-feature;search-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@tc_02"
    },
    {
      "line": 1,
      "name": "@democart_Feature"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the chrome browser and opens application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user searches for the \"1233556\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user should see search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_launches_the_chrome_browser_and_opens_application()"
});
formatter.result({
  "duration": 12927422100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1233556",
      "offset": 27
    }
  ],
  "location": "SearchFunctionalitySD.the_user_searches_for_the(String)"
});
formatter.result({
  "duration": 104372200,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.clicks_on_Search_button()"
});
formatter.result({
  "duration": 1572258800,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_should_see_search_results()"
});
formatter.result({
  "duration": 117699800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search Functionality",
  "description": "",
  "id": "open-cart-search-feature;search-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@tc_02"
    },
    {
      "line": 1,
      "name": "@democart_Feature"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the chrome browser and opens application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user searches for the \"!@#$%^\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user should see search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_launches_the_chrome_browser_and_opens_application()"
});
formatter.result({
  "duration": 11817303200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "!@#$%^",
      "offset": 27
    }
  ],
  "location": "SearchFunctionalitySD.the_user_searches_for_the(String)"
});
formatter.result({
  "duration": 134536500,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.clicks_on_Search_button()"
});
formatter.result({
  "duration": 1517830100,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_should_see_search_results()"
});
formatter.result({
  "duration": 120595000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search Functionality",
  "description": "",
  "id": "open-cart-search-feature;search-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@tc_02"
    },
    {
      "line": 1,
      "name": "@democart_Feature"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the user launches the chrome browser and opens application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user searches for the \"ma12@#$\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user should see search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_launches_the_chrome_browser_and_opens_application()"
});
formatter.result({
  "duration": 11507797200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ma12@#$",
      "offset": 27
    }
  ],
  "location": "SearchFunctionalitySD.the_user_searches_for_the(String)"
});
formatter.result({
  "duration": 98710500,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.clicks_on_Search_button()"
});
formatter.result({
  "duration": 1518357100,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_should_see_search_results()"
});
formatter.result({
  "duration": 122955800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Filter",
  "description": "",
  "id": "open-cart-search-feature;filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@tc_03"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "the user launches the chrome browser \u0026 opens application",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the user searches for the product\u0027s",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Clicks on Search button, selects the sort by filter",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user should see modified results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFilterSD.the_user_launches_the_chrome_browser_opens_application()"
});
formatter.result({
  "duration": 11275107200,
  "status": "passed"
});
formatter.match({
  "location": "SearchFilterSD.the_user_searches_the_his_product()"
});
formatter.result({
  "duration": 103374900,
  "status": "passed"
});
formatter.match({
  "location": "SearchFilterSD.clicks_on_Search_button_Selects_the_the_sort_by_filter()"
});
formatter.result({
  "duration": 3432395000,
  "status": "passed"
});
formatter.match({
  "location": "SearchFilterSD.the_user_should_see_modified_results()"
});
formatter.result({
  "duration": 237059300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Products to Excel",
  "description": "",
  "id": "open-cart-search-feature;products-to-excel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@tc_04"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "the user launches the opens chrome and Application",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "the user searches for products",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Clicks on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user should see results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchToExcelSD.the_user_launches_the_opens_chrome_and_Application()"
});
formatter.result({
  "duration": 11971676700,
  "status": "passed"
});
formatter.match({
  "location": "SearchToExcelSD.the_user_searches_for_products()"
});
formatter.result({
  "duration": 114112500,
  "status": "passed"
});
formatter.match({
  "location": "SearchToExcelSD.clicks_on_Search_Button()"
});
formatter.result({
  "duration": 2654824800,
  "status": "passed"
});
formatter.match({
  "location": "SearchToExcelSD.user_should_see_results()"
});
formatter.result({
  "duration": 457227700,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Comparision Screenshot",
  "description": "",
  "id": "open-cart-search-feature;comparision-screenshot",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@tc_05"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "the user launches the opens chrome \u0026 Application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "the user searches for products on Application",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Compares two products",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "the user should see results",
  "keyword": "And "
});
formatter.match({
  "location": "SearchComparisionSD.the_user_launches_the_opens_chrome_Application()"
});
formatter.result({
  "duration": 11661981600,
  "status": "passed"
});
formatter.match({
  "location": "SearchComparisionSD.the_user_searches_for_products_on_Application()"
});
formatter.result({
  "duration": 135921600,
  "status": "passed"
});
formatter.match({
  "location": "SearchComparisionSD.clicks_on_search_button()"
});
formatter.result({
  "duration": 1550842000,
  "status": "passed"
});
formatter.match({
  "location": "SearchComparisionSD.compares_two_products()"
});
formatter.result({
  "duration": 231629400,
  "status": "passed"
});
formatter.match({
  "location": "SearchComparisionSD.the_user_should_see_results()"
});
formatter.result({
  "duration": 1972810200,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "List View",
  "description": "",
  "id": "open-cart-search-feature;list-view",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@tc_06"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "the user launches the opens chrome \u0026 application",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "the user searches for products on application",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Clicks on search button and click on List View",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Results should be viewed in List View",
  "keyword": "Then "
});
formatter.match({
  "location": "ListViewSD.the_user_launches_the_opens_chrome_application()"
});
formatter.result({
  "duration": 11685864300,
  "status": "passed"
});
formatter.match({
  "location": "ListViewSD.the_user_searches_for_products_on_application()"
});
formatter.result({
  "duration": 116740400,
  "status": "passed"
});
formatter.match({
  "location": "ListViewSD.clicks_on_search_button_and_click_on_List_View()"
});
formatter.result({
  "duration": 1571776900,
  "status": "passed"
});
formatter.match({
  "location": "ListViewSD.results_should_be_viewed_in_List_View()"
});
formatter.result({
  "duration": 2243242400,
  "status": "passed"
});
});