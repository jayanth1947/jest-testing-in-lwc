import { createElement } from 'lwc';
import NestedChild from 'c/nestedChild';

// Constants used in the tests
const USER_DATA = {
    Id: '1',
    Name: 'Ram'
};

const MESSAGE = 'No user data available';

// Describe block to group the test cases for the 'c-nested-child' component
describe('c-nested-child', () => {

    // Test case to check if user data is rendered based on public property
    test('renders user data based on public property', () => {

        // Creating the 'c-nested-child' component element
        const element = createElement('c-nested-child', { is: NestedChild });

        // Setting the 'userDetail' public property of the component
        element.userDetail = USER_DATA;

        // Adding the component element to the DOM
        document.body.appendChild(element);

        // Querying the 'userName' element in the component's shadow DOM
        const divElem = element.shadowRoot.querySelector('.userName');

        // Asserting that the text content of the 'userName' element matches the expected user name
        expect(divElem.textContent).toBe(USER_DATA.Name);
    });


     // Test case to check if a message is rendered when user data is not available
    test('renders message when user data is not available', () => {

        // Creating the 'c-nested-child' component element
        const element = createElement('c-nested-child', { is: NestedChild });

        // Adding the component element to the DOM
        document.body.appendChild(element);

        // Querying the 'p' element in the component's shadow DOM
        const pElement=element.shadowRoot.querySelector('.p')

        // Asserting that the text content of the 'p' element matches the expected message
        expect(pElement.textContent).toBe(MESSAGE);
    });
});
