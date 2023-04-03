import { LightningElement } from 'lwc';
import getAccountRecords from '@salesforce/apex/accountController.getAccountRecords';
export default class ApexMethodTesting extends LightningElement {
    accounts
    error

    loadAccounts(){
        getAccountRecords().then(result=>{
            this.accounts=result
            this.error=null
            console.log(JSON.stringify(this.accounts));
        }).catch(error=>{
            this.error=error
            this.accounts=null
        })
    }
}