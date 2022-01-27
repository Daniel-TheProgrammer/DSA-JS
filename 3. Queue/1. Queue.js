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

const queue = new Queue();
console.log(queue.isEmpty())

queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());

queue.enqueue('Camila')

console.log(queue.toString())
console.log(queue.size())
console.log(queue.isEmpty())
queue.dequeue();
queue.dequeue();
console.log(queue.toString())

function hotPotato(elementsList, num) {
    const queue = new Queue();
    const eliminatedList = [];

    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }

    while(queue.size() > 1) {
        for(let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }

    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`)
})

console.log(`The Winner is: ${result.winner}`)