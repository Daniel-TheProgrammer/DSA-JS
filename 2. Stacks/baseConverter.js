/* Author: Samuel Tiokeng
*  Description: Binary to decimal
*  Date: 22nd January 2022
*/

import Stack from './Stack_array'


function baseConverter(decNumber, base) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decNumber;
    let rem;
    let baseString = '';

    if(!(base >= 2 && base <= 36)) {
        return ''
    }

    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while(!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]
    }

    return baseString;
}

console.log(baseConverter(10, 2))