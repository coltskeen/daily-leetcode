/**
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is a palindrome while 123 is not.
 * 
 * @param {number} x
 * @return {boolean}
 **/

//FIRST SOLUTION: Swapping characters with destructuring 
var isPalindrome = function(x) {
    if(x < 0 || x === undefined) return false;

    let arr = JSON.stringify(x).split('');
    let index = arr.length - 1;
    for(let i = 0; i <  Math.floor(arr.length / 2); i++) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        index--;
    }
    let newX = Number(arr.join(''));
    if(newX === x) return true;
    else return false;
    
}

//SECOND SOLUTION: Reversing the characters
var isPalindrome = function(x) {
    return x == x.toString().split('').reverse().join('');
}

//TWO POINTER METHOD:
var isPalindrome = function(x) {
    if(x < 0 || x === undefined) return false;

    let str = JSON.stringify(x);
    let pointer1 = 0;
    let pointer2 = str.length - 1;
    while(pointer1 < pointer2) {
        if(str[pointer1] !== str[pointer2]) return false;
        pointer1++;
        pointer2--;
    }
    return true; 
}

//TEST CASES
console.log(isPalindrome(0)); //True
console.log(isPalindrome(121)); //True
console.log(isPalindrome(1231)); //False
console.log(isPalindrome(-101)); //False
console.log(isPalindrome(10000000001)); //True
console.log(isPalindrome(3223)); //True