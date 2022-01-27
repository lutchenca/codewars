// 01   
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(num) {
    return num.toString().split('').reverse().map(Number);
}



// 02 
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str){
    let splitStr = str.split('');
    let reverseStr = splitStr.reverse();
    let joinStr = reverseStr.join('');
    return joinStr;
}

// 03
// Write a function to split a string and convert it into an array of words. For example:
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){
    let stringToArray = string.split(" ");
    return stringToArray;
  }

// 04
// Complete the solution so that it reverses all of the words within the string passed in.
// Example:
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
function reverseWords(str){
  let splitStr = str.split(' ');
  let reverseStr = splitStr.reverse();
  let joinStr = reverseStr.join(' ');
  return joinStr;
}