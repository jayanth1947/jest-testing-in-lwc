/*This code imports the createElement function from the lwc library and 
  the MY_EVENT_TESTING component from the c/helloWorld_lwc module. 
The createElement function is used to create an instance of the component, and MY_EVENT_TESTING */
import {createElement} from 'lwc'
import MY_EVENT_TESTING from 'c/helloWorld_lwc'

/*The beforeEach function is called before each test in the suite,
  and it creates an instance of the c-helloWorld_lwc component and appends
  it to the document.body. */
describe('hello world testing suite',()=>{

    beforeEach(()=>{
        const element=createElement('c-helloworld_lwc',{
            is:MY_EVENT_TESTING
        })

        document.body.appendChild(element)

    })

    /*These two tests use the test function to define test cases. 
    The first test case checks if the p element inside the component's shadow DOM has the text content of "Hello, World!". 
    The second test case checks if the same p element doesn't have the text content of "Hello, Jayanth!". */
    test('Test the Hello, world!',()=>{

        const element=document.querySelector('c-helloworld_lwc')
        
        const text=element.shadowRoot.querySelector('p')

        expect(text.textContent).toBe('Hello, World!')
    })

    //This is the we can test it negatively
    test('Test the Hello, Jayanth!',()=>{
        
        const element=document.querySelector('c-helloworld_lwc')
        const text=element.shadowRoot.querySelector('p')

        expect(text.textContent).not.toBe('Hello, Jayanth!')
    })


    /*This test case checks if changing the value of the lightning-input element inside the component 
      and dispatching a change event will update the p element's text content to "Hello, Salesforce!". 
      The return Promise.resolve().then(...) is used to wait for the next microtask before executing the expect statement. 
      This ensures that the component has finished rendering with the updated text content before making the assertion. */
    test('test the input change',()=>{
        //element get into the test
        const element=document.querySelector('c-helloworld_lwc')

        // Input tag is intialized
        const inputElement=element.shadowRoot.querySelector('lightning-input')

        // changing the default value to salesforce
        inputElement.value='Salesforce'

        // Creating a new event with the help of dispatch event
        inputElement.dispatchEvent(new CustomEvent('change'))

        // Intializing the p tag to the text
        const text=element.shadowRoot.querySelector('p');

        // It will return promise call because this is asynchronous operation
        return Promise.resolve().then(()=>{

            // used for the same string at the user input
            expect(text.textContent).toBe('Hello, Salesforce!')
        })
    })
})