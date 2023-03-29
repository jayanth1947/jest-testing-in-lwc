import { api, LightningElement, track } from "lwc";
export default class HelloWorld extends LightningElement {
  @api name="Jayanth"; //In the name we can give any name
  @track greeting = "World";
  title="jaayanth";
  changeHandler(event) {
    this.greeting = event.target.value;
    
  }
  handleClick(){
    // disable no console
    console.log("jayanth good boy");
    this.name='kumar';
    this.title='bold';
  }
}