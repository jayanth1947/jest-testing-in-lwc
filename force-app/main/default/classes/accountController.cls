public with sharing class accountController {
    //This annonation will help you to invoke the class inside the lwc
    @AuraEnabled(cacheable=true)

    //To invoke class in lwc we must use public or global ad it should be static method 
    public static List<Account> getAccountList() {
        return [SELECT ID,NAME,INDUSTRY,TYPE FROM ACCOUNT LIMIT 5];
    }

      
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountType(String type) {
        return [SELECT ID,NAME,INDUSTRY,TYPE FROM ACCOUNT WHERE TYPE=:type LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccount(String searchKey) {
        String key='%'+searchKey+'%';
        return [SELECT ID,NAME,INDUSTRY,TYPE FROM ACCOUNT WHERE NAME LIKE :key LIMIT 5];
    }

    @AuraEnabled
    public static List<Account> getAccountRecords() {
        return [SELECT ID,NAME,INDUSTRY,AnnualRevenue FROM ACCOUNT WHERE AnnualRevenue!=null  LIMIT 5];
    }


}