// describe is used for describing the functionality
describe('SUM functionality',()=>{
    // beforeEach is used for executing before the test cases
    beforeEach(()=>{
        console.log("Before Each test");
    })
    // afterEach is used for executing after the test cases
    afterEach(()=>{
        console.log("After Each Test");
    })
    // "test" is used to run the actual tests
    test('add 1+2 to equal 3',()=>{
        const num=1+2
        // "except" is used when you want to test a value
        // "tobe" is a matcher
        expect(num).toBe(3)
    }) 
})
