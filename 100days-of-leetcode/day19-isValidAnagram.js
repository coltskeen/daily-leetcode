/**
 * Given two strings, write a function to determine if the second string
 * is an anagram of the first. An anagram is a word, phrase, or name
 * formed by rearranging the letters of another, such as cinema, formed from iceman.
 * 
 * ASSUME: the string contains only lowercase alphabet characters.
 * Time Complexity - O(N)
 * 
 * @param {string} str1 
 * @param {string} str2 
 */

//FIRST SOLUTION: O(3N) --> O(N)
function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    if(str1.length === 0 && str2.length === 0) return true;
    if(str1.length !== str2.length) return false;

    let storage1 = {};
    let storage2 = {};
    for(let char of str1) {
        if(!storage1[char]){
            storage1[char] = 1;
        } else {
            storage1[char] += 1;
        }
    }
    for(let char of str2) {
        if(!storage2[char]){
            storage2[char] = 1;
        } else {
            storage2[char] += 1;
        }
    }
    for(let char in storage1) {
        if(storage2[char] !== storage1[char]) return false;
    }
    return true;
}

//SECOND SOLUTION: O(2N) --> O(N)
function validAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    let storage = {};

    for(let char of str1) {
        if(!storage[char]) storage[char] = 1;
        else storage[char] += 1;
    }
    for(let char of str2) {
        if(storage[char]) storage[char] -= 1;
        else return false;
    }
    
    return true;
}

// TEST CASES:
console.log(validAnagram("", "")); //True
console.log(validAnagram("aaz", "zza")); //False
console.log(validAnagram("anagram", "nagaram")); //True
console.log(validAnagram("rat", "car")); //False
console.log(validAnagram("awesome", "awesom")); //False
console.log(validAnagram("amanaplnacanalpanama", "acanalmanplanpamana")); //False
console.log(validAnagram("qwerty", "qeywrt")); //True
console.log(validAnagram("texttwisttime", "timetwisttext")); //True