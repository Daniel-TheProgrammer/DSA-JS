/* Author: Samuel Tiokeng
*  Description: Add and Insert in an Array
*  Date: 17th January 2022
*/

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// Adding new elements
numbers.push(11);
numbers.push(12, 13);

// Insert at the first position
Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
}
console.log(numbers.insertFirstPosition(-1))

// Another way to insert at first position
numbers.unshift(-2)
numbers.unshift(-4, -3)


// Removing element from the end of the array
numbers.pop();

// Removing element from the first position
for(let i = 0; i < numbers.length; i++ ) {
    numbers[i] = numbers[i + 1]
}

// ReIndex Array function to remove undefined numbers
Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for(let i = 0; i < myArray.length; i++) {
        if(myArray[i] !== undefined) {
            // console.log(myArray[i])
            newArray.push(myArray[i])
        }
    }
    return newArray;
}

// Remove first position manually and reindex
Array.prototype.removeFirstPosition = function() {
    for(let i = 0; i < this.length; i++ ) {
        this[i] = this[i + 1];
    }
    return this.reIndex(this);
}

numbers = numbers.removeFirstPosition();

// Remove element from beginning of array is
numbers.shift();