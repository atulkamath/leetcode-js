/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 let stack = [];
  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (char === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (char === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else {
      return false;
    }
  }
  if (stack.length > 0) {
    return false;
  }
  if (stack.length === 0) {
    return true;
  }
};