/**
 * @param {number} x
 * @return {number}
 */ 
var mySqrt = function(x) {
    let left = 1
    let right = x
    if(x<2) {
        return x
    }
    while(left < right) {
        let mid = Math.floor(left+(right-left)/2);
        if(mid*mid===x) {
            return mid
        }
       else if(mid*mid<x) {
           left = mid+1
       }
        else if(mid*mid>x) {
            right = mid
        }
    }
    return left -1
};