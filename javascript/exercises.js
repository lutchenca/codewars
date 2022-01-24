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

