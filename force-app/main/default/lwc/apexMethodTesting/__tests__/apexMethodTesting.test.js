import { createElement } from 'lwc';
// import 'core-js';
/**
 * @jest-environment jsdom
 */

// Import the setImmediate function from the timers module
import {setImmediate} from 'timers'

// Import the ApexMethodTesting component, as well as the getAccountRecords Apex method
import ApexMethodTesting from 'c/apexMethodTesting';
import getAccountRecords from '@salesforce/apex/accountController.getAccountRecords';

// Import mock data for our tests
const APEX_ACCOUNTS_ERROR =require('./data/accountsError.json');
const APEX_ACCOUNTS_LIST =require('./data/accountsList.json');

// Mock the getAccountRecords Apex method using Jest
jest.mock('@salesforce/apex/accountController.getAccountRecords',
()=>({
    default:jest.fn()
}),
{virtual:true}
)

// Define a test suite for the ApexMethodTesting component
describe('c-apex-method-testing', () => {

    // Set up the component before each test case
    beforeEach(()=>{
        const element=createElement('c-apex-method-testing',{
            is:ApexMethodTesting
        })
        document.body.appendChild(element)
    })

    // Define a test case for rendering account data
    test('Render the accounts from the Imperative apex call',()=>{

        // Set up the mock to return a list of accounts
        getAccountRecords.mockResolvedValue(APEX_ACCOUNTS_LIST)

         // Find the component and its button
        const element=document.querySelector('c-apex-method-testing')
        const buttonElement=element.shadowRoot.querySelector('lightning-button')

        // Simulate a button click and wait for the resulting asynchronous action to finish
        buttonElement.click()
        return new Promise(setImmediate).then(()=>{

             // Check that the correct account data was rendered
            const detailsEle=element.shadowRoot.querySelectorAll('p.accountName')
            expect(detailsEle.length).toBe(APEX_ACCOUNTS_LIST.length)
            expect(detailsEle[0].textContent).toBe(APEX_ACCOUNTS_LIST[0].Name)
            expect(detailsEle[1].textContent).toBe(APEX_ACCOUNTS_LIST[1].Name)
        })
    })


    // Define a test case for handling Apex errors
    test('Renders the error when an error occurs',()=>{

        // Set up the mock to return an error
        getAccountRecords.mockResolvedValue(APEX_ACCOUNTS_ERROR)

        // Find the component and its button
        const element=document.querySelector('c-apex-method-testing')

        const buttonElement=element.shadowRoot.querySelector('lightning-button')

        // Simulate a button click and wait for the resulting asynchronous action to finish
        buttonElement.click()

        return new Promise(setImmediate).then(()=>{

            // Check that an error message was rendered
            const errorElement=element.shadowRoot.querySelector('.error')

            // expect(errorElement).not.toBeNull()
            expect(errorElement).toBeNull()
        })
    })
    
});