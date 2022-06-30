public class AccountGetRecords {
	@AuraEnabled
    public static List<Account> getRecentAccountRecords() {
        List<Account> accRecs = new List<Account>();
       	accRecs = [SELECT Id, Name, AccountNumber, BillingState, Industry FROM Account ORDER BY CreatedDate DESC LIMIT 10];
        return accRecs;
    }
}