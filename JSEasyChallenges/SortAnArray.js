// 912. Sort an Array
// Medium
// 4.4K
// 662
// Companies
// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// Constraints:

// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104

// My answer:
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArray = function (nums) {
//   return nums.sort(function (a, b) {
//     return a - b;
//   });
// };

// console.log(sortArray([4, 2, 0, 1, 0, -4, -55, -105, 223]));



// That first answer is wrong because I'm using a built in function, even though 
// even though it passes the test cases, and even though it's time 
// complexity is O(nlog(n))
//Here is the correct version that doesn't use a built in function:
// (Uses merge sorting);


function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  const sortArray = function(nums) {
    return mergeSort(nums);
  };
  
  