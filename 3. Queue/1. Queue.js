/* Author: Samuel Tiokeng
*  Description: Creating a Custom Queue class
*  Date: 25th January 2022
*/

class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    dequeue() {
        if(this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCoun++;
        return result;
    }

    peek() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }

    size() {
        return this.count - this.lowestCount;
    }

    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if(this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString;
    }

    
}