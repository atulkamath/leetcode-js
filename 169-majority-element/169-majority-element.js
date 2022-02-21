/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counter = 0;
    let candidate = nums[0]
    for(let i =0; i<nums.length;i++) {
        if(counter===0) {
            candidate = nums[i]
        }
        if(candidate===nums[i]) {
            counter++
        }
        else {
            counter--
        }
    }
    return candidate
};