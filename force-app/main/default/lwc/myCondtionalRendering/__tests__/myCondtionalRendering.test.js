// Importing the createElement function from LWC module to create a new instance of the component
import { createElement } from 'lwc';

// Importing the MyCondtionalRendering component to be tested
import MyCondtionalRendering from 'c/myCondtionalRendering';

// Define the test suite using the describe function

describe('c-my-condtional-rendering suite',()=> {
   
    // Define a beforeEach hook to execute before each test case
    beforeEach(()=>{

        // Create a new instance of the component and attach it to the DOM
        const element=createElement('c-my-condtional-rendering',{
            is:MyCondtionalRendering
        })
        document.body.appendChild(element)
    })

    // Define the first test case
    it("Don't show the Password", ()=>{

        // Get the component instance
        const element=document.querySelector('c-my-condtional-rendering')

        // Get the element that displays the password
        const passwordElement=element.shadowRoot.querySelector('.userInfo')

        // Expect the text content of the password element to be masked
        expect(passwordElement.textContent).toBe('My Password is *********')
    });

    // Define the second test case
    it("Show user Password when checkbox is checked", async ()=>{

        // Get the component instance
        const element=document.querySelector('c-my-condtional-rendering')

        // Get the checkbox element and set it to checked
        const inputElement=element.shadowRoot.querySelector('lightning-input');
        inputElement.checked=true

        // Dispatch a change event to simulate user interaction
        inputElement.dispatchEvent(new CustomEvent('change'))

         // Wait for the event loop to complete before executing the next step
        return Promise.resolve().then(()=>{

        // Get the element that displays the password   
        const passwordElement = element.shadowRoot.querySelector('.userInfo');

        // Expect the text content of the password element to be unmasked
        expect(passwordElement.textContent).toBe('My Password is JayaHeyyy');
    })
    })

    
    
});

// npm run test:unit:watch -t mycondtionalRendering --- Only for this file testing