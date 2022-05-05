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
 * 2. Use Recursion
 */

//0(n) SOLUTION w/RECURSION

function binarySearch(nums, target, index) {
  if (target === nums[index]) return index;
  if (nums[index] === undefined) return -1;
  return binarySearch(nums, target, index + 1);
}


//O(n/2) SOLTUION w/RECURSION

function binarySearch(nums, target, start, end) {
  if (start === undefined) start = 0;
	if (end === undefined) end = nums.length - 1;

  let midPoint = Math.floor((end - start)/2 + start);
  // console.log("Start: ", start, "End: ", end, "MidPoint: ", midPoint);
  
  if (nums[midPoint] === target) return midPoint;
  if (end <= start && nums[midPoint] !== target) return -1;
  if (nums[midPoint] < target) return binarySearch(nums, target, midPoint + 1, end);
  if (nums[midPoint] > target) return binarySearch(nums, target, start, midPoint - 1);
  else return -1;
}



//Test Cases for O(n)
console.log(binarySearch([1, 2, 3], 2, 0));
console.log(binarySearch([1, 2, 3, 4, 6, 7, 9, 10], 4, 0));
console.log(binarySearch([], 11, 0));
console.log(binarySearch([1, 2, 3, 4, 6, 7, 9, 10], 11, 0));

//Test Cases for O(n/2)

console.log(binarySearch([1, 2, 3], 2));
console.log(binarySearch([1, 2, 3, 4, 6, 7, 9, 10], 9));
console.log(binarySearch([], 11));
console.log(binarySearch([1, 2, 3, 4, 6, 7, 9, 10], 11));

//Edge cases
//1. Target isn't in the nums array => return -1
//2. Nums array is empty => return -1
//3. Target number appears multiple times => return -1

