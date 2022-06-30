({
	fetchAccountRecords : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'ACCOUNT NAME', fieldName: 'Name', type: 'text'},
            {label: 'ACCOUNT NUMBER', fieldName: 'AccountNumber', type: 'text'},
            {label: 'BILLING ADDRESS', fieldName: 'BillingAddress', type: 'text'},
            {label: 'INDUSTRY', fieldName: 'Industry', type: 'text'},
        ]);    
        var action = component.get("c.getRecentAccountRecords");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state=="SUCCESS"){
             	component.set("v.data", response.getReturnValue());
            }
            
            else{
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "message": "Accounts are not Fetched",
                    "type": "error"
                });
                toastEvent.fire();
            }
            
        });
        
        $A. enqueueAction(action);
    }
})