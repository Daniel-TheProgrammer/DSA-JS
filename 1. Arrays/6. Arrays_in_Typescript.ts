/* Author: Samuel Tiokeng
*  Description: Arrays in TypeScript
*  Date: 17th January 2022
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

interface Person {
    name: string;
    age: number;
}

const friends: { name: string, age: number }[];
const friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 }
]

function comparePerson(a: Person, b:Person) {
    
}