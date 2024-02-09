"use strict";

var userName = "Tushar";
displayName(); // simpel e example of function hoisting
function displayName() {
  console.log(`Your name is ${userName}`);
}
//var userName = "Tushar";

// hoistedFunctionExpressionWithVar(); // gives error even though declared as var type reason it used even before initialized
// Which results to evaluate to undefined and hence the error
var hoistedFunctionExpressionWithVar = function () {
  console.log(`hoistedFunctionExpressionWithVar in action`);
};

// hoistedFunctionExpressionWithLet(); // gives error even because the varible is yet to intialized and it is in Temoral Dead Zone(TDZ)
// hoistedFunctionExpressionWithLet();
let hoistedFunctionExpressionWithLet = function () {
  console.log(`hoistedFunctionExpressionWithLet in action`);
};
// hoistedFunctionExpressionWithConst(); // gives error even because the varible is yet to intialized and it is in Temoral Dead Zone(TDZ)
// hoistedFunctionExpressionWithConst();
const hoistedFunctionExpressionWithConst = function () {
  console.log(`hoistedFunctionExpressionWithConst in action`);
};

// hoistedArrowExpressionWithVar(); // gives error even though declared as var type reason it used even before initialized
// Which results to evaluate to undefined and hence the error
hoistedArrowExpressionWithVar();
var hoistedArrowExpressionWithVar = () => {
  console.log(`hoistedArrowExpressionWithVar in action`);
};

// hoistedArrowExpressionWithLet();
let hoistedArrowExpressionWithLet = () => {
  console.log(`hoistedArrowExpressionWithLet in action`);
};
//hoistedArrowExpressionWithConst();
const hoistedArrowExpressionWithConst = () => {
  console.log(`hoistedArrowExpressionWithConst in action`);
};

/**
 * Here we are calling the function even before whe have declare/expressed;
 *  In similar lines a function expression/arrow function behave differently depending on the type variable used to assig variable
 * uf used var then hey are hoisted else for let and const they are not.
 */

displayName1(); // simpel e example of var variable hoisting
function displayName1() {
  console.log(`Your name is ${userName1}`);
}
var userName1 = "Tushar";

/**
 * Here we are calling the function even before whe have declare/expressed; and trying to access a variable
 * which is yet to be declared and intialized.
 * THis was causing a lot of issue in language.Hence let and const type were introduced.
 */

displayName2(); // simpel e example of var variable hoisting
function displayName2() {
  console.log(`Numbers are ${num1} and ${num2}`);
}
let num1 = 10;
const num2 = 20;
/**
 * let and const are not hoisted i.e if we run the code we would get an error line no 29 as.
 * We are trying to access the let and const even before initailizing them
 *
 */

/* Best Practise to avoid issues due to hoisting
* 1) Never declare variable using var instead use const if the value is not suppose 
  to change and let in case values are meant to chnage
  2) never use functions before declaration even though that is possible
*/
