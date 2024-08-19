/* Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The" */


// long solution
/* function reverseWords(str) {
    const strArr = str.split(' ');
    strArr.reverse();
    newStr = strArr.join(' ');
    return newStr; // reverse those words
} */

// more efficient
function reverseWords(str) {
    return str.split(' ').reverse().join(' '); // reverse those words
}