"use strict";

/*const massMark = 78,
  heightMark = 1.69;

const massJohn = 92,
  heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("BMI Mark".concat(" = ").concat(BMIMark));
console.log("BMI John".concat(" = ").concat(BMIJohn));

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI ? "Mark BMI is higher" : "John BMI is higher");

*/
let test = "abc";
console.log(test);

//function declaration start
/*
    function declaration can be called before declaring a function due to hoisting
*/
console.log(add(3, 5));
function add(a, b) {
  return a + b;
}

// function declartion end

// function expression start
/*
      function expression cannot be called before declaring it 
*/
// console.log(calculateSum(3, 5)); comment this line to get exception
const calculateSum = function (a, b) {
  console.log(`function expression : calculate sum for ${a} and ${b}`);
  return a + b;
};
console.log(calculateSum(3, 5));
// function expression end

// Arrow function start
const summation = (a, b) => a + b;
console.log(summation(10, 5));
// Arrow function end
