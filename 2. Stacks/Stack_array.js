/* Author: Samuel Tiokeng
*  Description: Creating a Custom stack class
*  Date: 17th January 2022
*/

class Stack {
    constructor() {
        this.items = []
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element
        this.count++;
    }

    pop() {
        if(this.isEmpty()) {
            return undefined
        }
        this.count--;
        const result = this.items[this.count]
        delete this.items[this.count]
        return result;

    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count
    }

    clear() {
        this.items = [];
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



