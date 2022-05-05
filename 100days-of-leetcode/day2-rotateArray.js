/*
 * rotate: Given an array `arr` and an integer `k`, return an array which
 * is shifted to the right `k` times (left if `k` is negative).
 *
 * Signature: (arr = [Object], k = Number) -> Number
 *
 * Time/Space Complexity:
 * Quadratic:  O(n²)/O(1)
 * Linear:              O(n)/O(n)
 * Linear in-Place:     O(n)/O(1)
 *
 * Examples:
 * 1. rotate([1, 2, 3], 2) -> [2, 3, 1]
 * 2. rotate([1, 2, 3], -2) -> [3, 1, 2]
 * 3. rotate([1, 2], 6) -> [1, 2]
 *
 * Edge-cases:
 * 1. Empty arrays.
 * 2. k == zero.
 * 3. k > arr.length.
 */

//Linear Out-of-Place Solution

//write a function that takes array and integer input
function rotateArrayInPlace(arr, k) {
  //edge cases
  
  

  
  //create a copy array
  let arrCopy = [];
  //defined arrays length for quick reference
  let arrLength = arr.length; 
  //conditional for if K < 0 and if K > 0
  if (k < 0) {
    arrCopy = arr.slice(Math.abs(k));
    arrCopy = arrCopy.concat(arr.slice(0, Math.abs(k)));
    // console.log(arrCopy);
  } else if (k > 0) {
    arrCopy = arr.slice(arrLength - k);
    arrCopy = arrCopy.concat(arr.slice(0, arrLength - k));
    // console.log(arrCopy);
  }
  return arrCopy;
}

var output = rotateArrayInPlace([1, 2, 3], 2);
var output2 = rotateArrayInPlace([1, 2, 3, 4, 5], -2);
console.log(output);
console.log(output2);


//Linear In-Place

function rotateArrayOutOfPlace(arr, k) {
    //edge cases
    if (arr.length === 0) {
      return [];
    } 
    if (k === 0) {
      return arr;
    }
    if (k > arr.length) {
      return "Error k is greater than array length"; 
    }


    let arrLength = arr.length;
    if (k < 0) {
      elRemoved = arr.splice(Math.abs(k), arrLength);
      arr = elRemoved.concat(arr);
    } 
    if (k > 0) {
      elRemoved = arr.splice(0, k);
      arr = arr.concat(elRemoved);
    }
    return arr;
}

var test1 = rotateArrayOutOfPlace([1, 2, 3], 2);
console.log(test1);
var test2 = rotateArrayOutOfPlace([1, 2, 3, 4, 5], -1);
console.log(test2);