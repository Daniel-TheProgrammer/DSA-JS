/* Author: Samuel Tiokeng
*  Description: Palindrome Checker
*  Date: 29th January 2022
*/


function palindromeChecker(aString) {
    if (aString === undefined || aString === null || 
        (aString !== null && aString.length === 0)) {
            return false
    }
    const deque = new Deque();
    const lowerString = aString.toLowerCase().split(' ').join('');
    let isEqual = true;
    let firstChar, lastChar;

    for(let i = 0; i < lowerString.length; i++) {
        dequeue.addBack(lowerString.charAt(i))
    }

    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if( firstChar !== lastChar ) {
            isEqual = false;
        }
    }

    return isEqual;
}