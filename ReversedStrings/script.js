//  Complete the solution so that it reverses the string passed into it.
//  'world'  =>  'dlrow'
//  'word'   =>  'drow'

function solution(str){
    let charArray = str.split("");                      //splitting the string characters into an array
    let reverseCharArray = charArray.reverse();         //reversing the array order
    let reverseString = reverseCharArray.join("");      //joining the array back into a single string
    return reverseString;
  }