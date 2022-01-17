/* Author: Samuel Tiokeng
*  Description: Creating a Custom stack class
*  Date: 17th January 2022
*/

class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = [];
    }
}

