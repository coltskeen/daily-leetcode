const { TestWatcher } = require('jest');
const LinkedList = require('./problem6-linkedList');

//JEST TEST SUITE (npm i --save-dev jest)
describe('#head', () => {
    test('it returns the current head', () => {
        const ll = new LinkedList()
        ll.prepend(10)
        ll.prepend(20)

        expect(ll.head.value).toBe(20)
    })
})

describe('#prepend', () => {
    test('it adds the element to the beginning of the list', () => {
        const ll = new LinkedList()
        ll.prepend(10)
        const oldHead = ll.head
        ll.prepend(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.size).toBe(2)
    })
})


describe('#remove', () => {
    test('it removes the first element in our list and returns its value', () => {
        const ll = new LinkedList()
        ll.prepend(10)
        const oldHead = ll.head
        ll.prepend(20)
        
        ll.remove()

        expect(ll.head.value).toBe(10)
        expect(ll.size).toBe(1)
    })
})