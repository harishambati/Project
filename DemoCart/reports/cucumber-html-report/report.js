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
formatter.scenarioOutline({
  "line": 5,
  "name": "Search Functionality",
  "description": "",
  "id": "open-cart-search-feature;search-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
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
  "name": "the user searches for the \"\u003cproduct\u003e\"",
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
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "open-cart-search-feature;search-functionality;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 13,
      "id": "open-cart-search-feature;search-functionality;;1"
    },
    {
      "cells": [
        "mac"
      ],
      "line": 14,
      "id": "open-cart-search-feature;search-functionality;;2"
    },
    {
      "cells": [
        "1233556"
      ],
      "line": 15,
      "id": "open-cart-search-feature;search-functionality;;3"
    },
    {
      "cells": [
        "!@#$%^"
      ],
      "line": 16,
      "id": "open-cart-search-feature;search-functionality;;4"
    },
    {
      "cells": [
        "ma12@#$"
      ],
      "line": 17,
      "id": "open-cart-search-feature;search-functionality;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Search Functionality",
  "description": "",
  "id": "open-cart-search-feature;search-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc_01"
    },
    {
      "line": 1,
      "name": "@democart_Feature"
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
  "name": "the user searches for the \"mac\"",
  "matchedColumns": [
    0
  ],
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
  "duration": 12220830900,
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
  "duration": 82413400,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.clicks_on_Search_button()"
});
formatter.result({
  "duration": 2096729700,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_should_see_search_results()"
});
formatter.result({
  "duration": 123022900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search Functionality",
  "description": "",
  "id": "open-cart-search-feature;search-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc_01"
    },
    {
      "line": 1,
      "name": "@democart_Feature"
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
  "name": "the user searches for the \"1233556\"",
  "matchedColumns": [
    0
  ],
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
  "duration": 11665568400,
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
  "duration": 109220400,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.clicks_on_Search_button()"
});
formatter.result({
  "duration": 1605405400,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_should_see_search_results()"
});
formatter.result({
  "duration": 127120300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search Functionality",
  "description": "",
  "id": "open-cart-search-feature;search-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc_01"
    },
    {
      "line": 1,
      "name": "@democart_Feature"
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
  "name": "the user searches for the \"!@#$%^\"",
  "matchedColumns": [
    0
  ],
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
  "duration": 12251349300,
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
  "duration": 90892400,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.clicks_on_Search_button()"
});
formatter.result({
  "duration": 1741537700,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_should_see_search_results()"
});
formatter.result({
  "duration": 106761700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search Functionality",
  "description": "",
  "id": "open-cart-search-feature;search-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc_01"
    },
    {
      "line": 1,
      "name": "@democart_Feature"
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
  "name": "the user searches for the \"ma12@#$\"",
  "matchedColumns": [
    0
  ],
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
  "duration": 11411235800,
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
  "duration": 98434100,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.clicks_on_Search_button()"
});
formatter.result({
  "duration": 1560744100,
  "status": "passed"
});
formatter.match({
  "location": "SearchFunctionalitySD.the_user_should_see_search_results()"
});
formatter.result({
  "duration": 121995400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Filter",
  "description": "",
  "id": "open-cart-search-feature;filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@tc_02"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "the user launches the chrome browser \u0026 opens application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "the user searches for the product\u0027s",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Clicks on Search button, selects the sort by filter",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the user should see modified results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchFilterSD.the_user_launches_the_chrome_browser_opens_application()"
});
formatter.result({
  "duration": 11192147600,
  "status": "passed"
});
formatter.match({
  "location": "SearchFilterSD.the_user_searches_the_his_product()"
});
formatter.result({
  "duration": 94929400,
  "status": "passed"
});
formatter.match({
  "location": "SearchFilterSD.clicks_on_Search_button_Selects_the_the_sort_by_filter()"
});
formatter.result({
  "duration": 3323991000,
  "status": "passed"
});
formatter.match({
  "location": "SearchFilterSD.the_user_should_see_modified_results()"
});
formatter.result({
  "duration": 239102100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Products to Excel",
  "description": "",
  "id": "open-cart-search-feature;products-to-excel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@tc_03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "the user launches the opens chrome and Application",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the user searches for products",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Clicks on Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user should see results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchToExcelSD.the_user_launches_the_opens_chrome_and_Application()"
});
formatter.result({
  "duration": 11270799200,
  "status": "passed"
});
formatter.match({
  "location": "SearchToExcelSD.the_user_searches_for_products()"
});
formatter.result({
  "duration": 78208700,
  "status": "passed"
});
formatter.match({
  "location": "SearchToExcelSD.clicks_on_Search_Button()"
});
formatter.result({
  "duration": 2074545600,
  "status": "passed"
});
formatter.match({
  "location": "SearchToExcelSD.user_should_see_results()"
});
formatter.result({
  "duration": 1007822300,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Comparision Screenshot",
  "description": "",
  "id": "open-cart-search-feature;comparision-screenshot",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@tc_04"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "the user launches the opens chrome \u0026 Application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the user searches for products on Application",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Compares two products",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "the user should see results",
  "keyword": "And "
});
formatter.match({
  "location": "SearchComparisionSD.the_user_launches_the_opens_chrome_Application()"
});
formatter.result({
  "duration": 11463033100,
  "status": "passed"
});
formatter.match({
  "location": "SearchComparisionSD.the_user_searches_for_products_on_Application()"
});
formatter.result({
  "duration": 96643900,
  "status": "passed"
});
formatter.match({
  "location": "SearchComparisionSD.clicks_on_search_button()"
});
formatter.result({
  "duration": 1551346300,
  "status": "passed"
});
formatter.match({
  "location": "SearchComparisionSD.compares_two_products()"
});
formatter.result({
  "duration": 215776400,
  "status": "passed"
});
formatter.match({
  "location": "SearchComparisionSD.the_user_should_see_results()"
});
formatter.result({
  "duration": 2045049400,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "List View",
  "description": "",
  "id": "open-cart-search-feature;list-view",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@tc_05"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "the user launches the opens chrome \u0026 application",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "the user searches for products on application",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Clicks on search button and click on List View",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Results should be viewed in List View",
  "keyword": "Then "
});
formatter.match({
  "location": "ListViewSD.the_user_launches_the_opens_chrome_application()"
});
formatter.result({
  "duration": 11223507700,
  "status": "passed"
});
formatter.match({
  "location": "ListViewSD.the_user_searches_for_products_on_application()"
});
formatter.result({
  "duration": 91435300,
  "status": "passed"
});
formatter.match({
  "location": "ListViewSD.clicks_on_search_button_and_click_on_List_View()"
});
formatter.result({
  "duration": 1622797700,
  "status": "passed"
});
formatter.match({
  "location": "ListViewSD.results_should_be_viewed_in_List_View()"
});
formatter.result({
  "duration": 2225030200,
  "status": "passed"
});
});