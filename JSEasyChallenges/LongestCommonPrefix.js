// https://leetcode.com/problems/longest-common-prefix/
// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

//Here is my original answer just to get the cases to pass:

// let strs = ["flower","flow","flight"];
// var longestCommonPrefix = function(strs) {
//     let result = "";
//     for(let i = 0; i < strs.length; i++) {
//         for(let j = i+1; j < strs.length; j++) {
//             if(strs[i][0] == strs[j][0]) {
//                 result = strs[i][0];
//             } else {
//                 return "";
//             }
//                if(strs[i][1] == strs[j][1]) {
//                 result+= strs[i][1];
//                 }
//         }
//     }
//     return result;
// };

// console.log(longestCommonPrefix(strs),'is the answer');

//Obviously that's a very hacky way to get the answer. Gonna refactor now.

// Here is a much better answer after refactoring: 
let strs = ["flower","flow","flight"];
function longestCommonPrefix(strs) {
    if (strs.length === 0) {
      return "";
    }
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, prefix.length - 1);
        if (prefix === "") {
          return "";
        }
      }
    }
    
    return prefix;
  };

console.log(longestCommonPrefix(strs));
