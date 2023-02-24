// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.


// /**
// //  * @param {string} s
// //  * @return {number}
// //  */

// //Example that works but is inefficient:
// var lengthOfLastWord = function(s) {
//     let result = "";
//     for(let i = s.length-1; i > 0; i--) {
//       if(s[i] != "" && s[i] != " " ) {
//             result+=s[i];
//         }
//          else if(result.length > 0 && (s[i] == "" || s[i] == " " )) {
//             console.log('what is it',result.length);
//             return result.length;
//         }
//         else if(s[i] == "" || s[i] == " " || Number(s[i])) {
//             console.log('skip it');
//         }   
//     }
//     console.log('result is',result);
//         return ('what is',result.length);
// };

// Example that is more efficient:

let s = "   bing bong haha yo yo waddup world    ";
var lengthOfLastWord = function(s) {
    s= s.trim();
    console.log('wat s',s);
    let result = "";
    for(let i = s.length-1; i >= 0; i--) {
        if(s[i] != " ") {
            result+=s[i];
        } else {
            return result.length;
        }
    }
    return result.length;
};

console.log(lengthOfLastWord(s));