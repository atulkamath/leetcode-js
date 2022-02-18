/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let unique = {};
  let duplicateFound = false;

  for (let i = 0; i < nums.length; i++) {
    // unique object has a key = to our current letter
    if (typeof unique[nums[i]] !== "undefined") {
      duplicateFound = true;
      return duplicateFound;
    }
    unique[nums[i]] = true;
  }
  if (!duplicateFound) {
    return duplicateFound;
  }
};
