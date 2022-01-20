/* Author: Samuel Tiokeng
*  Description: Creating a Custom stack class
*  Date: 17th January 2022
*/

const _items = Symbol('stackItems');

const items = new WeakMap();
class Stack {
    constructor() {
        items.set(this, []);
    }

    push(element) {
        const s = items.get(this);
        s.push(element)
    }

    pop() {
       const s = items.get(this);
       const r = s.pop();
       return r
    }

    peek() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    toString() {
        if(this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for(let i = 1; i < this.count; i++) {
            objString = `{objString}, ${this.items[i]}`
        }
        return objString;
    }
}

const stack = new Stack();
console.log(stack.isEmpty())

// Calling the peek
console.log(stack.peek())


// Adding another element
stack.push(11);
console.log(stack.size())
console.log(stack.isEmpty());

stack.push(5)
stack.push(8)

let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length)
console.log(objectSymbols)
stack[objectSymbols[0]].push(1);
stack.print();


const newObj = new Stack();

// Algorithm to convert binary to decimal






