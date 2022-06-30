1. Create a field on Account named "Number of Contacts". Populate this field with the number of contacts related to an account. 


Created a field - Number of Contacts in Account object : objects/Accounts/fields/Number_of_Contacts__c.field-meta

Trigger on Contact : classes/ContactTrigger.apxt
Handler Class : classes/ContactTriggerHandler.apxc

 2. Build a basic lightning component that can query a list of 10 most recently created accounts and display it using a lightning app. 

 Aura Component : aura/AccountRecords
 Application : applications/aura/AccountRecordsApp/AccountRecordsApp.app
 Apex Class : classes/AccountGetRecords.cls

 3. Make a basic http callout and print the result using system.debug

https://postman-echo.com/get?foo1=bar1&foo2=bar2


