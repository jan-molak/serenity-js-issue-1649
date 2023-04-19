Feature: Theme-2-Capability-2-Feature-2

  Background:
    Given the current time is "2023-03-30T10:00:00.123"

  Scenario: I test Theme-2-Capability-2-Feature-2 scenario 1
    Given I log into the site
    When I purchase a product
    Then I receive an order tracking number
