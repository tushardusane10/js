"use strict";

const addNumbers = function (a, b) {
  if (a < 0 || b < 0) {
    console.log("Please send positive number to add");
    return;
  }
  return a + b;
};

console.log(`addNumbers(${10}, ${6}) is ${addNumbers(10, 6)}`);

// invalid function calling
// cannot invoke a function before declaring

//console.log(`addNumbers1(${20}, ${6}) is ${addNumbers1(20, 6)}`); // TODO: remove this line to get error

const addNumbers1 = function (a, b) {
  if (a < 0 || b < 0) {
    console.log("Please send positive number to add");
    return;
  }
  return a + b;
};
