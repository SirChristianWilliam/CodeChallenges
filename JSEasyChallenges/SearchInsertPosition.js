// 35. Search Insert Position
// Easy
// 12.4K
// 545
// Companies
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Forced method: 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// var searchInsert = function (nums, target) {
//     if (nums.includes(target)) {
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] === target) {
//                 // console.log(i);
//                 return i;
//             }
//         }
//     } else {
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] === (target - 1)) {
//                 // console.log(i + 1);
//                 return i + 1;
//             }
//         }
//     }
// };
// console.log('the index is:', searchInsert([1,3,5,6],2));

// Efficient method
function searchInsert(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }

  console.log('the index is:', searchInsert([1,3,5,6],2));
