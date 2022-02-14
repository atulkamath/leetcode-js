/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
   let start = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[start]) {
      start++;
      nums[start] = nums[i];
    }
  }
  return start + 1;
};