/*
 * binarySearch: Given an array of integers `nums` which is sorted in ascending
 * order, and an integer `target`, return the index of `target` in `nums`, or -1
 * if it does not exist.
 *
 * Signature: (nums = [Number], target = Number) -> Number
 *
 * Examples:
 * 1. binarySearch([1, 2, 3], 2) = 1
 * 2. binarySearch([1, 2, 3], 8) = -1
 *
 * Hints:
 * 1. How can you take advantage of the fact that the array is sorted to speed
 * up the search?
*/

function binarySearch(nums, target) {

//   1. O(n): assuming target doesn't happen multiple times:
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
  

  //2. O(n): including if target occurs multiple times
  let tempArr = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      tempArr.push(i);
    } 
  }
  if (tempArr.length === 0){
    return -1;
    console.log('did this happen?')
  } else {
    return tempArr;
  }

  //3. O(n/2): 
  let firstEl = 0;
  let lastEl = nums.length - 1;
  while(firstEl <= lastEl) {
    let midPoint = Math.floor((firstEl + lastEl)/2);
    if (nums[midPoint] < target) {
      firstEl = midPoint + 1;
    } else if (nums[midPoint] > target) {
      endEl = midPoint - 1;
    }else if (nums[midPoint] === target) {
      return midPoint;
    } 
  }
  return -1;

}

//Test Cases
console.log(binarySearch([1, 2, 3], 2));
console.log(binarySearch([1, 2, 3, 4, 6, 7, 9, 10], 4));
console.log(binarySearch([], 11));
console.log(binarySearch([1, 2, 3, 4, 6, 7, 9, 10], 11));


//Edge cases
// 1. Target isn't in the nums array => return -1
// 2. Nums array is empty => return -1
// 3. Target number appears multiple times => return -1