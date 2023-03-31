import { createElement } from 'lwc';
import NestedChild from 'c/nestedChild';

describe('c-nested-child', () => {

    beforeEach(()=>{
         const element = createElement('c-nested-child', {
        is: NestedChild
    });
    document.body.appendChild(element);
    })
    


        
});