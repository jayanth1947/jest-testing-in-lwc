public with sharing class contactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [select Name from Contact limit 5];
    }
}