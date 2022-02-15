/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
let max = nums[0];
  let current = max;
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i] + current, nums[i]);
    max = Math.max(current, max);
  }
  return max;
};