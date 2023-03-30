import { LightningElement, track } from 'lwc';

export default class MyCondtionalRendering extends LightningElement {

    @track isinVisible=false;

    changeHandler(event){
        this.isinVisible=event.target.checked;
    }
}