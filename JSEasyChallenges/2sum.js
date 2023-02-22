// https://leetcode.com/problems/two-sum/ QUESTION 1

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

let nums = [2,7,11,15];
let target = 9;

// ANSWER: 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if((nums[i] + nums[j] == target)) {
                return [i,j];
            }
        }
    }
};

let results = twoSum(nums,target);
console.log(results, "Are the results answers");

