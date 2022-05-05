/* function with two params 
- arrays sorted in ascending order
- merged arrays into another array also sorted
*/

//INPUTS: two sorted arrs

//EDGE CASE: negative numbers, empty arrays, varying lengths of arrays
//METHODS: 

//OUTPUTs: one sorted of the two combined arrays

function sortedArr(a, b) {

    let newArr = a.concat(b);
    newArr.sort((a, b) => a - b);

    return newArr;
}

//test cases
console.log(sortedArr([1, 2, 3], [2, 5, 6])); // -> [1, 2, 2, 3, 5, 6]
console.log(sortedArr([], [2, 5, 6])); // -> [2, 5, 6]
console.log(sortedArr([-1, -2, -3], [-4, 5, 6])); // -> [-1, -2, -3, -4, 5, 6]
console.log(sortedArr([4, 7, 9, 20], [1, 2])); // -> [1, 2, 4, 7, 9, 20]
console.log(sortedArr([1, 8], [2, 10, 30])); // -> [1, 2, 8, 10, 20]