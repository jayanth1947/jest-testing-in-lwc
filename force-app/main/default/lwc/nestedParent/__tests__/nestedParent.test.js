import { createElement } from 'lwc';
import NestedParent from 'c/nestedParent';

const USER_RESULT='Ram'

describe('c-nested-parent suite', () => {
    beforeEach(()=>{
        const element=createElement('c-nested-parent',{
            is:NestedParent
        });
        document.body.appendChild(element)
    })

    test('To check the child element render or not',()=>{
        const element=document.querySelector('c-nested-parent')
        const childCmp=element.shadowRoot.querySelectorAll('c-nested-child')
        expect(childCmp.length).toBe(1)
    })


    test('Set the user Data Property',()=>{
        const element=document.querySelector('c-nested-parent')
        const childCmp=element.shadowRoot.querySelector('c-nested-child')
        expect(childCmp.userDetail.Name).toBe(USER_RESULT)
    })


    
});