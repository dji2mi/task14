@all
Feature: Access to other sites

  @selector
  Scenario: I should be able too access UPS Selector
    Given I open "https://www.apc.com/shop/us/en/tools/ups_selector/" url
    Then Page title should be "APC UPS Selector/Calculator - Find the Correct Battery Backup"

  @trade
  Scenario: I should be able to access Trade-UPS
    Given I open "https://www.apc.com/shop/tradeups/us/en/tradeups/overview.jsp" url
    Then Page title should be "Tradeup Home"

  @other 
  Scenario Outline: I should be able to access <>
    Given I open "<URL>" url
    Then Page title should be "<Title>"

  Examples:
  | URL                                                              | Title                                                        |
  | https://www.apc.com/shop/us/en/warranty/product-registration.jsp | Product registration                                         |     
  | https://www.apc.com/shop/us/en/tools/surge-selector/             | APC Surge Protection Selector - Compare our Surge Protectors |