// 205. Isomorphic Strings
// Easy
// 6.2K
// 1.3K
// Companies
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

let s = "paper";
let t = "title";
const isIsomorphic = (s, t) => {
    if (s.length !== t.length) {
      // if the strings are not of the same length, they cannot be isomorphic
      return false;
    }
    
    const mapS = {};  
    const mapT = {};  
    
    for (let i = 0; i < s.length; i++) {
      if (!mapS[s[i]]) {
        if (mapT[t[i]]) {
          return false;
        }
        mapS[s[i]] = t[i];
        mapT[t[i]] = s[i];
      } else {
        if (mapS[s[i]] !== t[i]) {
          return false;
        }
      }
    }
    
    return true;
  };

  console.log (isIsomorphic(s,t));