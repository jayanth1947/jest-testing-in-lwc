// Importing the `createElement` function from the `lwc` library
import { createElement } from 'lwc'
// Importing the `HELLO_WORLD` component from the `c/helloWorld` module
import HELLO_WORLD from 'c/helloWorld'

// Creating a test suite using the `describe` function
describe('c-hello-world test suite',()=>{

     // Creating a test using the `test` function
    test('dispaly the greeting',()=>{

        // Creating an instance of the `HELLO_WORLD` component using the `createElement` function
        const element=createElement('c-hello-world',{
            is:HELLO_WORLD
        })

        // Adding the component to the `body` of the `document`
        document.body.appendChild(element)

        // Selecting the first `div` element in the component's shadow tree and checking its text content
        const firstDiv=element.shadowRoot.querySelector('div.first')

        // Assert that the first div's text content is "Hello, World!"
        expect(firstDiv.textContent).toBe('Hello, World!')
    })

    // Define a test case for the second greeting
    test('dispaly second greeting',()=>{

        // Create an instance of the "c-hello-world" component
        const element=createElement('c-hello-world',{
            is:HELLO_WORLD
        })

        // Adding the component to the `body` of the `document`
        document.body.appendChild(element)

        // Selecting the second `div` element in the component's shadow tree and checking its text content
        const firstDiv=element.shadowRoot.querySelector('div.second')

        // Assert that the second div's text content is "My World"
        expect(firstDiv.textContent).toBe('My World')
    })
})