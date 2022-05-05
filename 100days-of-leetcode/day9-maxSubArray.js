// Find the largest possible sum of a contiguous subarray, 
// within a given one-dimensional array A[1…n] of numbers.

/**
 * @param {number[]} nums
 * @return {number}
 */

//BRUTE FORCE:
//Time Complexity: O(N**2)
//Space Complexity: O(1)
var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    while (nums.length != 0) {
        let currentSum = 0;
        for(let i = 0; i < nums.length; i++) {
            currentSum += nums[i];
            if(currentSum > maxSum) maxSum = currentSum;
        }
        nums.shift();
    }
    return maxSum;
};

//KADANE'S ALGORITHM: 
//Formula: LocalMax[i] = max(A[i], A[i] + LocalMax[i-1])
//Time Complexity: O(N)
//Space Complexity: O(N)
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
};

