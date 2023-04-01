// Import necessary modules and components
import { createElement } from 'lwc';
import WireTesting from 'c/wireTesting';
import getContacts from '@salesforce/apex/contactController.getContacts';
import {registerApexTestWireAdapter} from '@salesforce/sfdx-lwc-jest';

// Import mock data for testing
const mocKgetContactsLists=require('./data/getContacts.json')
const mocKDataNocontactLists=require('./data/getContactsNoRecords.json')

// Register the Apex class as a wire adapter for Jest testing
const getContactList=registerApexTestWireAdapter(getContacts)

// Define test suite
describe('c-wire-testing', () => {

    // Run before each test
    beforeEach(()=>{

        // Create an instance of the component and append it to the DOM
        const element=createElement('c-wire-testing',{
            is:WireTesting
        })
        document.body.appendChild(element)
    })

    // Run after each test
    afterEach(()=>{

        // Clear all mock functions
        jest.clearAllMocks()
    })

    // Test if the component can render the contacts
    test('Testing whether the records is rendered or not',()=>{

        // Get the component instance
        const element=document.querySelector('c-wire-testing')

        // Emit the mock data to the wire adapter
        getContactList.emit(mocKgetContactsLists)

         // Return a promise and then test whether the data is rendered properly
        return Promise.resolve().then(()=>{

            // Select all <p> elements within the component's shadow root
            const pElement=element.shadowRoot.querySelectorAll('p')

            // Check if the number of <p> elements matches the number of records in the mock data
            expect(pElement.length).toBe(mocKgetContactsLists.length)

            // Check if the first <p> element's text content matches the name of the first record in the mock data
            expect(pElement[0].textContent).toBe(mocKgetContactsLists[0].Name)
        })
    })

     // Test if the component can render properly when no data is returned
    test('Renders no reocrd when they are not available',()=>{

        // Get the component instance
        const element=document.querySelector('c-wire-testing')

        // Emit the mock data to the wire adapter
        getContactList.emit(mocKDataNocontactLists)

        // Return a promise and then test whether no data is rendered
        return Promise.resolve().then(()=>{

            // Select all <p> elements within the component's shadow root   
            const pElement=element.shadowRoot.querySelectorAll('p')

            // Check if the number of <p> elements is equal to the number of records in the mock data
            expect(pElement.length).toBe(mocKDataNocontactLists.length)
        })
    })

     // Test if the component can handle errors
     test('When there is an error',()=>{

        // Get the component instance
        const element=document.querySelector('c-wire-testing')

         // Emit an error to the wire adapter
        getContactList.error()

        // Return a promise and then test whether an error is rendered
        return Promise.resolve().then(()=>{

            // Select the element with class 'error' within the component's shadow root
            const errorElement=element.shadowRoot.querySelector('.error')

            // Check that the text content of the error element is not null
            expect(errorElement.textContent).not.toBeNull()
        })
     })

});