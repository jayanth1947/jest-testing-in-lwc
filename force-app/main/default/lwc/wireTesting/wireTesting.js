import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/contactController.getContacts';
export default class WireTesting extends LightningElement {
    @wire(getContacts)
    contacts

    renderedCallback(){
        if(this.contacts && this.contacts.data){
            console.log(JSON.stringify(this.contacts.data));
        }
        
    }
}