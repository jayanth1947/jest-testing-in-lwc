import { createElement } from 'lwc';
import NestedParent from 'c/nestedParent';

// Defining a constant for the expected user name
const USER_RESULT='Ram'

// Describe block to group the test cases for the 'c-nested-parent' component
describe('c-nested-parent suite', () => {

    // beforeEach block to create the component element before each test case
    beforeEach(()=>{
        const element=createElement('c-nested-parent',{
            is:NestedParent
        });

        // Adding the element to the DOM
        document.body.appendChild(element)
    })

     // Test case to check if the child component is rendered or not
    test('To check the child element render or not',()=>{
        const element=document.querySelector('c-nested-parent')
        const childCmp=element.shadowRoot.querySelectorAll('c-nested-child')

        // Asserting that only one child component is rendered
        expect(childCmp.length).toBe(1)
    })


    // Test case to set the user data property of the child component and check if it is rendered correctly
    test('Set the user Data Property',()=>{
        const element=document.querySelector('c-nested-parent')
        const childCmp=element.shadowRoot.querySelector('c-nested-child')

        // Asserting that the user name property of the child component is set correctly
        expect(childCmp.userDetail.Name).toBe(USER_RESULT)
    })



});