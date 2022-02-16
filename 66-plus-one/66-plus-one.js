/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //run a for loop from end to start
    for (let i =digits.length-1;i>=0;i--) {
    // check if element less than 9
        if (digits[i] < 9) {
     // if it is increment by 1
            digits[i]++
            return digits
        }
  // else set current elements value to 0
        else {
            digits[i] = 0
        }
    }
         digits.unshift(1)
        return digits
};