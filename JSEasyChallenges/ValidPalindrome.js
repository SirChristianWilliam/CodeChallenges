// 125. Valid Palindrome
// Easy
// 6.1K
// 6.7K
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// my solution: 

/**
 * @param {string} s
 * @return {boolean}
 */

// let s = " the! do:g jump5ed over a lot4";
let s = "r-Ac!e!cA{r}:";
var isPalindrome = function (s) {
    let newArray = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/gi)) {
            newArray.push(s[i]);
        }
    }
    return (newArray.join("").toLowerCase() == newArray.reverse().join("").toLowerCase())
};
console.log(isPalindrome(s));
