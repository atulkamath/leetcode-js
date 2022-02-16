/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let temp;
    let one = 1;
    let two = 1;
    for(let i =0; i<n-1;i++) {
        temp = one;
        one+= two;
        two = temp;
    }
    return one
};
