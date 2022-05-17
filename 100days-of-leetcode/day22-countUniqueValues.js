/** 
 * Write a function called countUniqueValues which accepts a sorted 
 * array, and counts the unique values in the array. There can be 
 * negative numbers in the array but it will still be sorted.
 */

//MULITPLE POINTERS SOLUTION: TIME COMPLEXITY --> O(N^2) (B/C SPLICE)
function countUniqueValues(arr){
    let first = 0;
    let second = 1;
    while(second < arr.length) {
        if(arr[second] === arr[first]) {
            arr.splice(second, 1);
        } else {
            second++;
            first++;
        }
    }
    return arr.length;
}


//BETTER MULITPLE POINTERS SOLUTION: TIME COMPLEXITY --> O(N)
function countUniqueValues(arr) {
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}


//TEST CASES:
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4