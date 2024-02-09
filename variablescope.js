"use strict";

// varibales and function defined in file/outside of every thing has a global scope
// below is the example for global scope

displayMessage();
function displayMessage() {
  console.log(`display global varibale ${globalVariabl}`);
}

var globalVariabl = 10;

// o/p is display global varibale undefined
// explanation
/* 
 1) If you observe carefully we have called the function even before it's declaration.We were able to do so 
    because functions have a global scope
 2) another point to observe is that the varible(globalVariabl) is defined after the function call, 
    and we are accessing the varible(globalVariabl) in side the function, hence we get undefined.
    But this shows thtat the variables to have global scope
*/

// variable defined in the function have function scope i.e
// below is the example for function scope

let username = "Tushar";
const profession = "Software Engineer";
var maritalStatus = "Married";
getDetails();
function getDetails() {
  let age = 35;
  var residentialAddress = "Pune";
  let noOfBoys = 1;
  let noOfGirls = 0;
  const totalChildrens = noOfBoys + noOfGirls;
  function displayDetails() {
    console.log(`Hello!,\n My name is ${username} and I'm ${age} years old, My Profession 
    is ${profession}. My Marital Status is ${maritalStatus} have total kids ${totalChildrens}, Number of Boys = ${noOfBoys}, number of Girls = ${noOfGirls} . Currently residing in ${residentialAddress}`);
  }
  displayDetails();
}

/**
 * o/p Hello!,
  My name is Tushar and I'm 35 years old, My Profession 
  is Software Engineer. My Marital Status is Married have total kids 1, Number of Boys = 1, number of Girls = 0 . 
  Currently residing in Pune
 * Explanation:
      There is no deference in behaviour for let const and var type variable in global scope and function scope.

      Line 32 is trying to access username and age variables for displaying the result on console
      Interpreter tries to find it in it local function scope i.e in displayDetails().
      As they are not present in displayDetails(), it looksup in the outer function i.e getDetails()
      Interpreter finds age variable in the outer function scope hence is places the age value in the out put.
      same thing happens with name and as it is found in global space hence it is replaced.
 */

// variable defined in the block scope
//i.e below is the example for function scope

var test = "Tushar";
getDetails1();
function getDetails1() {
  if (test === "Tushar") {
    let test1 = 10;
    const test2 = 20;
    var test3 = 30;
    function addNumbers(a, b, c) {
      return a + b + c;
    }
  }

  //console.log(`Adding of 3 no is ${addNumbers(2, 3, 4)}`); // uncommenting this lines gives error
  // console.log(`Display let test ${test1}`); // uncommenting this lines gives error
  //console.log(`Display const test ${test2}`); // uncommenting this lines gives error
  console.log(`Display var test ${test3}`);
}
// console.log(`Display var test outside getDetails() ${test3}`); // uncommenting this lines gives error

/**
 * o/p Hello!,
  My name is Tushar and I'm 35 years old, My Profession 
  is Software Engineer. My Marital Status is Married have total kids 1, Number of Boys = 1, number of Girls = 0 . 
  Currently residing in Pune
 * Explanation:
      Block scope : Similar to oops block scope, all the variable except var defined in the blocks have block scope.
      i.e they cannot be access outside of the block check line no  74 and 75 
      Line no 73 shows that even the function defined within a block has a block scope
      Line 78 is commented as the var variable is defined in getDetails1(), hence has a function scope 
      i.e they are accessible with the function and not outside ot the function
 */
