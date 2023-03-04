// 70. Climbing Stairs
// Easy
// 17.3K
// 531
// Companies
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Answer 1:  dynamic: 

function climbStairs(n) {
    if (n === 1) {
      return 1;
    }
    if (n === 2) {
      return 2;
    }
  
    const x = new Array(n).fill(0); 
  
    console.log('what is x', x);
    x[1] = 1;
    x[2] = 2;
    console.log('what is x now?', x);
    for (let i = 3; i <= n; i++) {
      x[i] = x[i - 1] + x[i - 2];
  console.log('what is i', i, 'and what is x',x);
  
    }
    console.log('what is x[n] final answer?',x[n])
    return x[n];
  }

  //example 2:
  var climbStairs = function (n) {
    let cache = {
        0: 1,
        1: 1
    }
    if (n <= 1) return cache[n]

    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2]
    }

    return cache[n]
};
