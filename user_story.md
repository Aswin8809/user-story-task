# User Story

As a customer,  
I need to log into my account,  
So that I can access my personal dashboard.

## Acceptance Criteria

Scenario: Successful login  
Given the user is on the login page  
When the user enters valid username and password  
Then the user is redirected to the dashboard  

Scenario: Invalid login  
Given the user is on the login page  
When the user enters incorrect credentials  
Then an error message is displayed  

Scenario: Empty fields  
Given the user is on the login page  
When the user submits empty fields  
Then validation messages are shown  
