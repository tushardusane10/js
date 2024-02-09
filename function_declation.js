"use strict";

function addNumbers(a, b) {
  if (a < 0 || b < 0) {
    console.log("Please send positive number to add");
    return;
  }
  return a + b;
}

console.log(`addNumbers(${10}, ${6}) is ${addNumbers(10, 6)}`);

// function calling
// can invoke a function before declaring
console.log(`addNumbers1(${20}, ${6}) is ${addNumbers1(20, 6)}`);

function addNumbers1(a, b) {
  if (a < 0 || b < 0) {
    console.log("Please send positive number to add");
    return;
  }
  return a + b;
}


const summation = function (number1, number2) {
  return number1 + number2;
}
console.log(`Som of 2 numbers is ${summation(3,5)}`);

//Arow function

let sum = (number1, number2) => number1 + number2;
console.log(`Sum of 2 numbers using arrow function is ${sum(3,5)}`);
