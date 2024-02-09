"use strict";

displayNameDeclarativeManner();
function displayNameDeclarativeManner() {
  console.log("Greeting message from declarative function");
}

// if expression function is called before declared it willl case run time exception
//displayMessageFunctionalManner(); //uncomment to prove point at line 8
const displayMessageFunctionalManner = function () {
  console.log("Greeting message from Functional function");
};

displayMessageFunctionalManner();
//displayNameArrowFunction(); //uncomment to prove point at line 8
const displayNameArrowFunction = () =>
  console.log("Greeting message from Arrow function");
displayNameArrowFunction();

var num = 10;
const PI = function dispalyNum() {
  let num = 5;
  console.log("num" + num);
  num = num + 1;
  console.log("num : " + num);
};
dispalyNum();
//console.log("numLocal" + numLocal);
console.log("global num" + num);
