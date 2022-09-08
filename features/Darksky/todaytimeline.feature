Feature: Find

Scenario: Verify minTemp and maxTemp in Todays timeline is same
Given I am on darksky
When I scroll down to Today's timeline
And I click on the + button
Then I verify minTemp on and in Today's timeline is same
And I verify maxTemp on and in Today's timeline is same