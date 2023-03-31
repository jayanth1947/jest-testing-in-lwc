import { createElement } from 'lwc';
import LoopAndiIteratorTests from 'c/loopAndiIteratorTests';
// Intializing the values of the aray
const EXPECTED=['Kiran','Ram','Seetha']

// describe th test suite
describe('c-loop-andi-iterator-tests suite', () => {

    // this will run before the test and creates a element
     beforeEach(()=>{
        const element=createElement('c-loop-andi-iterator-tests',{
            is:LoopAndiIteratorTests
        })

        // adding the element to the html body
        document.body.appendChild(element)
     })

     //length checking test case
     test('check user list Length',()=>{

        // This line selects the custom element 'c-loop-andi-iterator-tests' using document.querySelector() method and assigns it to the 'element' constant
        const element=document.querySelector('c-loop-andi-iterator-tests')

        /*This line selects all the list items ('li') under the 'forEachloop' class inside the shadow DOM of the 'c-loop-andi-iterator-tests' custom element. 
        It assigns the resulting NodeList to the 'userDetails' constant. */
        const userDetails=element.shadowRoot.querySelectorAll('.forEachloop>li')

        /*This line uses the Jest expect() function to check whether the length of 'userDetails' is equal to 3 using the toBe() matcher. */
        expect(userDetails.length).toBe(3)
     })

     test('check the user Details suite',()=>{

        /*This line selects the custom element 'c-loop-andi-iterator-tests' using document.querySelector() 
        method and assigns it to the 'element' constant. */
        const element=document.querySelector('c-loop-andi-iterator-tests')

        /*This line selects all the list items ('li') under the 'forEachloop' class inside the shadow DOM of the 'c-loop-andi-iterator-tests' custom element.
         It then converts the resulting NodeList to an array using the Array.from() method and assigns it to the 'userDetails' constant. */
        const userDetails=Array.from(element.shadowRoot.querySelectorAll('.forEachloop>li'))

        /*This line maps over the 'userDetails' array and extracts the text content of each list item using the textContent property. 
        It then assigns the resulting array of user details to the 'userList' constant. */
        const userList=userDetails.map(li=>li.textContent)

        /*This line uses the Jest expect() function to check whether the 'userList' array is equal
         to the 'EXPECTED' array using the toEqual() matcher. */
        expect(userList).toEqual(EXPECTED)
     })

     test('Testing the Iterator Loop',()=>{

        /*This line selects the custom element 'c-loop-andi-iterator-tests' using
         document.querySelector() method and assigns it to the 'element' constant. */
        const element=document.querySelector('c-loop-andi-iterator-tests')

        /*This line selects the first child div element of the first list item under the 'iteratorList' class 
        inside the shadow DOM of the 'c-loop-andi-iterator-tests' custom element. It assigns the resulting element
         to the 'firstDiv' constant. */
        const firstDiv=element.shadowRoot.querySelector('.iteratorList>li:first-child>div:first-child')

        /*This line uses the Jest expect() function to check whether the text content of the 
        'firstDiv' element is equal to the string 'Start of the list' using the toBe() matcher. */
        expect(firstDiv.textContent).toBe('Start of the list')

        /*This line selects the last child div element of the last list item under the 'iteratorList' class 
        inside the shadow DOM of the 'c-loop-andi-iterator-tests' custom element. It assigns the resulting element
         to the 'lastDiv' constant. */
        const lastDiv=element.shadowRoot.querySelector('.iteratorList>li:last-child>div:last-child')

        /*This line uses the Jest expect() function to check whether the text content of the 'lastDiv' element
         is equal to the string 'End of the list' using the toBe() matcher. */
        expect(lastDiv.textContent).toBe('End of the list')
     })

      

});