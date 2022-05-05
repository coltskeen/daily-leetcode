/*
 * reverse: Given an array of objects, return an array with the elements in
 * reverse order.
 *
 * Signature: (arr = [Object]) -> [Object]
 *
 * Time/Space Complexity:
 * Standard - O(n)/O(n)
 * In-place - O(n)/O(1)
 *
 * Examples:
 * 1. reverse([1, 2, 3]) = [3, 2, 1]
 * 1. reverse(['a', 'b', 'c']) = ['c', 'b', 'a']
 */

//Solve by "out-of-place" - making a new array

function reverseArr(arr) {
  //create a new empty array
  let newArr = [];
  //iterate over the input array backwards
  for (var i = arr.length - 1; i >= 0; i--) {
    //get the last element and add it to the newArr
    newArr.push(arr[i]);
  }
  //return new array
  return newArr;
}

// let output = reverseArr([1, 2, 3]);
let output = reverseArr(['lift off!', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'])
console.log(output);

//Solve "In place" meaning reverse the order in the same array without using the .reverse method

//write a function takes an input array and reverse the arrays order without creating a new array
function reverseSameArray(arr) {
  //QUESTION -- HOW DO I STOP THE LOOP??? -- GUESS: define the length prior to the for loop
  //define the length before the for loop
  let arrLength = arr.length;
  //loop over the array from back to front starting at the orginal arrays length each time
  for (var i = arrLength-1; i >= 0; i--) {
    // add the first index to the end
    arr.push(arr[i]);
  }
  //loop over the array again from front to the original array length 
  for (var i = 0; i < arrLength; i++) {
    //delete the first index
    arr.shift();
  }
  //return the arr after it has been reversed
  return arr;
}

var output = reverseSameArray([1, 2, 5, 3]);
console.log(output);
