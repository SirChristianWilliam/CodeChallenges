// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// /**
// //  * @param {number} x
// //  * @return {boolean}
//  */

let x = 85466458;
var isPalindrome = function(x) {
    let y = parseInt((Array.from(x.toString()).reverse()).join(""));
    if(x === y) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(x));

// -------

let g = 85390958;
var isPalindrome2 = function(g) {
    let r = parseInt((Array.from(g.toString()).reverse()).join(""));
    if(g === r) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome2(g));

