import { LightningElement, track } from 'lwc';

export default class My_first_lwc extends LightningElement {
    // Data Binding
    name="jayanth"
    age=20
    changeHandler(event){
        this.age=event.target.value // Here we are changing the value inside this method
    }
    // Track decorator
    @track address={
        state:"Andhra Pradesh",
        district:"Kadapa",
        pincode:"516002"
    }
    changeDistrict(event){
        this.address.district=event.target.value
    }
    // Getter method
    users=["jayanth","john","lilly"]
    get getUser(){
        return this.users[1]
    }
    num1=45; num2=20
    get getSum(){
        return this.num1+this.num2
    }

}