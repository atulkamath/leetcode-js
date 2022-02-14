/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let zeroIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
        nums[zeroIdx]=nums[i]
        zeroIdx++
    }
  }
    return zeroIdx
};