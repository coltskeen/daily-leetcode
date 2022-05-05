/*
 * twoSum: Given an array of integers `nums` and an integer `target`, return the
 * indicies of the two numbers in the array which add up to `target`.
 *
 * Note: Each input will have exactly one solution, and you may not use the same
 * element twice.
 *
 * Signature: (nums = [Number], target = Number) -> [Number, Number]
 *
 * Time/Space Complexity:
 * Brute Force: O(n²)/O(1)
 * Optimized:   ?/?
 *
 * Examples:
 * 1. twoSum([2, 7, 11, 15], 9) -> [0, 1]
 * 2. twoSum([3, 2, 4], 6) -> [1, 2]
 * 3. twoSum([3, 3], 6) -> [0, 1]
 */

//INPUTS: array integers and a target sum

//DATA STRUCTURES/METHODS TO TRY: 
// --> Brute force
// --> Hash Map?

//OUTPUTS: output the two integers' indexes as an array where the numbers sum is equal to the target

//BRUTE FORCE: two loops to sum the current index with the others
//and check against the target --> O(n^2)
// const twoSum = (arr, target) => {
//     let temp = 0;
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             if(j!==i) {
//                 temp = arr[i] + arr[j];
//                 if(temp === target) return [i, j];
//                 else temp = 0;
//             }
//         }
//     }
//     return [-1, -1];
// }

const twoSum = (arr, target) => {
    let hashTable = {};
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (hashTable[diff] !== undefined && hashTable[diff] !== i) {
            return [hashTable[diff], i];
        } else {
            hashTable[arr[i]] = i;
        }
    }
    return [];
}




//TESTS: 
console.log(twoSum([2, 7, 11, 15], 9)) //[0,1]
console.log(twoSum([3, 2, 4], 6)) //[1, 2]
console.log(twoSum([3, 3], 6)) //[0, 1]
console.log(twoSum([10, 8, 7, 5, 3], 10)) //[2, 4]
console.log(twoSum([], 6)) //[-1, -1]
console.log(twoSum([6, 3, 3], 6)) //[1, 2]
console.log(twoSum([6, 2, 3, 9, -5, 5, 7, 2], 1)) //[0, 4]