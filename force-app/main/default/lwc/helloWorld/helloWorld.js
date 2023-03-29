import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    //when we want access the inside the data, we use 'this'
    //binding happens in the below line
    this.greeting = event.target.value;
  }
}