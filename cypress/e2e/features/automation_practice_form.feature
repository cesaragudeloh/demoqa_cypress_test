Feature: DemoQA Practice Form
  Scenario: Fill and submit the practice form
    Given I have practice form data
    When I complete the practice form
    Then I should see the confirmation modal

  Scenario: Validate required fields when submitting empty form
    Given I open the practice form
    When I submit the form without required fields
    Then I should see required field validation
