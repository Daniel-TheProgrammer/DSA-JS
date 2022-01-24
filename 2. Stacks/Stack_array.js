/* Author: Samuel Tiokeng
*  Description: Creating a Custom stack class
*  Date: 17th January 2022
*/


class Stack {
    constructor() {
        items.set(this, []);
    }

    push(element) {
        const s = items.get(this);
        s.push(element)
    }

    pop() {
       return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = []
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



// Algorithm to convert binary to decimal
function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = ''

    while(number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}


console.log(decimalToBinary(10))

