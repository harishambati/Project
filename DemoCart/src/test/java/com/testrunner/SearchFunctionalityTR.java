package com.testrunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/resources/Features/DemoCartTestCase.feature", plugin = { "pretty",
		"html:reports/cucumber-html-report" }, tags = {
				"@tc_01" }, glue = { "com.StepDefinations" }, monochrome = true)
public class SearchFunctionalityTR {

}