/*
 * Validate Parenthesis
 *
 * Write a function named "validateParenthesis" which, given a string containing
 * the characters "(", ")", returns a boolean indicating whether the parenthesis
 * are balanced.
 *
 * I/O:
 *
 * Input: string - containing only the characters "(" and ")"
 * Output: boolean - true if balanced, false otherwise
 *
 * Examples:
 *
 * "()"   -> true
 * "(())" -> true
 * "())"  -> false
 * ")("   -> false
 *
 * Additional Constraints:
 *
 * Max Time Complexity:  O(n)
 * Max (auxillary) Space Complexity: O(n)
 *
 * Hints:
 *
 * What precisely does it mean for parenthesis to be balanced? Can you
 * come up with a few properties which all balanced parenthesis all adhere to?
 */

// Properties to check:
// 1. Every ")" is preceeded by a corrresponding "(" parenthesis.
// 2. The number of "(" === number of ")"


function validateParens(str) {
    let array = str.split('');
  
    //Iterate over the array
    while(array.length > 0) { 
      //if array[0] is ')' delete the pair from the array until the array[0] is undefined
      if(array[0] === '(' && array.length > 1) {
        array.splice(0, 1);
        for (let j = 0; j < array.length; j++) {
          if(array[j] === ')') {
            array.splice(j, 1);
            break;
          }
        }
        if(array[0] === undefined) return true;  
      }
      //else if the above conidition isn't met return false
      else return false; 
    }
    //if the input str in empty return false
    return false;
}
  
//TEST SUITE
console.log(validateParens("()"), "--> true");
console.log(validateParens("(((())))"), "--> true");
console.log(validateParens("())"), "--> false");
console.log(validateParens("(()"), "--> false");
console.log(validateParens(")("), "--> false");
console.log(validateParens(")"), "--> false");
console.log(validateParens("("), "--> false");
console.log(validateParens(""), "--> false");