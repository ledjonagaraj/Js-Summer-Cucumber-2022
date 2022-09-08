Feature: Search

    Scenario: Verify user can get information from hotels.com
     Given I am on hotels.com
     When I Click on Learn about Hotels.com Rewards
     And I Verify Hotels Rewards opened in a new window
     And I Click on Join Now
     And I Verify Form is blank
     Then I Verify Continue button is NOT enabled